import React, { useEffect, useState } from 'react';

const Modal = ({ children, zIndex, top, left, show }) => {

    const [enableShow, setEnableShow] = useState(false)

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setEnableShow(true)
            }, 200)
        }
    }, [show])

    return (
        <div className={`modal ${enableShow && show ? 'show' : ''}`} style={{ zIndex, top, left }}>
            {children}
        </div>
    );
};

export default Modal;