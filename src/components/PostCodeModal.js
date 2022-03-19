import Postcode from "@actbase/react-daum-postcode";
import React from "react";
import { Modal } from "react-bootstrap";
function PostCodeModal({ show, handleClose, handleCompletePostCode }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Postcode
          jsOptions={{ animation: true }}
          onSelected={(data) => handleCompletePostCode(data)}
        />
      </Modal>
    </>
  );
}

export default PostCodeModal;
