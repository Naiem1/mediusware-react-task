import { useEffect, useRef, useState } from "react";
import { pathStringTransform } from "../util/pathStringTransform";

/**
 * 
 * @param {func} setSearchTerm set search string to searchTerm state
 * @param {func} navigate  from react-router-dom it use for redirect another page
 * @param {string} pathname current page pathname
 * @returns 
 */
const useModal = (setSearchTerm, navigate, pathname) => {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState('');
  



  /**
   * Modal close and redirect to problem-2 page
   */
  const handleClose = () => {
    setShow(false);
    navigate('/problem-2');
  };

  // const handleShow = () => setShow(true);
  /**
   * Input text change handler for searchTerm
   * @param {Event} e 
   */
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  
  /**
   * this function for modify pathname for modal title
   */
  const pathString = pathStringTransform(pathname);

  /**
   * modal will open when want to show contact list
   */
  useEffect(() => {
    setShow(true);
  }, []);


  /**
   * This function will trigger when Enter button pressed and search item will appear
   * @param {Even} e 
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputText);
      setInputText('');
    }
  };


  return {
    handleClose,
    handleKeyPress,
    inputChangeHandler,
    setShow,
    show,
    pathString,
    inputText
  }
}


export default useModal;