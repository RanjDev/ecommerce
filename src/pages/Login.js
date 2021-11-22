import { React, useState } from "react";
import LoginSvg from "../login.svg";
import { useDispatch } from "react-redux";
import { logIn } from "../features/authSlice";
import { useNavigate } from "react-router";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //TODO: login and logout logic
    if (dispatch(logIn(inputs))) {
      navigate("/profile");
    } else {
      alert("Login failed");
    }

    // console.log(inputs.email);
    // console.log(inputs.password);
    // console.log(isChecked);
  };
  return (
    <div>
      <div className="w-full h-auto flex justify-center bg-gradient-to-tr from-bgDark via-purple-400 to-bgLight">
        <div className="w-full my-4 flex flex-col items-center">
          <img className="h-24" src={LoginSvg} alt="login" />
          <div className="w-4/6 h-auto bg-bgLight rounded shadow-2xl">
            <p className="text-center text-xs text-gray-600 mt-1 px-4">
              Our registered users benefit from our services.
            </p>
            <form onSubmit={handleSubmit} className="p-4">
              <label className="block text-gray-700  text-xs font-bold mb-2">
                Enter your email:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="leo@decaprio.com"
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-gray-700  text-xs font-bold mb-2">
                Enter your password:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="NOT 1234"
                  type="password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  className="text-gray-700  text-xs font-bold mb-2"
                  type="checkbox"
                  name="saveUserInfo"
                  // value={inputs.saveUserInfo || ""}
                  checked={isChecked}
                  onChange={handleCheckChange}
                />{" "}
                Remember Me
              </label>
              <input
                value="Login"
                type="submit"
                className="
                bg-actionBlue
                hover:bg-blue-700
                text-sm
                text-white
                font-semibold
                mt-2
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline"
              />
            </form>
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-2">
              <p className="text-sm font-semibold text-bgDark">
                Forgot your password:
              </p>
              <button
                className="
                bg-actionBlue
                hover:bg-blue-700
                text-sm
                text-white
                font-semibold
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline"
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
