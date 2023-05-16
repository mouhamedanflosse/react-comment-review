import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/FormSlice";
import { submitUpdate } from "./features/FormSlice";
import { Rating } from "react-simple-star-rating";
function AddReviewForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setrating] = useState(0);
  const dispatch = useDispatch();
  const { oldcomment, updating } = useSelector((state) => state.form);
  useEffect(() => {
    if (updating) {
      setMessage(oldcomment.Message);
      setName(oldcomment.Name);
      setrating(oldcomment.Rating)
    }
  }, [oldcomment]);
  const  handaeRating = (rate) => {
    setrating(rate);
    console.log(rate)
  }
  function onsubmit(e) {
    e.preventDefault();
    if (updating) {
      const updated = { ...oldcomment, Name: name, Message: message,Rating : rating };
      dispatch(submitUpdate(updated));
      setMessage("");
      setName("");
      setrating(0)
      console.log(rating)
      console.log(updated)
    } else {
      dispatch(add({ Name: name, Message: message,Rating : rating ,id: Math.random() }));
      setMessage("");
      setName("");
      setrating(0)
    }
  }
  return (
    <form action="post" onSubmit={onsubmit}>
      <div className="Email-box">
        <label>Email Adress</label>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-box">
        <label>texterea</label>
        <textarea
          className="from-control"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <Rating onClick={handaeRating} ratingValue={rating}/>
      {updating ? (
        <input type="submit" value="update" />
      ) : (
        <input type="submit" value="submit" />
      )}
    </form>
  );
}

export default AddReviewForm;
