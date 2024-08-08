import React from "react"
import { useModal } from "./context/ModalContext"

const Component2 = () => {

    const { openModal } = useModal()

    return (
        <>
            This is component II
            <button onClick={() => openModal(<>.</>)} > modal3 </button>
        </>
    )
}

export default Component2