import React, { useRef, useState } from "react";
import { useModal } from "./context/ModalContext";
import Component from "./components/Component";

const App = () => {

  const { openModal } = useModal();

  return (
    <>
      <div style={{ width: "100", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }} >
        <button onClick={(e) => openModal(e, <Component />, "center-bottom")} >openModal1</button>
      </div>
    </>
  )
}

export default App