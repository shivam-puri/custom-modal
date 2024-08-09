import React from "react"
import { useModal } from "./context/ModalContext"

const Component2 = () => {

    const { openModal } = useModal()

    return (
        <>
            This is component II
            <button onClick={(e) => openModal(e, <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa architecto quos blanditiis maiores reiciendis esse distinctio recusandae beatae corrupti velit, dolores sapiente voluptatum laboriosam nulla earum tempore debitis magni error. Reiciendis nesciunt vel, dolores dolor veniam voluptatum doloribus perspiciatis, nisi, sit dolorem aperiam exercitationem voluptates. Ex perferendis doloribus ea molestias blanditiis, ipsa amet aperiam esse ullam assumenda hic laborum odio quaerat dolor autem illo natus corrupti. Atque provident cumque quos fugit non quia consequuntur, ducimus vel pariatur ea consectetur doloribus distinctio! Provident, voluptate dignissimos error excepturi et laborum debitis.</>)} > modal3 </button>
        </>
    )
}

export default Component2