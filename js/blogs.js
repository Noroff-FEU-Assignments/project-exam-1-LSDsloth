const postsUrl =
  "https://libeck.tech/project_exam//wp-json/wp/v2/posts?per_page=10&_embed";

const listOfPosts = document.querySelector(".listOfPosts");
const categoriesWrapper = document.querySelector(".categories");

async function getPosts(postsUrl) {
  const response = await fetch(postsUrl);
  const posts = await response.json();
  console.log(posts);

  posts.forEach(function (post) {
    for (let i = 0; i < post._embedded["wp:term"][0].length; i++) {
      console.log(post._embedded["wp:term"][0]);
      console.log(post._embedded["wp:term"][0][i].name);
      console.log(post.categoriesWrapper);

      post._embedded["wp:term"][0].forEach((category) => {
        console.log(post.title.rendered);
        console.log(category.name);
        console.log(category.categoriesWrapper);
      });

      // <a class="${post._embedded["wp:term"][0][i].slug}" href="#">
      //     ${post._embedded["wp:term"][0][i].name}
      //     </a>
    }

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
}
getPosts(postsUrl);
