import React from "react"
import { useModal } from "../context/ModalContext"
import Component4 from "./Component4"
import Component5 from "./Component5"
import Component6 from "./Component6"

const Component3 = () => {

    const { openModal } = useModal()

    return (
        <>
            <button onClick={(e) => openModal(e, <Component4 />)} >Component 4</button>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa architecto quos blanditiis maiores reiciendis esse distinctio recusandae beatae corrupti velit, dolores sapiente voluptatum laboriosam nulla earum tempore debitis magni error. Reiciendis nesciunt vel, dolores dolor veniam voluptatum doloribus perspiciatis, nisi, sit dolorem aperiam exercitationem voluptates. Ex perferendis doloribus ea molestias blanditiis, ipsa amet aperiam esse ullam assumenda hic laborum odio quaerat dolor autem illo natus corrupti. Atque provident cumque quos fugit non quia consequuntur, ducimus vel pariatur ea consectetur doloribus distinctio! Provident, voluptate dignissimos error excepturi et laborum debitis.
            <br />
            <button onClick={(e) => openModal(e, <Component5 />)}  >Component 5</button>
            <button onClick={(e) => openModal(e, <Component6 />)} >Component 6</button>
        </>
    )
}

export default Component3