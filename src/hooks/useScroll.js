import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param {string} searchString  search input value
 * @returns
 */
const useScroll = (searchString) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const observer = useRef(null);

  const handleScroll = () => {
    const scrollTop = observer?.current?.scrollTop;
    const scrollHeight = observer?.current?.scrollHeight;
    const clientHeight = observer?.current?.clientHeight;
    console.log({
      scrollTop: observer?.current?.scrollTop,
      scrollHeight: observer?.current?.scrollHeight,
      clientHeight: observer?.current?.clientHeight,
    });

    if (scrollTop + clientHeight === scrollHeight) {
      console.log('trigging');
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {}, []);

  // const handleSearchTerm = () => {
  //   setSearchTerm(searchString);
  // }

  console.log({ page });
  return {
    params: { page, pageSize, searchTerm },
    observer,
    searchTerm,
    handleScroll,
    // handleSearchTerm
    setSearchTerm,
  };
};

export default useScroll;
