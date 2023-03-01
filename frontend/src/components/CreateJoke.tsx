import { useState } from "react";
import { apiJokesAxios } from "../axios/jokes/api-public";

const CreateJoke = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addJoke = async () => {
    try {
      const response = await apiJokesAxios.createJoke({ title, content });
      window.location.reload();
    } catch (error) {}
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tạo joke
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Tên truyện"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows={4}
                    cols={10}
                    className="form-control mt-1"
                    placeholder="nội dung"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addJoke}
                data-dismiss="modal"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateJoke;
