import BlogItem from "../components/BlogItem.jsx";
import Nav from "../components/Nav.jsx"

function Home() {
  return (
    <>
      <div className="bg-dawn text-white min-h-screen overflow-y-auto p-10 font-body">
        <div className="max-w-[1000px]  m-auto">
          <Nav />
          <div className="mt-32 text-3xl tracking-wide spacing">
            <p>
              These are some of my articles, things i think about, technologies
              I enjoy using and general programming concepts
            </p>
          </div>
          <div>
            <BlogItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
