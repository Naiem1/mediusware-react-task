import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import Menu from '../navigation/Menu';
import ContactGroup from './ContactGroup';
import Menu from '../Navbar';

function BaseModal({
  contacts,
  loading,
  observer,
  contactDetailsOpen,
  handleScroll,
  handleClose,
  inputChangeHandler,
  pathString,
  handleKeyPress,
  show,
  setShow,
  inputText,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pathString}</Modal.Title>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Menu pathStr={pathString} />
  
          <InputGroup className="my-4">
            <Form.Control
              placeholder="search contact"
              onChange={inputChangeHandler}
              onKeyDown={handleKeyPress}
              value={inputText}
            />
          </InputGroup>
          {/* contact group pass fetched contacts and loading as props  */}
          <ContactGroup
            contacts={contacts}
            loading={loading}
            contactDetailsOpen={contactDetailsOpen}
            handleScroll={handleScroll}
            observer={observer}
          />
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Check type="checkbox" label="Only even" />
          </Form>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BaseModal;

BaseModal.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  contactDetailsOpen: PropTypes.func,
  observer: PropTypes.object,
  handleScroll: PropTypes.func,
  handleClose: PropTypes.func,
  inputChangeHandler: PropTypes.func,
  handleKeyPress: PropTypes.func,
  pathString: PropTypes.string,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  inputText: PropTypes.string,
};
