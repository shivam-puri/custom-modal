import React from "react"
import Component2 from "./Component2"
import { useModal } from "./context/ModalContext"

const Component = () => {

    const { openModal } = useModal()

    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>

            <button onClick={() => openModal(<Component2 />)} > Click to open Component2 </button>
        </>
    )
}

export default Component