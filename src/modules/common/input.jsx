export default function Input({ type = "text", ...rest }) {
  return <input type={type} {...rest} />;
}
