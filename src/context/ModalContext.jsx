import React, { createContext, useContext, useState, useRef } from 'react';
import { calculateDimensions, calculatePosition, createTempDiv } from '../utils/utility';
import { createRoot } from 'react-dom/client';
import Modal from '../lib-components/Modal';
import Overlay from '../lib-components/Overlay';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {

    const [modalStack, setModalStack] = useState([]);
    const offScreenRef = useRef(null);

    const openModal = async (e, content, customPosition) => {
        const buttonRect = e.target.getBoundingClientRect();
        const tempDiv = createTempDiv();
        document.body.appendChild(tempDiv);
        const root = createRoot(tempDiv);
        root.render(<ModalProvider>{content}</ModalProvider>);

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = calculateDimensions(entries, root, tempDiv);
                console.log("width, height", width, height)
                const position = calculatePosition(buttonRect, { width, height }, customPosition);
                setModalStack((prev) => [...prev, { content, position, zIndex: prev.length * 40 + 40 }]);
                resizeObserver.disconnect();
            }
        });
        resizeObserver.observe(tempDiv);
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

