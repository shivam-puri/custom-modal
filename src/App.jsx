import React, { useState, useRef } from 'react';
import DropdownModal from './DropdownModal';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);
    const buttonRef = useRef(null);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="flex justify-start items-start">
                <button
                    ref={buttonRef}
                    onClick={toggleModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Open Dropdown Modal
                </button>
                <DropdownModal
                    buttonRef={buttonRef}
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                />
            </div>
            <div className='w-full flex justify-end items-end flex-col'>
                <div><button className='bg-blue-500 px-4 py-2 rounded text-white hover:opacity-60'>Page1</button></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit quod ad velit enim! Deleniti illum, iste iure dolorum facere voluptate odio, quidem fugit doloremque sed enim, dolores ipsum nihil?
                </p>
            </div>
        </>
    );
}

export default App;
