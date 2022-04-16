import { useRef, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

function Newblogcomponent() {
  const [file, setFile] = useState(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <>
      <div className="wrapper w-full  p-6">
        {file && (
          <img
            className="w-full h-80 rounded-lg  mb-4" // src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc5NjQ1ODEzMTgwNDA5Njc0/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.jpg"
            src={URL.createObjectURL(file)}
            alt="thumbnail"
          />
        )}
        <form className="newblog_form">
          <div className="parent space-y-2 ">
            <div className="file_title flex items-center">
              <label htmlFor="file_input">
                <PlusCircleIcon className="hover:md:cursor-pointer text-red-500 h-10 w-10" />
              </label>
              <input
                ref={imageRef}
                className="hidden bg-transparent "
                type="file"
                name="file_input"
                id="file_input"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <textarea
                className="grow h-24 scrollbar bg-transparent 
                border-b-2 border-indigo-500 outline-none focus:border-red-500
                rounded-lg p-2 
                text-purple-500 font-Rubik text-xl md:text-3xl"
                ref={titleRef}
                name="title_input"
                id="title_input"
                placeholder="Write title...."
              />
            </div>
            <div className="description_div ">
              <textarea
                ref={descriptionRef}
                className="w-full scrollbar h-20 bg-transparent
                border-b-2 border-indigo-500 outline-none focus:border-red-500
                rounded-lg p-2 text-purple-500 font-Indie text-xl md:text-3xl"
                name="description"
                id="description"
                placeholder="Write description...."
              />
            </div>
            <div className="content_div">
              <textarea
                className="w-full scrollbar h-40 bg-transparent 
                border-b-2 border-indigo-500 outline-none focus:border-red-500
                rounded-lg p-2 text-[#8996d4] font-Indie text-xl md:text-3xl"
                ref={contentRef}
                name="content"
                id="content"
                placeholder="Write your blog(markdown supported)...."
              />
            </div>
          </div>
          <div className="button_div flex justify-center mt-4">
            <button
              className="bg-gradient-to-r from-indigo-500 to-pink-500  text-black font-bold h-12 w-16 rounded-xl "
              type="submit"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Newblogcomponent;
