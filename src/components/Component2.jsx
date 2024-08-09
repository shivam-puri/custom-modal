import React from "react"
import { useModal } from "../context/ModalContext"
import Component3 from "./Component3"

const Component2 = () => {

    const { openModal } = useModal()

    return (
        <>
            This is component II
            <button onClick={(e) => openModal(e, <Component3 />, "center-top")} > modal3 </button>
        </>
    )
}

export default Component2