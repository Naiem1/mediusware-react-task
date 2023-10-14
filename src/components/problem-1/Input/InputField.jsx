const InputField = ({
  onChange,
  type,
  className,
  placeholder,
  value,
  name,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputField;
