var recipeContainer = document.getElementById("display");
var Detail = document.getElementById("detail-popup");
var EditForm = document.getElementById("edit-form");
var AddButton = document.getElementById("add-button");
var FormModal = document.getElementById("form-modal");
var AddForm = document.getElementById("add-form");
var RecipeForm = document.getElementById("recipe-form");
var AddIngredient = document.getElementById("recipeIngredients");
var AddMeasurements = document.getElementById("recipeMeasurements");
//let view = 0;
document.addEventListener("DOMContentLoaded", displayData);
var a = [];
function displayData() {
  let display = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  display
    .then((data) => {
      return data.json();
    })
    .then((singleData) => {
      console.log(singleData);
      a.push(singleData);
      console.log(a);
      localStorage.setItem("recipes", JSON.stringify(singleData.meals));
      //display productsmeals
      renderCards(singleData.meals);
      forAdd(singleData.meals);
    });
}
function forAdd(meals) {
  meals.forEach((meal) => {
    AddButton.innerHTML = `<div class="add-button">
    <button id="button" class="btn btn-success" onclick="addRecipe();">Add</button>
    </div>`;
  });
}
function renderCards(meals) {
  recipeContainer.innerHTML = "";
  meals.forEach((meal, index) => {
    if (index < 8) {
      var recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
    <img class="singlemeal" src="${meal.strMealThumb}">
    <h3 class="meal-name">${meal.strMeal}</h3>
    <div class="buttons-container">
    <button id="detail-btn" class="view-recipe" onclick="recipeDetail('${meal.idMeal}');">View Recipe</button>
    <div class="icon-container">
    <i class="fa-sharp fa-regular fa-pen-to-square" onclick="Edit('${meal.idMeal}');"></i> 
    <i class="fa-sharp fa-solid fa-trash-can" onclick="Delete('${meal.idMeal}');"></i>
    </div>
    </div>  
    `;
      //AddForm.appendChild(formDiv);
      recipeContainer.appendChild(recipeDiv);
    } else {
      return;
    }
  });
}
document.getElementById("btn").addEventListener("click", () => {
  let user = document.getElementById("userInput").value;
  //recipeContainer.innerHTML = "";
  let mealAPI = fetch(
    //query parameter
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
  );

  mealAPI
    .then((data) => {
      return data.json();
    })
    .then((sendData) => {
      console.log(sendData);
      renderCards(sendData.meals);
    });
});

function Delete(idMeal) {
  let items = JSON.parse(localStorage.getItem("recipes"));
  console.log("hello check this array", items);
  let index = items.findIndex((d) => d.idMeal === idMeal);
  console.log("hello check index", index);
  if (index !== -1) {
    //items.splice(index,1);
    alert("Are you Sure you want to delete?");
    delete items[index];
    localStorage.setItem("recipes", JSON.stringify(items));
    renderCards(items);
  }
}
function recipeDetail(idMeal) {
  // let recipeDetails = JSON.parse(localStorage.getItem("recipes"));
  // console.log("hello check this array", recipeDetails);
  // let index = recipeDetails.find((d) => d.idMeal === idMeal);
  // console.log("kkkkkk",index);
  if (idMeal) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((singleData) => {
        if (singleData.meals) {
          console.log(singleData);
          var mealDetail = document.createElement("div");
          mealDetail.classList.add("recipe-detail");
          mealDetail.innerHTML = `
          <div class="cross-icon">
          <button type="button" class="btn-close" aria-label="Close" onclick="closePopup();"></button>
      </div>
      <div class="image-div">
      <img class="singlemeal" src="${singleData.meals[0].strMealThumb}">
      <h1 class="meal-name">${singleData.meals[0].strMeal}</h1>
      <h2 class='text-center text-secondary'>Food Area: ${singleData.meals[0].strArea}</h2>
 <h2 class='text-center text-warning'>Food Name: ${singleData.meals[0].strCategory}</h2>
          </div>
          <div>
          <h2>Instructions:</h2>
      <p>${singleData.meals[0].strInstructions}</p>
      <div class="row">
      <div class="col-md-6">
      <h2>Ingredients:</h2>
           <ul>
              <li>${singleData.meals[0].strIngredient1}</li>
              <li>${singleData.meals[0].strIngredient2}</li>
              <li>${singleData.meals[0].strIngredient3}</li>
              <li>${singleData.meals[0].strIngredient4}</li>
              <li>${singleData.meals[0].strIngredient5}</li>
              <li>${singleData.meals[0].strIngredient6}</li>
              <li>${singleData.meals[0].strIngredient7}</li>
              <li>${singleData.meals[0].strIngredient8}</li>
              </ul>
      </div>
      <div class="col-md-6">
       <h2>Measurements:</h2>
       <ul>
       <li>${singleData.meals[0].strMeasure1}</li>
       <li>${singleData.meals[0].strMeasure2}</li>
       <li>${singleData.meals[0].strMeasure3}</li>
       <li>${singleData.meals[0].strMeasure4}</li>
       <li>${singleData.meals[0].strMeasure5}</li>
       <li>${singleData.meals[0].strMeasure6}</li>
       <li>${singleData.meals[0].strMeasure7}</li>
       <li>${singleData.meals[0].strMeasure8}</li>
       </ul>
      </div>
          </div>
          <div class='col-6-offset-3>
       <h2 class='text-center'>Watch Full Video on <a class='text-danger yt' data-bs-toggle="modal" data-bs-target="#exampleModal${
         singleData.meals[0].idMeal
       }"><u>Youtube</u></a></h2>
       </div>
          <!-- Modal -->
       <div class="modal fade" id="exampleModal${
         singleData.meals[0].idMeal
       }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${
                singleData.meals[0].strMeal
              }</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <iframe src="https://youtube.com/embed/${singleData.meals[0].strYoutube.slice(
              -11
            )}" frameborder="0" width="100%" height='300'></iframe>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
          //localStorage.setItem("recipes", JSON.stringify(recipeDetails));
          Detail.appendChild(mealDetail);
        } else {
          console.log("Meal data not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching meal:", error);
      });
  } else {
    console.log("Meal with idMeal", idMeal, "not found in recipeDetails.");
  }
}

function closePopup() {
  var popup = document.querySelector(".recipe-detail");
  if (popup) {
    popup.remove();
  }
}
function closeAdd() {
  var add = document.querySelector(".recipe-form");
  if (add) {
    add.remove();
  }
}
//do work on this
function addRecipe() {
  let newRecipe = JSON.parse(localStorage.getItem("recipes")) || [];
  console.log(newRecipe);
  // document.getElementById('add-form').style.display="block";
  var brandForm = document.createElement("form");
  brandForm.classList.add("recipe-form");
  brandForm.innerHTML = `
  <h2>Add Recipe</h2>
  <input type="text" id="recipeName" placeholder="Recipe Name" required>
  <input type="url" id="recipeImage" placeholder="Image URL" required>
  <input type="text" id="recipeInstructions" placeholder="Instructions">
  <input type="text" id="recipeIngredients" placeholder="Ingredient">
  <button id="addIngredient" onclick="addIngredient();">+</button>
  <ul id="ingredient-list" class="ingredient-list"></ul>
  <input type="text" id="recipeMeasurements" placeholder="Measurement">
  <button id="addMeasurement" onclick="addMeasurement();">+</button>
  <ul id="measurement-list" class="measurement-list"></ul>
  <input type="text" id="recipeUrl" placeholder="URL">
  <div class="text-center">
      <button class="btn btn-primary" type="submit">Add Recipe</button>
  </div>`;
  AddForm.appendChild(brandForm);
  const recipeNameInput = document.getElementById("recipeName");
  const recipeImageInput = document.getElementById("recipeImage");
  const recipeInstructionsInput = document.getElementById("recipeInstructions");
  const recipeIngredientsInput = document.getElementById("recipeIngredients");
  const recipeMeasurementsInput = document.getElementById("recipeMeasurements");
  const recipeUrlInput = document.getElementById("recipeUrl");
  document.querySelector(".recipe-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const recipeName = recipeNameInput.value;
    const recipeImageUrl = recipeImageInput.value;
    const recipeInstructions = recipeInstructionsInput.value;
    const recipeIngredients = recipeIngredientsInput.value;
    const recipeMeasurements = recipeMeasurementsInput.value;
    const recipeUrl = recipeUrlInput.value;
    if (
      recipeName &&
      recipeImageUrl &&
      recipeInstructions &&
      recipeIngredients &&
      recipeMeasurements &&
      recipeUrl
    ) {
      const updatedRecipe = {
        idMeal: 12345,
        strMeal: recipeName,
        strMealThumb: recipeImageUrl,
        strInstructions: recipeInstructions,
        strIngredient: recipeIngredients,
        strMeasure: recipeMeasurements,
        strYoutube: recipeUrl,
      };
      newRecipe.push(updatedRecipe);
      localStorage.setItem("recipes", JSON.stringify(newRecipe));
      console.log("consoleagain", newRecipe);
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
      <img class="singlemeal" src="${recipeImageUrl}">
      <h3 class="meal-name1">${recipeName}</h3>
      <div class="buttons-container">
    <button id="detail-btn" class="view-recipe" onclick="recipeDetail(${updatedRecipe.idMeal});">View Recipe</button>
    <div class="icon-container">
    <i class="fa-sharp fa-regular fa-pen-to-square"onclick="Edit(${updatedRecipe.idMeal});"></i> 
    <i class="fa-sharp fa-solid fa-trash-can" onclick="Delete(${updatedRecipe.idMeal});"></i>
    </div>
    </div> 

    `;
      recipeContainer.appendChild(recipeDiv);

      //  renderCards(newRecipe);
    } else {
      alert("Please enter valid recipe name and image URL.");
    }
    AddForm.remove();
  });
}

function addIngredient() {
  var ingredientInput = document.getElementById("recipeIngredients");
  var ingredientList = document.getElementById("ingredient-list");

  if (ingredientInput.value !== "") {
    var li = document.createElement("li");
    li.textContent = ingredientInput.value;
    ingredientList.appendChild(li);
    ingredientInput.value = "";
  }
}
function addMeasurement() {
  var measurementInput = document.getElementById("recipeMeasurements");
  var measurementList = document.getElementById("measurement-list");

  if (measurementInput.value !== "") {
    var li = document.createElement("li");
    li.textContent = measurementInput.value;
    measurementList.appendChild(li);
    measurementInput.value = "";
  }
}

function Edit(idMeal) {
  const mealsFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
  const mealToEdit = mealsFromLocalStorage.find(
    (meal) => meal.idMeal === idMeal
  );
  const form = document.createElement("form");
  form.innerHTML = ` 
  <h2 class='text-center'>Edit Recipe</h2>
    <label for="mealName">Meal Name:</label>
    <input type="text" id="mealName" name="mealName" value="${mealToEdit.strMeal}">
    <br>
    <label for="mealImage">Image URL:</label>
    <input type="text" id="mealImage" name="mealImage" value="${mealToEdit.strMealThumb}">
    <br>
    <div class="text-center">
    <button class="btn btn-primary" type="submit">Save Changes</button>
    </div>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newMealName = form.elements.mealName.value;
    const newMealImage = form.elements.mealImage.value;

    // Update meal info
    mealToEdit.strMeal = newMealName;
    mealToEdit.strMealThumb = newMealImage;

    localStorage.setItem("recipes", JSON.stringify(mealsFromLocalStorage));

    renderCards(mealsFromLocalStorage);

    form.remove();
  });

  // Append the form to the container
  recipeContainer.appendChild(form);
}
