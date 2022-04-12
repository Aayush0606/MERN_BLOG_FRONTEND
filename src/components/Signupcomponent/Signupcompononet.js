import { useRef } from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/outline";

function Signupcompononet() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <>
      <div class="flex h-screen">
        <div class="w-full max-w-xs m-auto  bg-transparent  rounded p-5">
          <header>
            <img class="w-20 mx-auto mb-5" src="/logo.svg" />
          </header>
          <form>
            <div>
              <label htmlFor="file_input">
                <PlusCircleIcon className="mb-4 h-10 w-10 text-indigo-500 hover:md:cursor-pointer" />
              </label>
              <input
                className=" hidden bg-transparent "
                type="file"
                name="file_input"
                id="file_input"
              />
            </div>
            <div>
              <label class="block text-indigo-500 text-xl" for="username">
                Username
              </label>
              <input
                ref={usernameRef}
                class=" w-full p-2 mb-6 text-xl text-[#008080] bg-transparent border-b-2 border-indigo-500 outline-none focus:border-red-500"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div>
              <label class="block  text-indigo-500 text-xl" for="email">
                Email
              </label>
              <input
                ref={emailRef}
                class=" w-full p-2 mb-6 text-xl text-[#008080] bg-transparent border-b-2 border-indigo-500 outline-none focus:border-red-500"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label class="block  text-xl text-indigo-500" for="password">
                Password
              </label>
              <input
                ref={passwordRef}
                class="w-full p-2 mb-6 bg-transparent text-xl text-[#008080] border-b-2 border-indigo-500 outline-none focus:border-red-500"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <input
                class="w-full bg-cyan-900  text-teal-500 hover:cursor-pointer font-bold py-2 px-4 mb-6 rounded"
                value="Sign up"
                type="submit"
              />
            </div>
          </form>
          <footer>
            <Link
              class="text-pink-700 text-xl font-bold float-right"
              to="/login"
            >
              Login
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Signupcompononet;
