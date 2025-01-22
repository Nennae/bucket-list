// DOM elements
const pageContainer = document.getElementById("wrapper");
const activityInput = document.getElementById("activityName");
const activitySelect = document.getElementById("activityCategory");
const submitBtn = document.querySelector(".submit-btn");
const bucketLists = document.getElementById("bucketLists");
const form = document.getElementById("bucketForm");

// retrieves activities if there is any in localstorage, else empty array (so it's always initialized )
let activities = JSON.parse(localStorage.getItem("activities")) || [];

// converts activities array to string
function saveToLocalStorage() {
  localStorage.setItem("activities", JSON.stringify(activities));
}

function handleBucketList() {
  // initializes by displaying items in localstorage
  displayListItems();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // assigns input and select values to object keys
    const activity = {
      category: activitySelect.value,
      name: activityInput.value.trim(), // ignores whitespaces
      isDone: false,
    };
    activities.push(activity);

    saveToLocalStorage();

    form.reset(); // clears the form fields
    displayListItems();
  });

  function displayListItems() {
    bucketLists.innerHTML = ""; //clear previous content to prevent multiples when re-rendering

    activities.forEach((activity, index) => {
      let categoryContainer = document.querySelector(
            `[data-category="${activity.category}"]`
      );

      if (!categoryContainer) {
        categoryContainer = document.createElement("div");
            categoryContainer.setAttribute("data-category", activity.category);

        categoryContainer.innerHTML = `
                        <h2 class="category-title">${activity.category}</h2>
                        <div class="items-container"></div>
                        `;
        bucketLists.appendChild(categoryContainer);
      }

      const itemsContainer =
        categoryContainer.querySelector(".items-container");
      const itemElement = document.createElement("div");
      itemElement.setAttribute("data-index", index);

      itemElement.innerHTML = `
                  <p class="item-name">${activity.name}</p>
                  <button class="delete-btn">Delete</button>
                  <label for="done-check">Done</label>
                  <input type="checkbox" class="done-check" value=${activity.isDone}/>
                  `;
      const deleteBtn = itemElement.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        deleteActivity(index);
      });

      itemsContainer.appendChild(itemElement);
    });
    function deleteActivity(index) {
      activities.splice(index, 1); // removes activity from the array
      saveToLocalStorage(); // saves updated list to localstorage
      displayListItems(); // re-render the list
    }
  }
}
handleBucketList();
