import React from "react"
import Component2 from "./Component2"
import { useModal } from "../context/ModalContext"

const Component = () => {

    const { openModal } = useModal()

    return (
        <>
            <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eum quos aperiam dolor illum minima est nisi vero quisquam repellendus consequuntur. Officia quam, rem perspiciatis veniam sapiente cupiditate nulla laboriosam eligendi voluptas ad iusto, quisquam voluptatem tempora sint. Nihil, excepturi voluptatum mollitia quisquam animi voluptatibus aut totam dolores repellat id quod vero quibusdam alias cupiditate voluptatem ratione voluptate voluptas exercitationem tempora saepe fugiat fuga eaque, dignissimos et. Consequatur et, quos consectetur fugit voluptas possimus praesentium unde odio est ipsam magni temporibus earum eum atque. Eius sequi nulla totam dolore magni sit officiis optio, quibusdam velit veritatis asperiores suscipit at nihil veniam. Repudiandae debitis omnis adipisci molestias delectus fugiat, laborum dolorum porro quae non, aperiam iusto commodi cupiditate dolor! Molestiae voluptate ipsam assumenda quas voluptas vel consequatur laborum aliquid, repellat ipsa, magni magnam fuga iure recusandae nam odio. Modi rerum possimus a ipsa ut fugiat alias praesentium deserunt odio assumenda optio saepe numquam beatae dolorem asperiores est accusamus, excepturi cupiditate labore! Ut sit ullam doloremque, et vel ipsam earum possimus fuga numquam esse reprehenderit explicabo distinctio? Sapiente iure repellendus pariatur, atque nesciunt debitis sunt voluptate tenetur doloremque, laudantium cumque in facilis ad vero, error totam! Minus fugit obcaecati voluptatum dolorem eaque sed, cumque adipisci vitae veritatis quibusdam commodi aliquid voluptates porro officia. Iste, porro eaque. Cupiditate doloribus adipisci cumque quo repellat at tempora harum fuga architecto distinctio unde, iusto perferendis magnam dicta similique sunt expedita voluptas molestias, tempore rem dolor natus eligendi sequi. Voluptatem cum, facere voluptatibus </p>
                <br />
                <button onClick={(e) => openModal(e, <Component2 />)} > Click to open Component2 </button>
            </div>
        </>
    )
}

export default Component