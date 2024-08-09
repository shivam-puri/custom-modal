import React, { useRef, useState } from "react";
import { useModal } from "./context/ModalContext";
import Component from "./Component.jsx";

const App = () => {

  const { openModal } = useModal();

  return (
    <>
      <div style={{ width: "100", height: "100vh", display: "flex", alignItems: "start", justifyContent: "end" }} >
        <button onClick={(e) => openModal(e, <Component />)} >openModal1</button>
      </div>
    </>
  )
}

export default App