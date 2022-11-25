const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=10&_embed";
const queryString = document.location.search;

console.log(queryString);

const title = document.querySelector("title");
console.log(title);

const params = new URLSearchParams(queryString);

const slug = params.get("slug");

console.log(slug);

const header = document.querySelector("h1");
const categories = document.querySelector(".categories");
const thumbnailWrapper = document.querySelector(".blogPostThumbnailWrapper");
const timeOfPost = document.querySelector(".blogPostInformation time");
const authorName = document.querySelector(".authorName");
const postText = document.querySelector(".blogPostText p");
const postThumbnail = document.getElementById("thumbnail");

async function post() {
  try {
    const response = await fetch(postsUrl);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].slug === slug) {
        console.log(results[i].title.rendered);
        title.innerHTML += " " + results[i].title.rendered;

        console.log(results[i].content.rendered);

        header.innerHTML = results[i].title.rendered;

        results[i]._embedded["wp:term"][0].forEach((category) => {
          categories.innerHTML += `
          <a class="${category.slug} category" href="#">
          ${category.name}
          </a>
          `;
        });

        postThumbnail.src =
          results[i]._embedded["wp:featuredmedia"][0].source_url;

        // thumbnailWrapper.innerHTML += `
        // <div class="blogPostThumbnail"
        //   style="
        //   background-image: url(${results[i]._embedded["wp:featuredmedia"][0].source_url});
        // "
        // onclick="onClick(this)"
        //   ></div>
        // `;

        // console.log(data.date);

        timeOfPost.innerHTML = results[i].date;

        authorName.innerHTML = results[i]._embedded.author[0].name;
        postText.innerHTML = results[i].content.rendered;

        // blogPostWrapper.innerHTML += `
        // <div class="blogPostHeaderWrapper">
        //   <h1>${results[i].title.rendered}</h1>
        //   <div class="categories">
        //     <a class="news" href="#">News</a>
        //   </div>
        // </div>

        // <div class="blogPostThumbnailWrapper">
        //   <div
        //     id="blogPostThumbnail"
        //     style="
        //       display: block;
        //       background: url(${results[i]._embedded["wp:featuredmedia"][0].source_url});
        //       width: 100%;
        //       aspect-ratio: 16 / 9;
        //       background-size: cover;
        //       background-position: 50% 50%;
        //       background-repeat: no-repeat;
        //     "
        //   ></div>
        // </div>

        // <div class="blogPostInformation">
        //   <time>${results[i].date}</time>
        //   <p>Author: <a href="#">${results[i]._embedded.author[0].name}</a></p>
        // </div>
        // <div class="blogPostText">
        //   <p>
        //     ${results[i].content.rendered}
        //   </p>
        // </div>
        // `;

        const featureimage = document.querySelector(".blogPostThumbnail");
        featureimage.addEventListener("click", function () {
          // featureimage.style.width = "50%";
          console.log("You clicked the image");
          featureimage.classList.add("model");
        });

        if (featureimage.style.width == "50%") {
          featureimage.oncClick = function () {
            featureimage.style.width = "200%";
          };
        }

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

function onClick(element) {
  document.getElementById("modalImage").src = element.src;
  document.getElementById("modal").style.display = "block";
}
