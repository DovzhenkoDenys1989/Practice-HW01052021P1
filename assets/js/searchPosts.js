"use strict";

const searchForm = document.querySelector(".searchForm");
const {
  elements: { search },
} = searchForm;

searchForm.addEventListener("submit", (e) => e.preventDefault());
search.addEventListener("paste", searchHandler);
search.addEventListener("keyup", searchHandler);

function searchHandler({ target: { value: searchStr } }) {
  if(searchStr.length < 3) {
    renderPosts(postsWrapper, posts);
    return;
  };
  const foundPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchStr.toLowerCase())
  );
  renderPosts(postsWrapper, foundPosts);
}