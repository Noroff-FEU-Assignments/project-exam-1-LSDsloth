const queryString = document.location.search;
console.log(document.location.search);
console.log(queryString);

const title = document.querySelector("title");

const params = new URLSearchParams(queryString);

const name = params.get("name");

console.log(name);

const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=10&_embed";
