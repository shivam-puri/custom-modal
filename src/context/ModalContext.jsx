import React, { createContext, useContext, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from '../components/Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {

    const [modalStack, setModalStack] = useState([]);
    const offScreenRef = useRef(null);

    const measureComponent = (component) => {
        return new Promise((resolve) => {
            const tempDiv = document.createElement('div');
            tempDiv.style.visibility = 'hidden';
            tempDiv.style.position = 'absolute';
            offScreenRef.current.appendChild(tempDiv);
            const root = createRoot(tempDiv);
            root.render(
                <ModalProvider>
                    {component}
                </ModalProvider>
            );

            requestAnimationFrame(() => {
                const { offsetWidth, offsetHeight } = tempDiv;
                root.unmount();
                offScreenRef.current.removeChild(tempDiv);
                resolve({ width: offsetWidth, height: offsetHeight });
            });
        });
    };

    const calculatePosition = (buttonRect, modal) => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        let top, left;

        // Check if modal can be placed at bottom right of button
        if (buttonRect.bottom + modal.height <= viewportHeight && buttonRect.right + modal.width <= viewportWidth) {
            console.log("implemented 1 ✅")
            top = buttonRect.bottom;
            left = buttonRect.right;
            return { top, left };
        }

        // Check if modal can be placed at top right of button
        if (buttonRect.top - modal.height >= 0 && buttonRect.right + modal.width <= viewportWidth) {
            console.log("implemented 2 ✅")
            top = buttonRect.top - modal.height;
            left = buttonRect.right;
            return { top, left };
        }

        // Check if modal can be placed at left top of button
        if (buttonRect.top - modal.height >= 0 && buttonRect.left - modal.width >= 0) {
            console.log("implemented 3 ✅")
            top = buttonRect.top - modal.height;
            left = buttonRect.left - modal.width;
            return { top, left };
        }

        // Check if modal can be placed at left bottom of button
        if (buttonRect.bottom + modal.height <= viewportHeight && buttonRect.left - modal.width >= 0) {
            console.log("implemented 4 ✅")
            top = buttonRect.bottom;
            left = buttonRect.left - modal.width;
            return { top, left };
        }

        // If none of the above positions are suitable, center the modal in the viewport
        top = (viewportHeight - modal.height) / 2;
        left = (viewportWidth - modal.width) / 2;

        return { top, left };
    };


    const openModal = async (e, content) => {
        const buttonRect = e.target.getBoundingClientRect();

        const tempDiv = document.createElement('div');
        tempDiv.style.width = 'fit-content';
        tempDiv.style.height = 'fit-content';
        tempDiv.style.maxWidth = "500px";
        tempDiv.style.maxHeight = "300px";
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.position = 'fixed';
        tempDiv.style.overflow = 'auto';

        document.body.appendChild(tempDiv);

        const root = createRoot(tempDiv);
        root.render(<ModalProvider>{content}</ModalProvider>); // Render the content directly

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                let { width, height } = entry.contentRect;
                width = Math.min(width + 40, 500)
                height = Math.min(height + 40, 300)
                console.log("width, height", width, height)

                root.unmount();
                document.body.removeChild(tempDiv);

                const position = calculatePosition(buttonRect, { width, height });
                setModalStack((prev) => [...prev, { content, position, zIndex: prev.length * 40 + 40 }]);
                resizeObserver.disconnect(); // Stop observing after getting the size
            }
        });

        resizeObserver.observe(tempDiv); // Start observing the temporary div
    };

    const closeModal = () => {
        setModalStack((prev) => prev.slice(0, -1));
    };

    const topModalIndex = modalStack.length - 1;

    return (
        <ModalContext.Provider value={{ modalStack, openModal, closeModal, topModalIndex }}>
            {children}
            <div ref={offScreenRef} style={{ position: 'absolute', visibility: 'hidden' }}></div>
            {modalStack.length > 0 && <Overlay zIndex={(topModalIndex + 1) * 40 - 10} />}
            <div>
                {
                    modalStack.map((modal, index) => {
                        return (
                            <Modal zIndex={(index + 1) * 40} top={modal.position.top} left={modal.position.left} key={index}>
                                {modal.content}
                            </Modal>
                        )
                    })
                }
            </div>
        </ModalContext.Provider>
    );
};

const Overlay = ({ zIndex }) => {
    const { closeModal } = useModal();
    return (
        <div
            className="overlay"
            style={{ zIndex }}
            onClick={closeModal}
        />
    );
};