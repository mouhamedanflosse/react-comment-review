import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "./features/FormSlice";
import { showRating } from "./showRating";
const Feedback = () => {
  const { comments } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="com">
          <div className="text">
            <p className="name">
              <i className="bi bi-person-fill user"></i> {comment.Name}
              <span className="stars">
              {
                showRating(comment.Rating)
              }
            </span>
            </p>
            <p>{comment.Message}</p>
            
          </div>
          <div className="op">
            <i
              className="bi bi-trash"
              onClick={() => dispatch(remove(comment.id))}
            ></i>
            <i
              className="bi bi-pencil"
              onClick={() => dispatch(update(comment))}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
