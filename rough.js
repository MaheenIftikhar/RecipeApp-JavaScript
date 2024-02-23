then((singleMeal)=>{
    //display meal
    //document.addEventListener("DOMContentLoaded", singleMeal);
    
    singleMeal.meals.forEach(meal=>{
    const recipeDiv=docuemnt.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML=`<img src="${meal.strMealThumb}">`
    recipeContainer.appendChild(recipeDiv);
    })
    })
    .then((sendData)=>{
        console.log(sendData);

        
        <div class="add-button">
        <button id="button" class="btn btn-success">Add</button>
        </div>
    }

    )


    //deleete function
    function Delete(id) {
        if (localStorage.getItem("recipes") == null) {
          a = [];
        } else {
          a = JSON.parse(localStorage.getItem("recipes"));
          console.log(a);
        }
        let recipeIdToDelete = 'recipe_id_to_delete';
        let indexToDelete = a.findIndex(meals => meals.id === recipeIdToDelete);
      
        if (indexToDelete !== -1) {
          a.splice(indexToDelete, 1);
      
      localStorage.setItem('recipes', JSON.stringify(a));
      console.log('Product deleted successfully!');
      } else {
      console.log('Product not found!');
      }}


      //get 
      //unshift


      //search meal
//       let data = "";
//       sendData.meals.forEach((e, i) => {
//         data += `
// <h2 class='text-center text-secondary'>Food Area: ${e.strArea}</h2>
// <h2 class='text-center text-warning'>Food Name: ${e.strCategory}</h2>
// <div class="row">
// <div class="col-md-4">
//     <img src="${e.strMealThumb}" alt="" class='w-100'>
// </div>
// <div class="col-md-4">
//     <h2>Ingredients:</h2>
//     <ul>
//         <li>${e.strIngredient1}</li>
//         <li>${e.strIngredient2}</li>
//         <li>${e.strIngredient3}</li>
//         <li>${e.strIngredient4}</li>
//         <li>${e.strIngredient5}</li>
//         <li>${e.strIngredient6}</li>
//         <li>${e.strIngredient7}</li>
//         <li>${e.strIngredient8}</li>
//         <li>${e.strIngredient9}</li>
//         <li>${e.strIngredient10}</li>
//         <li>${e.strIngredient11}</li>
//         <li>${e.strIngredient12}</li>
//         <li>${e.strIngredient13}</li>
//         <li>${e.strIngredient14}</li>
        
//     </ul>
// </div>
// <div class="col-md-4">
// <h2>Measurements:</h2>
// <ul>
// <li>${e.strMeasure1}</li>
// <li>${e.strMeasure2}</li>
// <li>${e.strMeasure3}</li>
// <li>${e.strMeasure4}</li>
// <li>${e.strMeasure5}</li>
// <li>${e.strMeasure6}</li>
// <li>${e.strMeasure7}</li>
// <li>${e.strMeasure8}</li>
// <li>${e.strMeasure9}</li>
// <li>${e.strMeasure10}</li>
// <li>${e.strMeasure11}</li>
// <li>${e.strMeasure12}</li>
// <li>${e.strMeasure13}</li>
// <li>${e.strMeasure14}</li>

// </ul>
// </div>
// </div>
// <div class="col-12">
// <h2>Instructions:</h2>
// <p>${e.strInstructions}</p>
// </div>
// <div class='col-6-offset-3>
// <h2 class='text-center'>Watch Full Video on <a class='text-danger yt' data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><u>Youtube</u></a></h2>
// </div>
// <!-- Modal -->

// <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">${e.strMeal}</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       <iframe src="https://youtube.com/embed/${e.strYoutube.slice(
//         -11
//       )}" frameborder="0" width="100%" height='300'></iframe>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
//         </div>
//       </div>
//     </div>
//   </div>
// `;
//         heading.innerHTML = `<h1 class='text-center text-danger'>Food Category:${sendData.meals[0].strCategory}</h1>`;
//         document.getElementById("appendData").innerHTML = data;


// .catch((error) => {
  //   document.querySelector(".find").style.display = "none";
  //   document.querySelector(".notfound").innerHTML = "Meal Not Found ";
  //   document.querySelector(".try").innerHTML = "Try Something Else ";
  // });

  `
brandForm.innerHTML+= `${}`
brandForm.innerHTML += `





 //   console.log("consoleagain", newRecipe);
    //   const recipeDiv = document.createElement("div");
    //   recipeDiv.classList.add("recipe");
    //   recipeDiv.innerHTML = `
    //   <img class="singlemeal" src="${recipeImageUrl}">
    //   <h3 class="meal-name">${recipeName}</h3>
    //   <div class="buttons-container">
    // <button id="detail-btn" class="view-recipe" onclick="recipeDetail();">View Recipe</button>
    // <div class="icon-container">
    // <i class="fa-sharp fa-regular fa-pen-to-square"onclick="Edit();"></i> 
    // <i class="fa-sharp fa-solid fa-trash-can" onclick="Delete();"></i>
    // </div>
    // </div> 
    // `;
    //   recipeContainer.appendChild(recipeDiv);

    <div class="addcross-icon">
          <button type="button" class="btn-close" aria-label="Close" onclick="closeAdd();"></button>
      </div>