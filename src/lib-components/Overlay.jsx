import { useModal } from "../context/ModalContext";

const Overlay = ({ zIndex }) => {
    const { closeModal } = useModal();
    return (
        <div
            className="overlay"
            style={{ zIndex }}
            onClick={closeModal}
        />
    );
};

export default Overlay