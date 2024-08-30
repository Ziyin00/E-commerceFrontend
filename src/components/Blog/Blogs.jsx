import Heading from "../Heading/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
const Blogs = () => {
  const BlogsData = [
    {
      id: 1,
      title: "How to choose perfect smartwatch",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi harum eaque dicta quae earum quasi, itaque soluta! Fugit dolorum ratione repudiandae! ",
      published: "jan 20, 2024 by Dilshed",
      image: Img1,
      aosDelay: "0",
    },
    {
      id: 2,
      title: "How to choose perfect gadget",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi harum eaque dicta quae earum quasi, itaque soluta! Fugit dolorum ratione repudiandae! ",
      published: "jan 20, 2024 by Dilshed",
      image: Img2,
      aosDelay: "200",
    },
    {
      id: 3,
      title: "How to choose perfect VR headset",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi harum eaque dicta quae earum quasi, itaque soluta! Fugit dolorum ratione repudiandae! ",
      published: "jan 20, 2024 by Dilshed",
      image: Img3,
      aosDelay: "400",
    },
  ];
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7">
          {BlogsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-white dark:bg-gray-900"
            >
              <div className="mb-2 overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
