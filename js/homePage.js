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
const pageLoader = document.querySelector(".ring");

// FEATURED POSTS

const latestUrl = postsUrl + "&per_page=4";

async function getPosts(latestUrl) {
  let response = await fetch(latestUrl);
  let posts = await response.json();
  console.log(posts);

  for (let i = 0; i < 4; i++) {
    console.log(posts[i]);

    posts[i]._embedded["wp:term"][0].forEach((category) => {
      console.log(category.name);
      console.log(category);

      const date = posts[i].date;
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

      featuredPostsContainer.innerHTML += `
              <li class="featuredPost">
                <div class="leftSide">
                  <a class="leftSideimg" href="blogSpecific.html?slug=${posts[i].slug}" class="imgWrapper">
                  <img src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i]._embedded["wp:featuredmedia"][0].alt_text}">
                  </a>
                  <div class="category">
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
                      <div class="poster">
                        <div class="profilepicWrapper">
                          <a href="#"><img src="${posts[i]._embedded.author[0].avatar_urls[24]}" alt="" /></a>
                        </div>
                        <div class="posterNameAndTitle">
                          <a href="#">${posts[i]._embedded.author[0].name}</a>
                          <p>Site owner</p>
                        </div>
                        </div>
                        <div class="timeOfPost">
                        <i class="fa-regular fa-clock"></i>
                        <time>${postDate}</time>
                        </div>
                    </div>
                </div>
                `;
    });
  }
}

getPosts(latestUrl);

// NEWS POSTS

const newsUrl = postsUrl + "&per_page=3&categories=3";
console.log(newsUrl);

async function getNewsPosts(newsUrl) {
  let responsee = await fetch(newsUrl);
  let posts = await responsee.json();

  posts.forEach((post) => {
    if (post.categories[0] == 3) {
      console.log(post.title.rendered);
    }
    post._embedded["wp:term"][0].forEach((category) => {
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

      newsPosts.innerHTML += `
      <div class="postContainer">
      <a href="blogSpecific.html?slug=${post.slug}" class="imgWrapper">
        <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
      </a>
      <div class="detailsAboutPost">
        <div class="category">
          <a class="${category.slug}" href="#">
          ${category.name}
          </a>
        </div>
        
        <div class="postText">
          <a href="blogSpecific.html?slug=${post.slug}"> <h4>${post.title.rendered}</h4> </a>
          <div class="excerpt">
            ${post.excerpt.rendered}
          </div>
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
}

getNewsPosts(newsUrl);

// TUTORIALS POSTS

const tutorialsUrl = postsUrl + "&per_page=3&categories=9";
console.log(tutorialsUrl);

async function getTutorialsPosts(tutorialsUrl) {
  let responsee = await fetch(tutorialsUrl);
  let posts = await responsee.json();

  posts.forEach((post) => {
    if (post.categories[0] == 3) {
      console.log(post.title.rendered);
    }
    post._embedded["wp:term"][0].forEach((category) => {
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

      tutorialsPosts.innerHTML += `
      <div class="postContainer">
      <a href="blogSpecific.html?slug=${post.slug}" class="imgWrapper">
        <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
      </a>
      <div class="detailsAboutPost">
        <div class="category">
          <a class="${category.slug}" href="#">
          ${category.name}
          </a>
        </div>
        
        <div class="postText">
          <a href="blogSpecific.html?slug=${post.slug}"> <h4>${post.title.rendered}</h4> </a>
          <div class="excerpt">
            ${post.excerpt.rendered}
          </div>
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
}

getTutorialsPosts(tutorialsUrl);

// REVIEWS POSTS

const reviewsUrl = postsUrl + "&per_page=3&categories=8";
console.log(reviewsUrl);

async function getReviewsPosts(reviewsUrl) {
  let responsee = await fetch(reviewsUrl);
  let posts = await responsee.json();

  posts.forEach((post) => {
    if (post.categories[0] == 3) {
      console.log(post.title.rendered);
    }
    post._embedded["wp:term"][0].forEach((category) => {
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

      reviewsPosts.innerHTML += `
             <div class="postContainer">
                <a href="blogSpecific.html?slug=${post.slug}" class="imgWrapper">
                  <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
                </a>
                <div class="detailsAboutPost">
                  <div class="category">
                    <a class="${category.slug}" href="#">
                    ${category.name}
                    </a>
                  </div>
                  
                  <div class="postText">
                    <a href="blogSpecific.html?slug=${post.slug}"> <h4>${post.title.rendered}</h4> </a>
                    <div class="excerpt">
                    ${post.excerpt.rendered}
                    </div>
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
}

getReviewsPosts(reviewsUrl);
