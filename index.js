import { fetchPosts } from './data.js';
import './style.css';


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

fetchPosts().then(posts => {
  posts.forEach(post => {
    console.log(post);
  });
});