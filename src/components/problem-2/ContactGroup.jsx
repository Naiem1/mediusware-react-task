import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import ContactList from './ContactList';

const ContactGroup = ({
  contacts,
  loading,
  observer,
  handleScroll,
  contactDetailsOpen,
}) => {
  return (
    <div ref={observer}
    onScroll={handleScroll}
    style={{
      height: '300px',
      overflow: 'auto',
    }}>
      <ListGroup
        as="ol"
        numbered
        // ref={observer}
        // onScroll={handleScroll}
        // style={{
        //   height: '300px',
        //   overflow: 'auto',
        // }}
      >
        {/* Map all the contacts */}
        {contacts?.map((contact) => (
          <ContactList
            contact={contact}
            key={contact.id}
            contactDetailsOpen={contactDetailsOpen}
          />
        ))}
      </ListGroup>
      {/* {loading && <h4 className='position bottom-100 left-10'>Loading..</h4>} */}
    </div>
  );
};

export default ContactGroup;

ContactGroup.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  observer: PropTypes.object,
  handleScroll: PropTypes.func,
  contactDetailsOpen: PropTypes.func,
};
