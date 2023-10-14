import { useState } from 'react';

/**
 *
 * @param {func} apiFunc fetch link
 * @param {{
 * page: number,
 * pageSize: number,
 * searchTerm: string}} params - query params for pagination and search
 * @returns
 */

const useApi = (apiFunc, params) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const request = async () => {
    setLoading(true);

    try {
      const response = await apiFunc({ ...params });
      const {
        data: { results },
      } = response;

      setContacts((prevContacts) => [...prevContacts, ...results]);
      console.log({ ...response?.data?.results });
    } catch (err) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    contacts,
    error,
    loading,
    request,
    setLoading,
    setContacts,
  };
};

export default useApi;
