import client from './client';

const country = 'united%20states';

const getUsContacts = ({ page, searchTerm, pageSize }) =>
  client.get(`/country-contacts/${country}/`, {
    page,
    page_size: pageSize,
    search: searchTerm,
  });

export default {
  getUsContacts,
};
