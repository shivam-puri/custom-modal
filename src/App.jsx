import React, { useState, useRef } from 'react';
import DropdownModal from './DropdownModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-start items-center h-screen">
      <button
        ref={buttonRef}
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Dropdown Modal
      </button>
      <DropdownModal
        customPosition='top-left'
        buttonRef={buttonRef}
        isOpen={isModalOpen}
        onClose={() => { setModalOpen(false) }}
      />
    </div>
  );
}

export default App;
