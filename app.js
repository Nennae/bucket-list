// DOM elements
const pageContainer = document.getElementById("wrapper");
const activityInput = document.getElementById("activityName");
const activitySelect = document.getElementById("activityCategory");
const submitBtn = document.querySelector(".submit-btn");
const bucketLists = document.getElementById("bucketLists");
const form = document.getElementById("bucketForm");

function handleActivities() {
      const activities = [];

      submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
    // assigns input and select values to object keys
      const activity = {
      category: activitySelect.value,
      name: activityInput.value,
      isDone: false,
      };
            activities.push(activity); // populates emmpty array with objects
            form.reset();
            displayListItems(); // calls function on row 25, onclick
      });

      function displayListItems() {
            bucketLists.innerHTML = ""; //clear previous content to prevent doubles
            activities.forEach((activity) => {

                  let categoryContainer = document.querySelector(`[data-category="${activity.category}"]`);

                  if (!categoryContainer) {
                        categoryContainer = document.createElement("div");
                        categoryContainer.setAttribute("data-category", activity.category);

                        categoryContainer.innerHTML = `
                        <h2 class="category-title">${activity.category}</h2>
                        <div class="items-container"></div>
                        `;
                        bucketLists.appendChild(categoryContainer);
                  }

                  const itemsContainer = categoryContainer.querySelector(".items-container");
                  const itemElement = document.createElement("div");

                  itemElement.innerHTML = `
                  <p class="item-name">${activity.name}</p>
                  <button class="delete-btn">Delete</button>
                  <label for="done-check">Done</label>
                  <input type="checkbox" id="done-check" value=${activity.isDone}/>
                  `;
                  itemsContainer.appendChild(itemElement);
            })
      }
}
handleActivities();