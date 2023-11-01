<h1>Node.js RESTful API Practice</h1>

<p>This repository contains a simple Node.js application that creates a RESTful API for managing user data. It is designed for practice and learning purposes. The API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on user records.</p>

<h2>Features</h2>

<ul>
  <li>Get a list of all users</li>
  <li>Get a single user by their ID</li>
  <li>Create a new user</li>
  <li>Update an existing user</li>
  <li>Delete a user</li>
</ul>

<h2>Setup and Usage</h2>

<ol>
  <li>Clone this repository to your local machine:</li>
</ol>

<pre>
<code>git clone https://github.com/your-username/nodejs-restful-api-practice.git</code>
</pre>

<ol start="2">
  <li>Install the required dependencies:</li>
</ol>

<pre>
<code>npm install</code>
</pre>

<ol start="3">
  <li>Start the server:</li>
</ol>

<pre>
<code>node app.js</code>
</pre>

<p>The server will run on <code>http://localhost:3000</code>. You can use tools like <code>curl</code>, Postman, or a web browser to interact with the API and practice your Node.js skills.</p>

<h2>In-Memory Database</h2>

<p>The application uses an in-memory database with dummy user data. The user data includes fields like "id," "name," "email," and "age" to simulate real-world user records.</p>

<h2>Error Handling</h2>

<p>The code includes custom error handling middleware to provide proper error responses. When a user is not found (HTTP 404), a custom error object is created and passed to the error handling middleware.</p>

<h2>Contributing</h2>

<p>Feel free to explore the code and make improvements as part of your learning journey. If you have any questions or suggestions, please don't hesitate to reach out.</p>

<h2>License</h2>

<p>This project is open-source and available under the <a href="LICENSE">MIT License</a>. You are welcome to use it, modify it, or contribute to it as you see fit.</p>

<p>Happy coding!</p>
