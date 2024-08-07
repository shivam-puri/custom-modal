import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const DropdownModal = ({ buttonRef, isOpen, onClose }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [show, setShow] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen && buttonRef.current && modalRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const modalRect = modalRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Determine space around the button
            const spaceAbove = buttonRect.top;
            const spaceBelow = viewportHeight - buttonRect.bottom;
            const spaceLeft = buttonRect.left;
            const spaceRight = viewportWidth - buttonRect.right;

            let top = buttonRect.bottom;
            let left = buttonRect.left;

            if (modalRect.height > spaceBelow && spaceAbove > spaceBelow) {
                top = buttonRect.top - modalRect.height;
            }

            if (modalRect.width > spaceRight && spaceLeft > spaceRight) {
                left = buttonRect.right - modalRect.width;
            }

            setPosition({ top, left });
            setShow(true); // Show modal content with animation
        } else {
            setShow(false); // Hide modal content
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, buttonRef]);

    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 200); // Wait for the animation to complete before closing the modal
    };

    if (!isOpen && !show) return null;

    return createPortal(
        <>
            <div
                className={`fixed inset-0 z-40 modal-overlay ${show ? 'show' : ''}`}
                onClick={handleClose}
            ></div>
            <div
                ref={modalRef}
                style={{ top: position.top, left: position.left }}
                className={`absolute bg-white border rounded shadow-lg p-4 z-50 modal-content ${show ? 'show' : ''}`}
            >
                <div className="flex justify-between items-center">
                    <div className='flex flex-col'>
                        <h2>Modal</h2>
                        <button className='btn rounded bg-black text-white m-2 hover:opacity-75'  >Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                    </div>
                </div>
                <div className="mt-2">
                    <p>This is a dropdown modal content.</p>
                </div>
            </div>
        </>,
        document.body
    );
};

export default DropdownModal;
