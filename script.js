var recipeContainer = document.getElementById("display");
var Detail = document.getElementById("detail-popup");
var EditForm = document.getElementById("edit-form");
var AddForm = document.getElementById("add-form");
var FormModal = document.getElementById("form-modal");

let view = 0;
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
    AddForm.innerHTML = `<div class="add-button">
    <button id="button" class="btn btn-success" onclick="addRecipe('${meal.idMeal}');">Add</button>
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
    <i class="fa-sharp fa-regular fa-pen-to-square"  onclick="Edit('${meal.idMeal}');"></i> 
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

      //search meal
      let data = "";
      sendData.meals.forEach((e, i) => {
        data += `
<h2 class='text-center text-secondary'>Food Area: ${e.strArea}</h2>
<h2 class='text-center text-warning'>Food Name: ${e.strCategory}</h2>
<div class="row">
<div class="col-md-4">
    <img src="${e.strMealThumb}" alt="" class='w-100'>
</div>
<div class="col-md-4">
    <h2>Ingredients:</h2>
    <ul>
        <li>${e.strIngredient1}</li>
        <li>${e.strIngredient2}</li>
        <li>${e.strIngredient3}</li>
        <li>${e.strIngredient4}</li>
        <li>${e.strIngredient5}</li>
        <li>${e.strIngredient6}</li>
        <li>${e.strIngredient7}</li>
        <li>${e.strIngredient8}</li>
        <li>${e.strIngredient9}</li>
        <li>${e.strIngredient10}</li>
        <li>${e.strIngredient11}</li>
        <li>${e.strIngredient12}</li>
        <li>${e.strIngredient13}</li>
        <li>${e.strIngredient14}</li>
        
    </ul>
</div>
<div class="col-md-4">
<h2>Measurements:</h2>
<ul>
<li>${e.strMeasure1}</li>
<li>${e.strMeasure2}</li>
<li>${e.strMeasure3}</li>
<li>${e.strMeasure4}</li>
<li>${e.strMeasure5}</li>
<li>${e.strMeasure6}</li>
<li>${e.strMeasure7}</li>
<li>${e.strMeasure8}</li>
<li>${e.strMeasure9}</li>
<li>${e.strMeasure10}</li>
<li>${e.strMeasure11}</li>
<li>${e.strMeasure12}</li>
<li>${e.strMeasure13}</li>
<li>${e.strMeasure14}</li>

</ul>
</div>
</div>
<div class="col-12">
<h2>Instructions:</h2>
<p>${e.strInstructions}</p>
</div>
<div class='col-6-offset-3>
<h2 class='text-center'>Watch Full Video on <a class='text-danger yt' data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><u>Youtube</u></a></h2>
</div>
<!-- Modal -->

<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${e.strMeal}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <iframe src="https://youtube.com/embed/${e.strYoutube.slice(
        -11
      )}" frameborder="0" width="100%" height='300'></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`;
        heading.innerHTML = `<h1 class='text-center text-danger'>Food Category:${sendData.meals[0].strCategory}</h1>`;
        document.getElementById("appendData").innerHTML = data;
      });
    })
    .catch((error) => {
      document.querySelector(".find").style.display = "none";
      document.querySelector(".notfound").innerHTML = "Meal Not Found ";
      document.querySelector(".try").innerHTML = "Try Something Else ";
    });
  recipeContainer.remove();
});

function Delete(idMeal) {
  let items = JSON.parse(localStorage.getItem("recipes"));
  console.log("hello check this array", items);
  let index = items.findIndex((d) => d.idMeal === idMeal);
  console.log("hello check index", index);
  if (index !== -1) {
    //items.splice(index,1);
    delete items[index];
    localStorage.setItem("recipes", JSON.stringify(items));
    renderCards(items);
    //now delete
  }
}
function recipeDetail(idMeal) {
  let recipeDetails = JSON.parse(localStorage.getItem("recipes"));
  console.log("hello check this array", recipeDetails);
  let index = recipeDetails.filter((d) => d.idMeal === idMeal);
  console.log("kkkkkk", index);
  if (index !== -1) {
    var mealDetail = document.createElement("div");
    mealDetail.classList.add("recipe");
    mealDetail.innerHTML = `
<div class="image-div">
<img class="singlemeal" src="${index[0].strMealThumb}">
    <h3 class="meal-name">${index[0].strMeal}</h3>
    </div>
    <div>
    <h2>Instructions:</h2>
<p>${index[0].strInstructions}</p>
    </div>`;
    Detail.appendChild(mealDetail);
  }
}
function addRecipe() {
  let newRecipe = JSON.parse(localStorage.getItem("recipes")) || [];
  console.log(newRecipe);
  const recipeName = prompt("Enter the name of the recipe:");
  const recipeImageUrl = prompt("Enter the URL of the recipe image:");
  if (recipeName && recipeImageUrl) {
    const updatedRecipe = {
      name: recipeName,
      imageUrl: recipeImageUrl,
    };
    newRecipe.push(updatedRecipe);

    localStorage.setItem("recipes", JSON.stringify(newRecipe));
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <img class="singlemeal" src="${recipeImageUrl}">
      <h3 class="meal-name">${recipeName}</h3>
      <div class="buttons-container">
        <button class="view-recipe">View Recipe</button>
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    `;
    recipeContainer.appendChild(recipeDiv);
  } else {
    alert("Please enter valid recipe name and image URL.");
  }
}

function Edit(idMeal) {
  // Retrieve meal information from local storage
  const mealsFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
  const mealToEdit = mealsFromLocalStorage.find(
    (meal) => meal.idMeal === idMeal
  );

  // Create a form for editing
  const form = document.createElement("form");
  form.innerHTML = `
  <h2 class='text-center'>Edit Form </h2>
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

    // Update meal information
    mealToEdit.strMeal = newMealName;
    mealToEdit.strMealThumb = newMealImage;

    localStorage.setItem("recipes", JSON.stringify(mealsFromLocalStorage));

    renderCards(mealsFromLocalStorage);

    form.remove();
  });

  // Append the form to the container
  recipeContainer.appendChild(form);
}
