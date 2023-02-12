import axios from "axios";

const getAllMeals = (setAllMeals) => {
  axios
    .get("https://mern-meal-planner.onrender.com")
    .then(({ data }) => setAllMeals(data));
};

const addMeal = (title, setTtile, setAllMeals) => {
  axios
    .post("https://mern-meal-planner.onrender.com/add-meal", { title })
    .then(() => {
      getAllMeals(setAllMeals);
      setTtile("");
    });
};

const editMeal = (mealId, title, setTitle, setAllMeals, setEditBtn) => {
  axios
    .put("https://mern-meal-planner.onrender.com/edit", {
      _id: mealId,
      title: title,
    })
    .then(() => {
      setTitle("");
      setEditBtn(false);
      getAllMeals(setAllMeals);
    });
};

const deleteMeal = (mealId, setAllMeals) => {
  axios
    .post("https://mern-meal-planner.onrender.com/delete-meal", { _id: mealId })
    .then(() => {
      getAllMeals(setAllMeals);
    });
};

export { getAllMeals, addMeal, editMeal, deleteMeal };
