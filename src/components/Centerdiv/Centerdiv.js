import React from "react";
import { useNavigate } from "react-router-dom";
import { DUMMY_ALL_BLOG_DATA } from "../../DUMMY_DATA";

function Centerdiv() {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    navigate(`./blog/${id}`);
  };
  return (
    <>
      <div className="parent_div mt-6 sm:p-2 sm:mx-8  flex flex-wrap justify-center">
        {DUMMY_ALL_BLOG_DATA.map((item) => (
          <div
            onClick={() => handleClick(item.id)}
            key={item.id}
            className="card_wrapper  text-pink-700   mb-4 mx-3 border-2 border-pink-700 md:mx-0 md:border-transparent lg:mx-0 lg:border-transparent rounded-xl w-full  md:w-1/2  lg:w-1/3  h-auto  p-1 hover:cursor-pointer  hover:border-pink-700"
          >
            <div className="image_holder ">
              <img
                className="rounded-xl w-full h-60"
                src={item.blogImageUrl}
                alt="image"
              />
            </div>

            <div className="tags mt-2 mb-2 space-x-4 flex overflow-x-auto scrollbar-hide ">
              {item.tags.map((item) => (
                <p
                  key={item}
                  className="p-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl text-black font-bold font-Indie"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="date">
              <p className="ml-2 text-[#7f8da1]">{item.date}</p>
            </div>
            <div className="title w-full ">
              <p
                className="text-4xl font-Pacifico font-bold
            text-purple-500 line-clamp-2 "
              >
                {item.title}
              </p>
            </div>
            <div className="description line-clamp-3">
              <p className="text-2xl font-Indie">{item.description}</p>
            </div>
            <div className="m-2 author flex items-center space-x-2">
              <div className="author_image ">
                <img
                  className="border-[#7f8da1] border-[1px] h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 rounded-full "
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Centerdiv;
