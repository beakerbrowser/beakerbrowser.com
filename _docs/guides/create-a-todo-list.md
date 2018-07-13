---
title: Create a todo list app
section: guides
order: 1
---

In this guide, we'll build a "todo list" using Beaker and Dat.
This app will keep a list of tasks, track whether they've been completed, and save the list to the site's files.

We will learn:

 - How to save data to a site's files
 - How to dynamically render content that's saved to the site
 - What a site "owner" is, and how to find out if you're the owner

## Get started

[Create a new site in Beaker](#TODO) and copy this HTML into index.html.
Our "todo list" will use a very simple HTML skeleton.
The todos will be rendered with Javascript.

<figcaption class="code">index.html</figcaption>
```html
<html>
  <body>
    <!-- app -->
    <h1>Todos</h1>
    <ol id="todo-list"></ol>
    <form id="add-todo-form" style="display: none">
      <div><input name="text"/> <button type="submit">add</button></div>
    </form>

    <!-- templates -->
    <template id="todo-template">
      <li><input type="checkbox" /> <span /></li>
    </template>

    <!-- code -->
    <script type="module" src="index.js"></script>
  </body>
</html>
```

Create a todos.json file in your site.
This will be your persistent data store.

<figcaption class="code">todos.json</figcaption>
```json
[
  {
    "text": "Start reading the guide",
    "completed": true
  },
  {
    "text": "Finish building my todo list app",
    "completed": false
  }
]
```

On page load, we want to render the todo list. We will:

 - Read todos.json to get the tasks
 - Dynamically add the tasks to `'#todo-list'`

We use the [DatArchive API](/docs/api/dat.html) to read the todos.json file.

<figcaption class="code">index.js</figcaption>
```js
// load data
var archive = new DatArchive(window.location)
var todos = JSON.parse(await archive.readFile('/todos.json', 'utf8'))
```

We can use `DatArchive(window.location)` to get an instance of the current site because [window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) refers to the current page's URL.

After reading and parsing the todos.json file, we have a `todos` array with all the current data.
Let's render them to the page.

## Rendering with a `<template>`

We'll render the todos with the [template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).
We'll put the template element in index.html.
It won't be visible because `<template>` elements are hidden by default.

<figcaption class="code">index.html</figcaption>
```html
<template id="todo-template">
  <li><input type="checkbox" /> <span /></li>
</template>
```

To render, we'll "clone" the `<template>` with the `document.importNode` function.
The cloned element will have all of the internal markup that the template element has.
After cloning, we decorate the element and add it to the page.

<figcaption class="code">index.js</figcaption>
```js
window.addEventListener('load', e => {
  var archive = new DatArchive(window.location)
  var todos = JSON.parse(await archive.readFile('/todos.json', 'utf8'))
  todos.forEach(renderTodo)
}

function renderTodo (todo) {
  // clone the template element
  var template = document.querySelector('#todo-template')
  var el = document.importNode(template.content, true)

  // put the todo data into the element
  if (todo.completed)
    el.querySelector('input').setAttribute('checked', true)
  el.querySelector('span').textContent = todo.text

  // add to the page
  document.querySelector('#todo-list').append(el)
}
```

After this, you should be able to load the site and see all of the tasks in your todos.json.
You can manually add and remove tasks to the json file to update your list.

## "Add todo" form

Let's implement a form to add tasks to the todos.json!
We can use the [DatArchive API](/docs/api/dat.html) to save the new tasks.
This form should be in your index.html.

<figcaption class="code">index.html</figcaption>
```html
<form id="add-todo-form">
  <div><input name="text"/> <button type="submit">add</button></div>
</form>
```

We'll add a function to handle the submit event.
This function will:

 - Create a new todo object
 - Save the new object to todos.json
 - Update the page

<figcaption class="code">index.js</figcaption>
```js
document.querySelector('#add-todo-form').addEventListener('submit', e => {
  e.preventDefault()

  // add the new todo
  var todo = {
    text: e.target.text.value,
    completed: false
  }
  todos.push(todo)

  // render to the page
  renderTodo(todo)
  e.target.reset()

  // save
  archive.writeFile('/todos.json', JSON.stringify(todos, null, 2))
})
```

Now you can add todos using the site, and they will be saved to your todos.json file.

<aside class="tip">
  <div class="tip-heading">
    <span class="fa fa-info-circle"></span>
  </div>

  <p class="tip-content">
    When a site saves data to itself, it's called a "self-mutating site."
    Our todo list site is self-mutating because it saves its state to the todos.json file.
  </p>
</aside>

## Only show "add todo" if you own the site

But wait!
There's a problem with our app.

Dat sites can only be changed by their **owners**.
The owner is the user that created the site.
That means our "add todo" form won't work for most users because they can't change the todos.json file.

To fix this, let's hide the form from non-owners.

<figcaption class="code">index.html</figcaption>
```html
<form id="add-todo-form" style="display: none">
  ...
</form>
```

We'll check if the user is the owner on load.
We can do this using the [getInfo() function](/api/docs/dat.html#getinfo).

<figcaption class="code">index.js</figcaption>
```js
window.addEventListener('load', async function () {
  // create an 'archive' instance for this site
  var archive = new DatArchive(window.location)

  // check if the user owns the site
  var info = await archive.getInfo()
  if (info.isOwner) {
    // show the add todo form
    document.querySelector('#add-todo-form').style.display = 'block'
  }

  // ...
}
```

Now the "add todo" form only shows for the owner of the site (you) which is a good thing because only owners can use it.

## How can non-owners add todos?

Beaker is still working on tools which allow non-owners to contribute to sites.
Two features worth exploring are:

 - The [datPeers Lab API](/docs/apis/experimental-datpeers.html) makes it possible to send and receive messages with peers. Using this, the owner of the site could keep the app open to receive link suggestions from visitors.
 - The Dat Protocol is adding "multiwriter" support which will enable multiple site owners at once.

Keep an eye out for updates on building collaborative sites.

## Implementing the "completed" checkbox

Implementing the "completed" checkbox should be easy using the APIs we've covered.
In the `renderTodo()` function, we add a 'change' handler which updates the todo and writes to the site files.

<figcaption class="code">index.js</figcaption>
```js
el.querySelector('input').addEventListener('change', e => {
  todo.completed = !todo.completed
  archive.writeFile('/todos.json', JSON.stringify(todos, null, 2))
})
```

Ideally, we'd check if the user is the owner before handling the checkmark.
We'll leave that as an exercise for the reader.

## Final application

Okay, let's put it all together!
Our final app is less than 100 lines long.

<figcaption class="code">index.html</figcaption>
```html
<html>
  <body>
    <!-- app -->
    <h1>Todos</h1>
    <ol id="todo-list"></ol>
    <form id="add-todo-form" style="display: none">
      <div><input name="text"/> <button type="submit">add</button></div>
    </form>

    <!-- templates -->
    <template id="todo-template">
      <li><input type="checkbox" /> <span /></li>
    </template>

    <!-- code -->
    <script type="module" src="index.js"></script>
  </body>
</html>
```

<figcaption class="code">index.js</figcaption>
```js
// program
// =

var archive, todos
window.addEventListener('load', e => {
  // load and render todos
  archive = new DatArchive(window.location)
  todos = JSON.parse(await archive.readFile('/todos.json', 'utf8'))
  todos.forEach(renderTodo)

  // setup the 'add todo' form
  var info = await archive.getInfo()
  if (info.isOwner) {
    document.querySelector('#add-todo-form').style.display = 'block'
    document.querySelector('#add-todo-form').addEventListener('submit', e => {
      e.preventDefault()

      // add the new todo
      var todo = {
        text: e.target.text.value,
        completed: false
      }
      todos.push(todo)

      // render to the page
      renderTodo(todo)
      e.target.reset()

      // save
      archive.writeFile('/todos.json', JSON.stringify(todos, null, 2))
    })
  }
}

function renderTodo (todo) {
  // clone the template element
  var template = document.querySelector('#todo-template')
  var el = document.importNode(template.content, true)

  // put the todo data into the element
  if (todo.completed) {
    el.querySelector('input').setAttribute('checked', true)
  }
  el.querySelector('span').textContent = todo.text

  // add check handler
  el.querySelector('input').addEventListener('change', e => {
    todo.completed = !todo.completed
    archive.writeFile('/todos.json', JSON.stringify(todos, null, 2))
  })

  // add to the page
  document.querySelector('#todo-list').append(el)
}
```