import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { DUMMY_SIGLE_BLOG_DATA } from "../../DUMMY_DATA";
function Blogpagecomponent() {
  return (
    <>
      {DUMMY_SIGLE_BLOG_DATA.map((item) => (
        <div key={item.title} className="container p-2 xs:p-6">
          <div className="blog_image ">
            <img
              className="w-full rounded-xl h-96 xs:h-128"
              src={item.blogImageUrl}
              alt="thumbnail"
            />
          </div>
          <div className="title_edit_delete mt-2 flex flex-col space-y-2 mb-4 md:flex-row md:space-y-0 md:justify-between ">
            <p className="text-4xl md:text-6xl text-purple-500 font-Rubik">
              {item.title}
            </p>
            <p className="text-purple-500 flex space-x-4">
              <PencilIcon className="h-6 w-6 md:h-8 md:w-8 text-green-500 md:hover:cursor-pointer" />
              <TrashIcon className="h-6 w-6 md:h-8 md:w-8 text-red-500 md:hover:cursor-pointer" />
            </p>
          </div>
          <div className="author_date flex flex-col  mb-4 md:flex-row md:justify-between">
            <div className="m-2 author flex items-center space-x-2">
              <div className="author_image ">
                <img
                  className="border-[#7f8da1] border-[1px] h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 rounded-full "
                  src={item.authourImageUrl}
                  alt="author pfp"
                />
              </div>
              <div className="author_name">
                <p className="xs:text-xl sm:text-2xl text-[#7f8da1]">
                  {item.author}
                </p>
              </div>
            </div>
            <div className="date">
              <p className="xs:text-xl sm:text-2xl text-[#7f8da1]">
                {item.date}
              </p>
            </div>
          </div>
          <div className="content">
            <p className="text-[#8996d4] text-3xl md:text-5xl first-letter:uppercase first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold font-Indie">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blogpagecomponent;
