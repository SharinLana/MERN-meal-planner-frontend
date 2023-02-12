import React from "react";
import { useEffect, useState } from "react";
import { getAllMeals, addMeal, deleteMeal, editMeal } from "./Functions";
import Meals from "./components/Meals";

function App() {
  const [allMeals, setAllMeals] = useState([]);
  const [mealId, setMealId] = useState("");
  const [title, setTitle] = useState("");
  const [editBtn, setEditBtn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // GET INPUT VALUE
  const getInputValue = (val) => {
    setTitle(val);
  };

  // FETCH ALL MEALS FROM MONGODB COLLECTION ON MOUNT
  useEffect(() => {
    setTimeout(() => {
      getAllMeals(setAllMeals);
      setIsLoaded(true);
    }, 1000);
  }, []);

  // ADDING A NEW MEAL
  const addNewMeal = () => {
    addMeal(title, setTitle, setAllMeals);
  };

  // DELETING MEAL
  const removeMeal = (id) => {
    deleteMeal(id, setAllMeals);
  };

  // ACTIVATING INPUT (GETTING ITS CURRENT VALUE).
  // CHANGING THE "ADD" BUTTON TITLE TO "EDIT"
  // AND GETTING THE ID OF THE CURRENT MEAL
  // AFTER CLICKING THE EDITING ICON
  const getMeal = (id, currentTitle, btnStatus) => {
    setEditBtn(btnStatus);
    setTitle(currentTitle);
    setMealId(id);
  };

  // EDITING MEAL
  const updateMeal = () => {
    editMeal(mealId, title, setTitle, setAllMeals, setEditBtn);
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <Meals
        meals={allMeals}
        inputValue={title}
        editBtn={editBtn}
        isLoaded={isLoaded}
        onGetInputValue={getInputValue}
        onAddNewMeal={addNewMeal}
        onGetMeal={getMeal}
        onEditMeal={updateMeal}
        onDeleteMeal={removeMeal}
      />
    </div>
  );
}

export default App;
