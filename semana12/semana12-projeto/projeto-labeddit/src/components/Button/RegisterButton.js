export const RegisterButton = (props) => {
  return (
    <button type="button" style={{ backgroundColor: props.color }}>
      {props.children}
      <strong>User</strong>
    </button>
  );
};
