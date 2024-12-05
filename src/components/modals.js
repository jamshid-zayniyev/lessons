import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Modals = () => {
    const [show, setShow] = useState(false);

    
  return (
    <>
        <Button variant="primary" onClick={() => setShow(true)}>Open Modal</Button>
        <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modals