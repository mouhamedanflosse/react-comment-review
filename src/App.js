import "./App.css";
import Header from "./component/Header";
import AddReviewForm from "./component/AddReviewForm";
import Feedback from "./component/Feedback";
function App() {
  return (
    <div className="container">
      <div className="review-form">
        <Header />
        <AddReviewForm />
      </div>
      <div className="review">
        <div className="rev-header">
          <span>review : </span>
          <span>Average : </span>
        </div>
        <Feedback />
      </div> 
    </div>
  );
}

export default App;
