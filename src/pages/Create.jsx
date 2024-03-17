import Nav from "../components/Nav.jsx";

function Create() {
  return (
    <>
      <div className="bg-dawn text-white min-h-screen overflow-y-auto p-10 font-body">
        <div className="max-w-[1000px]  m-auto">
          <Nav />

          <div className="mt-10">
            <p>Here you go , write all you can using Markdown! </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
