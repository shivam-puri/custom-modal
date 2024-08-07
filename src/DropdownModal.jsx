// src/DropdownModal.js
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const DropdownModal = ({ buttonRef, isOpen, onClose }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
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
        }
    }, [isOpen, buttonRef]);

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={modalRef}
            style={{ top: position.top, left: position.left }}
            className="absolute bg-white border rounded shadow-lg p-4 transition-transform transform-gpu origin-top duration-300 ease-out"
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Dropdown Modal</h3>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    &times;
                </button>
            </div>
            <div className="mt-2">
                <p>This is a dropdown modal content.</p>
            </div>
        </div>,
        document.body
    );
};

export default DropdownModal;
