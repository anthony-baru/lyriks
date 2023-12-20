import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authSlice";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    navigate("/");
  };
  return (
    <div className="flex-1 flex bg-gradient-to-br from-black to-[#121286]  h-[80vh] justify-center items-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 class="text-2xl font-semibold mb-4 text-center">Signin</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
}
