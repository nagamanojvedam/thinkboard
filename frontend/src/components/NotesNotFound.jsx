import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";
function NotesNotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 py-16 text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="text-primary size-10" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
}

export default NotesNotFound;
