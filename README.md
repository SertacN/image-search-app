<h1>Image Search App</h1>

<h3>Used React with Vite</h3>

<p>GET API from "Unsplash.com" , Data fetch proses with Axios</p>

<h3>What is Axios?</h3>
<p>
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
</p>
<h3>Components:</h3>

- Api.jsx (It returns the value from the search bar as an response(keep data array).)
- ImageItem.jsx (It loops through the entire data that is obtained through 'map' within "<img />" )
- ImageList.jsx (Can obtain image items to imgContainer.)
- SearchBar.jsx (It tracks the value entered by the user and sends this value to the handleSubmit function when the form is submitted.)

<h3>Functions:</h3>

- Search bar handle user input value.
- Get photos and create 10 images.

<h3>CSS:</h3>
<p>
Custom App.css, searchbar.css, index.css
</p>
https://github.com/SertacN
