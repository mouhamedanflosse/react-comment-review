import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
  oldcomment: "",
  updating: false,
};
const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    add(state, action) {
      const items = action.payload;
      state.comments = [...state.comments, items];
    },
    remove(state, action) {
      const item = action.payload;
      state.comments = state.comments.filter((ele) => ele.id !== item);
    },
    update(state, action) {
      const item = action.payload;
      state.oldcomment = item;
      state.updating = true;
    },
    submitUpdate(state, action) {
      const item = action.payload;
      state.comments = state.comments.map((ele) =>
        ele.id === item.id ? { ...ele, ...item } : ele
      );
      state.oldcomment = "";
      state.updating = false;
    },
    showRating(state, action) {
      const item = action.payload;
      switch(item) {
        case 1 : 
        return (
          <>
          <i className="bi bi-star-fill text-warning"></i>
          </>
        )
        case 2 : 
        return (
          <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          </>
        )
        case 3 : 
        return (
          <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          </>
        )
        case 4 : 
        return (
          <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          </>
        )
        case 5 : 
        return (
          <>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          </>
        )
        default : return "done"
      }
    },
    
  },
});
export default form.reducer;
export const { add, remove, update, submitUpdate,showRating } = form.actions;
