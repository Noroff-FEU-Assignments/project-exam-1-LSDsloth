const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=15&_embed";
const queryString = document.location.search;

console.log(queryString);

const title = document.querySelector("title");

const params = new URLSearchParams(queryString);

const slug = params.get("slug");

const header = document.querySelector("h1");
const categories = document.querySelector(".category");
const thumbnailWrapper = document.querySelector(".blogPostThumbnailWrapper");
const timeOfPost = document.querySelector(".blogPostInformation time");
const profilepicWrapper = document.querySelector(".profilepicWrapper a");
const authorName = document.querySelector(".authorName");
const postText = document.querySelector(".blogPostText p");
const postThumbnail = document.getElementById("thumbnail");

async function post() {
  try {
    const response = await fetch(postsUrl);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].slug === slug) {
        title.innerHTML += " " + results[i].title.rendered;

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

        const date = results[i].date;
        console.log(date);
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate();

        if (month === 1) {
          month = "January";
        } else if (month === 2) {
          month = "February";
        } else if (month === 3) {
          month = "March";
        } else if (month === 4) {
          month = "April";
        } else if (month === 5) {
          month = "May";
        } else if (month === 6) {
          month = "June";
        } else if (month === 7) {
          month = "July";
        } else if (month === 8) {
          month = "August";
        } else if (month === 9) {
          month = "September";
        } else if (month === 10) {
          month = "October";
        } else if (month === 11) {
          month = "Novermber";
        } else if (month === 12) {
          month = "December";
        }

        console.log(day);
        console.log(month);
        console.log(year);
        console.log(newDate);
        const postDate = day + ". " + month + " " + year;
        console.log(postDate);

        timeOfPost.innerHTML = postDate;

        profilepicWrapper.innerHTML = `<img src="${results[i]._embedded.author[0].avatar_urls[24]}" alt="" />`;
        authorName.innerHTML = results[i]._embedded.author[0].name;
        postText.innerHTML = results[i].content.rendered;

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

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const thumbnail = document.querySelector("#thumbnail");
const html = document.querySelector("html");

function onClick(element) {
  modalImage.src = element.src;
  modal.style.display = "block";
}

modal.addEventListener("click", htmlScroll);
function htmlScroll() {
  html.style.overflow = "auto";
}

thumbnail.addEventListener("click", htmlNotScroll);
function htmlNotScroll() {
  html.style.overflow = "hidden";
}
