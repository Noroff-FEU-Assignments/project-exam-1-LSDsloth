const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=10&_embed";

const queryString = document.location.search;
console.log(queryString);

const title = document.querySelector("title");
console.log(title);

const params = new URLSearchParams(queryString);

const slug = params.get("slug");

console.log(slug);

async function post() {
  try {
    const response = await fetch(postsUrl);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].slug === slug) {
        console.log(results[i].title.rendered);
        title.innerHTML += " " + results[i].title.rendered;

        for (let n = 0; n < results[i].tags.length; n++) {
          console.log(results[i].tags[n].name);
          gameTags.innerHTML += `
          <a href="#">${results[i].tags[n].name}</a>
          `;
        }

        gamePagePrice.innerHTML =
          results[i].prices.sale_price + results[i].prices.currency_symbol;

        gameInfoName.innerHTML = results[i].name;
      }
    }

    console.log(results);
  } catch (error) {}
}

post();
