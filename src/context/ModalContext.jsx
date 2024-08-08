import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {

    const [modalStack, setModalStack] = useState([]);

    const openModal = (content) => {
        setModalStack((prev) => [...prev, { content }]);
    };

    const closeModal = () => {
        setModalStack((prev) => prev.slice(0, -1));
    };

    const topModalIndex = modalStack.length - 1;

    return (
        <ModalContext.Provider value={{ modalStack, openModal, closeModal, topModalIndex }}>
            {children}
            {modalStack.length > 0 && <Overlay zIndex={(topModalIndex + 1) * 40 - 10} />}

            <div>
                <div>
                    {
                        modalStack.map((modalContent, index) => {
                            return (
                                <Modal zIndex={(index + 1) * 40} key={index}>
                                    {modalContent.content}
                                </Modal>
                            )
                        })
                    }
                </div>
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