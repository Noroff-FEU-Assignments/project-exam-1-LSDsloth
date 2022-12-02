const postsUrl = "https://libeck.tech/project_exam/wp-json/wp/v2/posts?_embed";

const listOfPosts = document.querySelector(".listOfPosts");
const categoriesWrapper = document.querySelector(".categories");
const postImageWrapper = document.querySelector(".imgwrapper");
const postImage = document.querySelector(".imgWrapper img");
const postHeaderLink = document.querySelector(".postText a");
const postHeader = document.querySelector(".postText h4");
const seeMoreButton = document.querySelector(".seeMore");

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  posts.forEach((post) => {
    console.log(post);

    const date = post.date;
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

    post._embedded["wp:term"][0].forEach((category) => {
      listOfPosts.innerHTML += `
               <div class="postContainer">
               <a href="blogSpecific.html?slug=${post.slug}"
                      class="imgWrapper"
                      style="
                           display: block;
                           background: url(${post._embedded["wp:featuredmedia"][0].source_url});
                           width: 100%;
                           aspect-ratio: 16 / 9;
                           background-size: cover;
                           background-position: 50% 50%;
                           background-repeat: no-repeat;
                         ">
                   </a>
               <div class="detailsAboutPost">
                 <div class="category">
                 <a class="${category.slug}" href="#">
                 ${category.name}
                 </a>
                 </div>
                 <div class="postText">
                 <a href="blogSpecific.html?slug=${post.slug}"> <h4>${post.title.rendered}</h4> </a>
                   <p>
                   ${post.excerpt.rendered}
                   </p>
                 </div>
                 <div class="posterInformation">
                      <div class="poster">
                        <div class="profilepicWrapper">
                          <a href="#"><img src="${post._embedded.author[0].avatar_urls[24]}" alt="" /></a>
                        </div>
                        <div class="posterNameAndTitle">
                          <a href="#">${post._embedded.author[0].name}</a>
                          <p>Site owner</p>
                        </div>
                        </div>
                        <div class="timeOfPost">
                        <i class="fa-regular fa-clock"></i>
                        <time>${postDate}</time>
                        </div>
                    </div>
               </div>
             </div>
               `;
    });
  });
  const totalPosts = posts.length;
  console.log(totalPosts);
}
getPosts(postsUrl);

console.log(postsUrl);

const amount = 10;

seeMoreButton.addEventListener("click", onClick);
function onClick() {
  event.preventDefault();

  const newUrl =
    "https://libeck.tech/project_exam/wp-json/wp/v2/posts?_embed&per_page=20";
  listOfPosts.innerHTML = "";
  getPosts(newUrl);
  console.log(newUrl);
}
