const postsUrl = "https://libeck.tech/project_exam//wp-json/wp/v2/posts?_embed";
const postHeader = document.querySelector(".rightSide h3");
const featuredPost = document.querySelector(".featuredPost");
const featuredPostsContainer = document.querySelector(".slidesContainer");
const featuredImageWrapper = document.querySelector(
  ".featuredPost .imgWrapper"
);

// for (let i = 0; i < postHeader.length; i++) {
//   console.log(postHeader[i].innerHTML);
// }

console.log(postsUrl.length);

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  posts.forEach(function (post) {
    console.log("Post with id: " + post.id);

    featuredPostsContainer.innerHTML += `
    <li class="featuredPost">
              <div class="leftSide">
                <div
                  class="imgWrapper"
                  style="
                    background: url(${post._embedded["wp:featuredmedia"][0].source_url});
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    background-size: cover;
                    background-position: 50% 50%;
                    background-repeat: no-repeat;
                  "
                ></div>
                <div class="categories">
                  <a class="featured" href="#">${post._embedded["wp:term"][0][0].name}</a>
                  <a class="news" href="#">News</a>
                </div>
              </div>

              <div class="rightSide">
                <div class="postText">
                  <h3>${post.title.rendered}</h3>
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
    `;

    for (let i = 0; i < post._embedded["wp:term"][0].length; i++) {
      console.log(post._embedded["wp:term"][0][i].name);
      if (post._embedded["wp:term"][0][i].name == "Reviews") {
        console.log(post.title.rendered);
      }
    }
  });

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]._embedded);
    console.log(posts[i].excerpt);
    console.log(posts[i]);
  }

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].tags);
  }
}

getPosts(postsUrl);
