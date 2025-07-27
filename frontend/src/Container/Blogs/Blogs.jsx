import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await fetch("https://codewithabdur.onrender.com/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // const half = Math.ceil(data.data.length / 2);
      setBlogs(data.data.slice(0, 9));
      // setBlogs(data.data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-20 px-6 bg-black">
      <h3 className="text-3xl font-bold mb-12 text-center">Latest Blogs</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl text-[#d8d7d7] font-semibold mb-2">
              {blog.pat_name}
            </h4>
            <p className="text-gray-400 text-sm">{blog.address}</p>
          </div>
        ))}
        <div className="flex w-[90vw] justify-end" onClick={() => navigate(`/blogs`)}>
          <button className="relative cursor-pointer text-[1.4rem] rounded-[16px] border-0 p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:-z-10">
            <div className="absolute bottom-0 left-0 w-[70px] h-full rounded-[16px] bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0000ff80,transparent)] shadow-[-10px_10px_30px_#0051ff2d]"></div>
            <div className="relative z-[3] rounded-[14px] px-[25px] py-[14px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,#777777,#0f1111)] before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-[14px] before:bg-[radial-gradient(circle_60px_at_0%_100%,#00e1ff1a,#0000ff11,transparent)]">
              Realism
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
