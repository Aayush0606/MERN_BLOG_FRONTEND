import { useRef } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
function Newblogcomponent() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <>
      <div className="wrapper w-full  p-6">
        <form className="newblog_form">
          <div className="parent space-y-2 ">
            <div className="file_title flex items-center">
              <label htmlFor="file_input">
                <PlusCircleIcon className="hover:md:cursor-pointer text-pink-500 h-10 w-10" />
              </label>
              <input
                ref={imageRef}
                className="hidden bg-transparent "
                type="file"
                name="file_input"
                id="file_input"
              />
              <textarea
                className="grow h-10 bg-transparent ring-1 ring-pink-500 rounded-lg p-2 text-orange-500"
                ref={titleRef}
                name="title_input"
                id="title_input"
                placeholder="Write title...."
              />
            </div>
            <div className="description_div ">
              <textarea
                ref={descriptionRef}
                className="w-full h-16 bg-transparent ring-1 ring-pink-500 rounded-lg p-2 text-orange-500"
                name="description"
                id="description"
                placeholder="Write description...."
              />
            </div>
            <div className="content_div">
              <textarea
                className="w-full h-40 bg-transparent ring-1 ring-pink-500 rounded-lg p-2 text-orange-500"
                ref={contentRef}
                name="content"
                id="content"
                placeholder="Write your blog(markdwon supported)...."
              />
            </div>
          </div>
          <div className="button_div flex justify-center mt-4">
            <button
              className="bg-cyan-200 text-yellow-500 h-12 w-16 rounded-xl "
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
