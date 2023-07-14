export default function Input(props) {
  const { className, type, value, onChange, placeholder } = props;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}
