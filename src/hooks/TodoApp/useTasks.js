import { useState } from "react";

const INITIAL_STATE = {
  name: '',
  status: '',
};

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState({ ...INITIAL_STATE });
  const [show, setShow] = useState('all');


  const handleClick = (val) => {
    setShow(val);
  };

  const handleChange = (e) => {
    console.log('changed');
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  let id = 0;
  const onTaskAddHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { ...inputText, id: id++ }]);

    setInputText({ ...INITIAL_STATE });
  };


    const filteredTasks = () => {
    if (show.toLowerCase() === 'active') {
      return tasks.filter((task) => task.status.toLowerCase() === 'active');
    } else if (show.toLowerCase() === 'completed') {
      return tasks.filter((task) => task.status.toLowerCase() === 'completed');
    } else {
      return tasks.sort((a, b) => {
        if (a.status === 'active') {
          return -1;
        } else if (b.status === 'active') {
          return 1;
        } else if (a.status === 'completed') {
          return -1;
        } else if (b.status === 'completed') {
          return 1;
        } else {
          return 0;
        }
      });
    }
  };

  return {
    handleChange,
    onTaskAddHandler,
    handleClick,
    setInputText,
    filteredTasks: filteredTasks(),
    inputText,
    show,
    tasks,
  }
}


export default useTasks;