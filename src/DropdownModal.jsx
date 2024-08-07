import React, { useEffect, useRef, useState } from 'react';

const DropdownModal = ({ buttonRef, isOpen, onClose, customPosition = null }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [show, setShow] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            requestAnimationFrame(() => {
                if (modalRef.current) {
                    const buttonRect = buttonRef.current.getBoundingClientRect();
                    const modalRect = modalRef.current.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const viewportWidth = window.innerWidth;

                    let top = buttonRect.bottom;
                    let left = buttonRect.left;
                    let customPositionValid = true;

                    // Custom positioning logic
                    switch (customPosition) {
                        case 'top-right':
                            top = buttonRect.top - modalRect.height;
                            left = buttonRect.right;
                            break;
                        case 'middle-right':
                            top = buttonRect.top + buttonRect.height / 2 - modalRect.height / 2;
                            left = buttonRect.right;
                            break;
                        case 'bottom-right':
                            top = buttonRect.bottom;
                            left = buttonRect.right;
                            break;
                        case 'top-left':
                            top = buttonRect.top - modalRect.height;
                            left = buttonRect.left - modalRect.width;
                            break;
                        case 'middle-left':
                            top = buttonRect.top + buttonRect.height / 2 - modalRect.height / 2;
                            left = buttonRect.left - modalRect.width;
                            break;
                        case 'bottom-left':
                            top = buttonRect.bottom;
                            left = buttonRect.left - modalRect.width;
                            break;
                        default:
                            customPositionValid = false;
                            break;
                    }

                    // Adjust position if modal exceeds viewport boundaries
                    if (customPositionValid) {
                        const spaceAbove = buttonRect.top;
                        const spaceBelow = viewportHeight - buttonRect.bottom;
                        const spaceLeft = buttonRect.left;
                        const spaceRight = viewportWidth - buttonRect.right;

                        // Check if modal fits within the viewport
                        const exceedsTop = top < 0;
                        const exceedsBottom = top + modalRect.height > viewportHeight;
                        const exceedsLeft = left < 0;
                        const exceedsRight = left + modalRect.width > viewportWidth;

                        if (exceedsTop || exceedsBottom || exceedsLeft || exceedsRight) {
                            customPositionValid = false;
                        }

                        if (!customPositionValid) {
                            // Default positioning logic
                            top = buttonRect.bottom;
                            left = buttonRect.left;

                            if (modalRect.height > spaceBelow && spaceAbove > spaceBelow) {
                                top = buttonRect.top - modalRect.height;
                            }

                            if (modalRect.width > spaceRight && spaceLeft > spaceRight) {
                                left = buttonRect.right - modalRect.width;
                            }
                        }
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
        }
    }, [isOpen, buttonRef, customPosition]);


    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 200); // Wait for the animation to complete before closing the modal
    };

    if (!isOpen && !show) return null;

    return (
        <>
            <div
                className={`fixed inset-0 z-40 modal-overlay ${show ? 'show' : ''}`}
                onClick={handleClose}
            ></div>
            <div
                ref={modalRef}
                style={{ top: position.top, left: position.left }}
                className={`absolute bg-transparent p-2 z-50 modal-content w-96 h-120 ${show ? 'show' : ''}`}
            >
                <div className="flex justify-between items-center bg-white border rounded shadow-lg w-full">
                    <div className='flex flex-col'>
                        <h2>Modal</h2>
                        <button className='btn rounded bg-black text-white m-2 hover:opacity-75'  >Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                        <button className='btn rounded bg-black text-white m-2'>Button1</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropdownModal;