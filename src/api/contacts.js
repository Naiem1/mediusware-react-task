import client from './client';

// const searchQuery = ''
// const currentPage = 1
// const pageSize = 500
// const queryPath = `contacts/?search=${searchQuery}&page=${currentPage}&page_size=${pageSize}`


const getContacts = ({ page, pageSize, searchTerm }) => {
  console.log('apiClient', { page, pageSize, searchTerm });
  return client.get('/contacts/', {
    params: {
      search: searchTerm,
      page,
      page_size: pageSize,
    },
  });
};

export default {
  getContacts,
};