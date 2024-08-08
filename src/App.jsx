import React, { useState } from "react";
import { useModal } from "./context/ModalContext.jsx";
import Component from "./Component.jsx";

const App = () => {

  const { openModal } = useModal();

  return (
    <>
      <button onClick={() => openModal(<Component />)} >openModal1</button>
      another
      <button>nav</button>
    </>
  )
}

export default App