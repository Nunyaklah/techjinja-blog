import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex  items-end justify-between">
        <div>
          <p className="text-3xl font-bold">Tech Jinja - Blog</p>
        </div>
        <div>
          <Link to={"/create"}>
            <p className="underline font-medium">Write</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
