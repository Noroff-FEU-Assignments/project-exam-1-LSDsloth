const postsUrl = "https://libeck.tech/project_exam//wp-json/wp/v2/posts?_embed";
// const rightSide = document.querySelector(".rightSide");
const leftSideImage = document.querySelector(".leftSide img");
const postHeader = document.querySelector(".rightSide h3");
const featuredPost = document.querySelector(".featuredPost");
const featuredPostsContainer = document.querySelector(".slidesContainer");
const featuredImageWrapper = document.querySelector(
  ".featuredPost .imgWrapper"
);
const newsPosts = document.querySelector(".newsPosts .listOfPosts");
const tutorialsPosts = document.querySelector(".tutorialsPosts .listOfPosts");
const reviewsPosts = document.querySelector(".reviewsPosts .listOfPosts");
const categoriesWrapper = document.querySelector(".categories");

// for (let i = 0; i < postHeader.length; i++) {
//   console.log(postHeader[i].innerHTML);
// }

console.log(postsUrl.length);

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  // rightSide.style.height = leftSideImage.style.height;

  // FEATURED POSTS

  for (let i = 0; i < 4; i++) {
    console.log(posts[i]);

    posts[i]._embedded["wp:term"][0].forEach((category) => {
      console.log(category.name);
      console.log(category);

      featuredPostsContainer.innerHTML += `
              <li class="featuredPost">
                <div class="leftSide">
                  <a class="leftSideimg" href="blogSpecific.html?slug=${posts[i].slug}"
                    class="imgWrapper"
                    style="
                      display: block;
                      background: url(${posts[i]._embedded["wp:featuredmedia"][0].source_url});
                      width: 100%;
                      aspect-ratio: 16 / 9;
                      background-size: cover;
                      background-position: 50% 50%;
                      background-repeat: no-repeat;
                    "
                  ></a>
                  <div class="categories">
                  <a class="${category.slug}" href="#">
                  ${category.name}
                  </a>
                  </div>
                </div>
                <div class="rightSide">
                  <div class="postText">
                    <a href="blogSpecific.html?slug=${posts[i].slug}"> <h3>${posts[i].title.rendered}</h3> </a>
                    <p>
                      ${posts[i].excerpt.rendered}
                    </p>
                  </div>
                  <div class="posterInformation">
                    <div class="profilepicWrapper">
                      <a href="#"><img src="${posts[i]._embedded.author[0].avatar_urls[24]}" alt="" /></a>
                    </div>
                    <div class="posterNameAndTitle">
                      <a href="#">${posts[i]._embedded.author[0].name}</a>
                      <p>Site owner</p>
                    </div>
                  </div>
                </div>
                `;
    });
  }

  // NEWS POSTS

  posts.forEach((post) => {
    console.log(post);

    post._embedded["wp:term"][0].forEach((category) => {
      if (post._embedded["wp:term"][0][0].name == "News") {
        newsPosts.innerHTML += `
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
      }
    });
  });

  //     // TUTORIALS POSTS

  posts.forEach((post) => {
    console.log(post);

    post._embedded["wp:term"][0].forEach((category) => {
      if (post._embedded["wp:term"][0][0].name == "Tutorials") {
        tutorialsPosts.innerHTML += `
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
      }
    });
  });

  //     // REVIEWS POSTS

  posts.forEach((post) => {
    console.log(post);

    post._embedded["wp:term"][0].forEach((category) => {
      if (post._embedded["wp:term"][0][0].name == "Reviews") {
        reviewsPosts.innerHTML += `
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
      }
    });
  });

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]._embedded);
    console.log(posts[i]);
  }

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]._embedded["wp:term"][0]);

    for (let n = 0; n < posts[i]._embedded["wp:term"][0].length; n++) {
      console.log(posts[i]._embedded["wp:term"][0][n].name);
      reviewsPosts.innerHTML += `
      
      `;
    }
  }
}

getPosts(postsUrl);
