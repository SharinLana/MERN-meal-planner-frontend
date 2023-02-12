import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const FetchedMeals = ({ meal, onGetMeal, onDeleteMeal }) => {
  const editHandler = () => {
    onGetMeal(meal._id, meal.title, true);
  };

  const deleteHandler = () => {
    onDeleteMeal(meal._id);
  };

  return (
    <div>
      <p>{meal.title}</p>
      <AiFillEdit
        style={{ width: "30px", height: "30px" }}
        onClick={editHandler}
      />
      <AiFillDelete
        style={{ width: "30px", height: "30px" }}
        onClick={deleteHandler}
      />
    </div>
  );
};

export default FetchedMeals;
