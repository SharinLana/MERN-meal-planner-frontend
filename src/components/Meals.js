import React from "react";
import FetchedMeals from "./FetchedMeals";

const Meals = ({
  meals,
  inputValue,
  editBtn,
  isLoaded,
  onAddNewMeal,
  onGetInputValue,
  onGetMeal,
  onEditMeal,
  onDeleteMeal,
}) => {
  // GETTING INPUT VALUE
  const onChangeHandler = (e) => {
    onGetInputValue(e.target.value);
  };

  const addBtnHandler = () => {
    onAddNewMeal();
  };

  const editBtnHandler = () => {
    onEditMeal();
  };

  return (
    <div className="meals-container">
      <input
        type="text"
        placeholder="Add your meal"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button onClick={editBtn ? editBtnHandler : addBtnHandler}>
        {editBtn ? "EDIT" : "ADD"}
      </button>

      {isLoaded ? (
        meals.map((meal) => (
          <FetchedMeals
            meal={meal}
            key={meal._id}
            onGetMeal={onGetMeal}
            onDeleteMeal={onDeleteMeal}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Meals;
