import React, { useEffect } from 'react';

const Modal = ({ children, zIndex, top, left }) => {
    return (
        <div className={`modal`} style={{ zIndex, top: top ? top : "", left: left ? left : "" }}>
            {children}
        </div>
    );
};

export default Modal;