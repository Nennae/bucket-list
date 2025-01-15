# **Exercise: Build Your Own Bucket List**

## **Introduction**
In this exercise, you will create an interactive webpage where users can build their own Bucket List. The goal is to create a list of things they want to do before they die and allow them to interact with the list by adding, removing, and marking activities as completed.

This exercise will cover the following concepts you’ve learned during the week:

- **Arrays**: Manage data (activities) in an array and use methods like`.push()` and `.splice()`.
- **Objects**: Represent each activity as an object with properties like name and status.
- **DOM-manipulation**: Dynamically create and modify HTML elements to display and update the list.
- **Event handling**: Handle events such as adding a new activity, removing an activity, or marking one as completed.

## **Objective**
Create a **Bucket List-app** where the user can:
1. Add new activities with a description and category (e.g., "Travel to Japan", category: "Travel").
2. Display the activities in a list, grouped by category.
3. Mark activities as completed or remove them from the list.

---

## **Step-by-step**
#### Example of how to approach solving the task.
### **1. HTML-structure**
Create a simple HTML file with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bucket List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #bucketLists div {
      margin-bottom: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
    }
    button {
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Bucket List</h1>
  </header>
  <main>
    <form id="bucketForm">
      <input type="text" id="activityName" placeholder="What do you want to do?" required />
      <select id="activityCategory">
        <option value="Travel">Travel</option>
        <option value="Adventure">Adventure</option>
        <option value="Learning">Learning</option>
        <option value="Hobby">Hobby</option>
      </select>
      <button type="submit">Add</button>
    </form>
    <section id="bucketLists"></section>
  </main>
  <script src="script.js"></script>
</body>
</html>

```

### **2. JavaScript-logic**
Create a script.js file to add functionality. The following steps guide you through the key parts:

* Start with an empty array to hold all activities.
* Create a function to render the list dynamically in the DOM.
* Add an event listener to the form to add new activities.
* Create a function to clear and refresh the list when the page reloads.


## **Level-ups**

* **Sortera activities**: Add a function to sort activities alphabetically within each category.
* **Save data**: Use localStorage to save and automatically load the list.
* **Edit activities**: Add the ability to edit an activity.


## **Result**
When finished, you should have a fully functional Bucket List App where users can:

* Add activities with a category.
* Mark activities as completed.
* Remove activities.
* View activities grouped by category.
  
Good luck and enjoy the exercise!
