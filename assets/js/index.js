"use strict";

const addNewPostBtn = document.querySelector(".addNewPostButton");
const postsWrapper = document.querySelector(".postsWrapper");
const searchForm = document.querySelector(".searchForm");
const addNewPostForm = document.querySelector(".newPostForm");
postsWrapper.append(...posts.map((post) => createNewPost(post)));

addNewPostForm.addEventListener("submit", createPostSubmitHandler);

addNewPostBtn.addEventListener("click", ({currentTarget}) => {
  addNewPostForm.parentNode.hidden = false;
  currentTarget.hidden = true;
})

function createPostSubmitHandler(e) {
  e.preventDefault();
  const {
    target,
    target: {
      parentNode,
      elements: {
        newPostTitle: { value: newPostTitle },
        newPostContent: { value: newPostContent },
      },
    },
  } = e;
  const postObj = {
    title: newPostTitle,
    content: newPostContent,
    creationDate: new Date(),
  };

  posts.push(postObj);

  postsWrapper.append(createNewPost(postObj));
  target.reset();
  parentNode.hidden = true;
  addNewPostBtn.hidden = false;
}

function createPostResetHandler(e) {}

function createNewPost({ title, content, creationDate }) {
  return createElement(
    "article",
    { classNames: ["post"] },
    createPostHeader(title, creationDate),
    createPostContent(content)
  );
}

function createPostHeader(title, creationDate) {
  return createElement(
    "header",
    { classNames: ["postHeader"] },
    createElement(
      "h2",
      { classNames: ["postTitle"] },
      document.createTextNode(title)
    ),
    createElement(
      "div",
      { classNames: ["postCreationDate"] },
      document.createTextNode(creationDate.toLocaleDateString())
    )
  );
}

function createPostContent(content) {
  return createElement(
    "p",
    { classNames: ["postContent"] },
    document.createTextNode(content)
  );
}
