import { useRef, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
function Usercomponent() {
  const [file, setFile] = useState(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <>
      <div className="wrapper w-full p-6">
        <form>
          <div className="parent">
            <div className="profile_image_div">
              <div className="m-2 author flex items-center space-x-2">
                <div className="author_image ">
                  {file && (
                    <img
                      className="border-[#7f8da1] border-[1px] h-12 w-12 xs:h-16 xs:w-16 sm:h-20 sm:w-20 rounded-full "
                      src={URL.createObjectURL(file)}
                      alt="author pfp"
                    />
                  )}
                </div>
                <div className="add_icon ">
                  <label htmlFor="file_input">
                    <PlusCircleIcon className="h-10 w-10 text-red-500 hover:md:cursor-pointer" />
                  </label>
                  <input
                    ref={imageRef}
                    className="hidden bg-transparent "
                    type="file"
                    name="file_input"
                    id="file_input"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="user_name_div flex flex-col mt-6     space-y-2">
              <label
                htmlFor="user_name"
                className="text-indigo-500 font-Pacifico text-xl"
              >
                Username
              </label>
              <input
                ref={nameRef}
                className="text-[#8996d4] text-xl bg-transparent
                border-b-2 border-[#008080] outline-none focus:border-red-500
                rounded-lg h-10"
                type="text"
                name="user_name"
                id="user_name"
              />
            </div>
            <div className="user_email flex flex-col mt-6     space-y-2">
              <label
                htmlFor="user_email"
                className="text-indigo-500 font-Pacifico text-xl"
              >
                Email
              </label>
              <input
                ref={emailRef}
                className="text-[#8996d4] text-xl bg-transparent border-b-2 border-[#008080] outline-none focus:border-red-500 rounded-lg h-10"
                type="email"
                name="user_email"
                id="user_email"
              />
            </div>
            <div className="user_password flex flex-col mt-6     space-y-2">
              <label
                htmlFor="user_password"
                className="text-indigo-500   font-Pacifico text-xl"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                className="text-[#8996d4] text-xl bg-transparent border-b-2 border-[#008080] outline-none focus:border-red-500 rounded-lg h-10"
                type="password"
                name="user_password"
                id="user_password"
              />
            </div>
            <div className="button_div flex justify-center mt-4">
              <button
                className="bg-gradient-to-r from-indigo-500 to-pink-500  text-black font-bold h-12 w-16 rounded-xl "
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Usercomponent;
