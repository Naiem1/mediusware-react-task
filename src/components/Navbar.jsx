import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Menu = ({ pathStr }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 pt-3 pb-4">
      <NavLink
        to="/modal-a"
        className={({ isActive }) =>
          ` btn btn-outline-primary  + ${
            pathStr?.length >= 0 ? 'btn' : 'btn-lg'
          } + ${isActive ? 'active fw-bold' : ''}`
        }
      >
        All Contacts
      </NavLink>

      <NavLink
        to="/modal-b"
        className={({ isActive }) =>
          ` btn btn-outline-warning modal-b + ${
            pathStr ? 'btn' : 'btn-lg'
          }  + ${isActive ? 'active' : ''}`
        }
      >
        US Contacts
      </NavLink>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  pathStr: PropTypes.string,
};
