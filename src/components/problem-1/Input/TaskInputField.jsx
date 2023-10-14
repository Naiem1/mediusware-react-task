import Button from '../button/Buttons';
import InputField from './InputField';

const TaskInputField = ({ handleChange, onTaskAddHandler, inputValue }) => {
  return (
    <form
      onSubmit={onTaskAddHandler}
      className="row gy-2 gx-3 align-items-center mb-4"
    >
      <div className="col-auto">
        <InputField
          onChange={handleChange}
          type="text"
          className="form-control"
          name={'name'}
          placeholder="Name"
          value={inputValue.name}
        />
      </div>
      <div className="col-auto">
        <InputField
          onChange={handleChange}
          type="text"
          className="form-control"
          name={'status'}
          placeholder="Status"
          value={inputValue.status}
        />
      </div>
      <div className="col-auto">
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default TaskInputField;
