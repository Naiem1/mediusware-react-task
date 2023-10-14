import PropTypes from 'prop-types';
import { Badge, ListGroup } from 'react-bootstrap';

const ContactList = ({ contact, contactDetailsOpen }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      onClick={contactDetailsOpen}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{contact?.phone}</div>
      </div>
      <Badge bg="primary" pill>
        {contact?.id}
      </Badge>
    </ListGroup.Item>
  );
};

export default ContactList;

ContactList.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  contactDetailsOpen: PropTypes.func,
};
