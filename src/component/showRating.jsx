import React from "react";

export const showRating = (item) => {
  switch (item) {
    case 1:
      return (
        <>
          <i className="bi bi-star-fill text-warning"></i>
        </>
      );
    case 2:
      return (
        <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
        </>
      );
    case 3:
      return (
        <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
        </>
      );
    case 4:
      return (
        <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
        </>
      );
    case 5:
      return (
        <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
        </>
      );
    default:
      return "done";
  }
};
