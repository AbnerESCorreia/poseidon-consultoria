import { Modal } from "react-bootstrap";

const BaseModal = ({ show, handleClose, title, children, size = "lg" }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size={size}
      contentClassName="poseidon-modal-content" // Sua classe de estilo personalizada
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold w-100 text-center text-white">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-white px-4 pb-4">{children}</Modal.Body>
    </Modal>
  );
};

export default BaseModal;
