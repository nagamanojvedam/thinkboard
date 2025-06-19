import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-base-300 border-base-content/10 border-b">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-primary font-mono text-3xl font-bold tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
