import React from 'react';
import useTasks from '../hooks/TodoApp/useTasks';
import FilterAction from './problem-1/FilterAction';
import TaskInputField from './problem-1/Input/TaskInputField';
import TaskTable from './problem-1/TaskTable';

const Problem1 = () => {
  const {
    handleChange,
    handleClick,
    inputText,
    onTaskAddHandler,
    show,
    filteredTasks,
  } = useTasks();

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <TaskInputField
            inputValue={inputText}
            handleChange={handleChange}
            onTaskAddHandler={onTaskAddHandler}
          />
        </div>
        <div className="col-8">
          <FilterAction handleClick={handleClick} show={show} />
          <div className="tab-content"></div>
          <TaskTable tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
};

export default Problem1;
