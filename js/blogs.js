const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=10&_embed";

const listOfPosts = document.querySelector(".listOfPosts");

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  posts.forEach(function (post) {
    listOfPosts.innerHTML += `
  <div class="postContainer">
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
            "></div>
            <div class="categories">
                <a class="news" href="#">News</a>
            </div>

            <div class="postText">
              <h4>${post.title.rendered}</h4>
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
  });
}
getPosts(postsUrl);
