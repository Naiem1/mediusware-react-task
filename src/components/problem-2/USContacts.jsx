import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import contactApi from '../../api/us-contacts';
import useApi from '../../hooks/useApi';
import useModal from '../../hooks/useModal';
import useScroll from '../../hooks/useScroll';
import BaseModal from './BaseModal';

const USContact = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const { setSearchTerm, searchTerm, handleScroll, observer, params } =
    useScroll();
  const {
    handleClose,
    handleKeyPress,
    inputChangeHandler,
    inputText,
    pathString,
    setShow,
    show,
  } = useModal(setSearchTerm, navigate, pathname);
  const getContactApi = useApi(contactApi.getUsContacts, params);
  useEffect(() => {
    getContactApi.request();
    console.log('[useEffect]');

    return () => {
      getContactApi.setContacts([]);
      getContactApi.setLoading(false);
    };
  }, [params.page, searchTerm]);

  console.log(getContactApi.contacts);

  const contactDetailsOpen = () => {};
  return (
    <BaseModal
      contactDetailsOpen={contactDetailsOpen}
      contacts={getContactApi.contacts}
      loading={getContactApi.loading}
      handleClose={handleClose}
      handleKeyPress={handleKeyPress}
      handleScroll={handleScroll}
      inputChangeHandler={inputChangeHandler}
      inputText={inputText}
      observer={observer}
      pathString={pathString}
      setShow={setShow}
      show={show}
    />
  );
};

export default USContact;
