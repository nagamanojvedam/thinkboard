import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../lib/axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";

function NoteDetails() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true);
      try {
        const {
          data: { note },
        } = await axiosClient.get(`/notes/${id}`);
        setNote(note);
      } catch (err) {
        console.log("Error in fetching note", err);
        toast.error("Failed to fetch the note");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axiosClient.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (err) {
      console.log("Error deleting the note:", err);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setIsSaving(true);

    try {
      await axiosClient.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (err) {
      console.log("Error saving the note:", err);
      toast.error("Failed to update note");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading)
    return (
      <div className="bg-base-200 flex min-h-screen items-center justify-center">
        <LoaderIcon className="size-10 animate-spin" />
      </div>
    );

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="mb-4 flex flex-col gap-2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full"
                  value={note.title}
                  onChange={(evnt) =>
                    setNote({ ...note, title: evnt.target.value })
                  }
                />
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 w-full"
                  value={note.content}
                  onChange={(evnt) =>
                    setNote({ ...note, content: evnt.target.value })
                  }
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={isSaving}
                  onClick={handleSave}
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteDetails;
