import Blogimgone from "../../../src/assets/blogimage1.jpg";
import Blogimgtwo from "../../../src/assets/blogimage2.jpg";
import Blogimgthree from "../../../src/assets/blogimage3.jpg";
const Blogsection = () => {
  const blogs = [
    {
      id: 1,
      date: "21 June 2021",
      title: "The Amazing Difference a Year of Travelling",
      description:
        "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
      image: Blogimgone,
      bgColor: "bg-transparent",
    },
    {
      id: 2,
      date: "28 June 2021",
      title: "Reflections on 5 Months of Travel: Time to Hang",
      description:
        "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
      image: Blogimgtwo,
      bgColor: "bg-transparent",
    },
    {
      id: 3,
      date: "10 July 2021",
      title: "How to Save Money While Visiting Africa",
      description:
        "It is easy to forget that animals are living creatures with a beating heart...",
      image: Blogimgthree,
      bgColor: "bg-transparent",
    },
  ];
  return (
    <>
    <section className="backdrop-blur-xl bg-[#ffffff0e] backdrop-sepia-0 w-[90%] lg:w-[80%] md:w-[80%] mx-auto p-10  shadow-2xl mt-4 lg:mt-20 py-12">
      <div className="">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl    font-semibold text-white">Our Blog</h2>
          <button className="text-orange-500 border border-orange-500 px-2 sm:px-4 py-2 rounded-lg hover:bg-orange-100">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`rounded-xl shadow-md p-4 ${blog.bgColor}`}
            >
              <div className="mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg object-cover w-full h-[200px]"
                />
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      </section>
    </>
  );
};

export default Blogsection;
