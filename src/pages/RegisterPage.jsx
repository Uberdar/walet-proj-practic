import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Register Page</h1>
      <button
        onClick={() => {
          dispatch(
            registerUser({ email: "test3@mail.com", password: "111111" })
          );
        }}
      >
        CLICK
      </button>
    </>
  );
};

export default RegisterPage;
