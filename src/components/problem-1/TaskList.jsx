const TaskList = ({ tasks }) => {
  console.log('taskList',tasks)
  return (
    <>
      {tasks?.map((task) => (
        <tr key={task?.id}>
          <td>{task.name}</td>
          <td>{task.status}</td>
        </tr>
      ))}
    </>
  );
};

export default TaskList;
