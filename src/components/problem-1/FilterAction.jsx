const FilterAction = ({handleClick, show}) => {
  return (
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item">
        <button
          className={`nav-link ${show === 'all' && 'active'}`}
          type="button"
          onClick={() => handleClick('all')}
        >
          All
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${show === 'active' && 'active'}`}
          type="button"
          onClick={() => handleClick('active')}
        >
          Active
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${show === 'completed' && 'active'}`}
          type="button"
          onClick={() => handleClick('completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default FilterAction;
