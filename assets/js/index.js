"use strict";

const postsWrapper = document.querySelector(".postsWrapper");

renderPosts(postsWrapper, posts);

function renderPosts(container, posts) {
  clearChildren(container);
  container.append(...posts.map((post) => createNewPost(post)));
}

function clearChildren(container) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
