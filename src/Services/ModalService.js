import {useState} from "react";

export const ModalService = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return {showModal, handleShowModal, handleCloseModal};
};
