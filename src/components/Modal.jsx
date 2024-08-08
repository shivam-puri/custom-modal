import React, { useEffect } from 'react';

const Modal = ({ children, zIndex, top, left }) => {
    return (
        <div className={`modal`} style={{ zIndex, top, left }}>
            {children}
        </div>
    );
};

export default Modal;