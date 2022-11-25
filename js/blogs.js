const postsUrl =
  "https://libeck.tech/project_exam/wp-json/wp/v2/posts?per_page=10&_embed";

const listOfPosts = document.querySelector(".listOfPosts");
const categoriesWrapper = document.querySelector(".categories");
const postImageWrapper = document.querySelector(".imgwrapper");
const postImage = document.querySelector(".imgWrapper img");
const postHeaderLink = document.querySelector(".postText a");
const postHeader = document.querySelector(".postText h4");

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  posts.forEach((post) => {
    console.log(post);

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
                 <div class="categories">
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
                   <div class="profilepicWrapper">
                     <a href="#"><img src="${post._embedded.author[0].avatar_urls[24]}" alt="" /></a>
                   </div>
                   <div class="posterNameAndTitle">
                     <a href="#">${post._embedded.author[0].name}</a>
                     <p>Site owner</p>
                   </div>
                 </div>
               </div>
             </div>
               `;
    });
  });
}
getPosts(postsUrl);

console.log(postsUrl);

const postUrl = new postsUrl("heyy");
console.log(newPostsUrl);
