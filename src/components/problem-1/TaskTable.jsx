import TaskList from './TaskList';

const TaskTable = ({ tasks }) => {
  
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <TaskList tasks={tasks} />
      </tbody>
    </table>
  );
};

export default TaskTable;
