import React, { useState, useRef } from 'react';
import DropdownModal from './DropdownModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModal2Open, setisModal2open] = useState(false)
  const [isModal3Open, setisModal3open] = useState(false)
  const buttonRef = useRef(null);
  const button2Ref = useRef(null)
  const button3Ref = useRef(null)

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-start items-end h-screen w-full">
      <button
        ref={buttonRef}
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Dropdown Modal
      </button>
      <DropdownModal
        customPosition='top-right'
        buttonRef={buttonRef}
        isOpen={isModalOpen}

        onClose={() => setModalOpen(false)}
      >
        <div className='flex font-semibold flex-col' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus id cumque perferendis qui sunt, vero rem officia repellendus quae consequatur, ex ratione quis dolores voluptas ut minima architecto. Modi eius dolores vitae, aliquam deserunt temporibus sapiente rem dolor officia a explicabo voluptate consequuntur neque nulla ducimus maiores repellendus hic corrupti voluptatum perferendis ea. Autem, rem maxime deserunt dolore voluptatem incidunt expedita necessitatibus, quidem eaque, pariatur harum ipsa quas aliquam. Vel architecto facilis id harum, assumenda culpa quaerat impedit dolorem earum rerum quidem numquam fugiat dignissimos iste officiis aperiam velit!

          <button className='mt-5 flex hover:bg-red-700 bg-green-500' ref={button2Ref} onClick={() => setisModal2open(!isModal2Open)}  >See More..</button>
        </div>

      </DropdownModal>

      <DropdownModal
        isOpen={isModal2Open}
        buttonRef={button2Ref}
        // customPosition='top-right'
        onClose={() => setisModal2open(false)}
      >
        <div className='flex font-semibold flex-col' >
         di consequuntur est!
          <button className='flex hover:bg-red-700 bg-green-500' ref={button3Ref} onClick={() => setisModal3open(!isModal3Open)} >see more..</button>
        </div>
      </DropdownModal>

      <DropdownModal
        isOpen={isModal3Open}
        buttonRef={button3Ref}
        onClose={() => setisModal3open(false)}
        customPosition='top-right'
      >
        shivam puri aryan yadav Lorem ipsum dolor, sit amet consectetur adipisicing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel est quidem maiores odit natus animi harum nisi reprehenderit dicta quas ipsum totam atque beatae ipsa corporis veritatis temporibus consectetur, in, illo laudantium repudiandae cum voluptatum. Consectetur aliquam possimus quaerat voluptas accusamus culpa, cupiditate reprehenderit eius quasi facilis eos deserunt nostrum placeat tempore omnis. Laboriosam odit eaque at inventore ratione fuga veritatis ullam obcaecati, sint atque quidem, magnam velit omnis eligendi nesciunt. Alias laborum consectetur ratione nostrum culpa provident inventore.
      </DropdownModal>

      <button className='flex hover:bg-red-700 bg-green-500 p-36  text-xl absolute top-0 right-0' > click me</button>
    </div>
  );
}

export default App;
