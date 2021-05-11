"use strict";

const addNewPostForm = document.querySelector(".newPostForm");
const addNewPostBtn = document.querySelector(".addNewPostButton");

addNewPostForm.addEventListener("submit", createPostSubmitHandler);
addNewPostForm.addEventListener("reset", createPostResetHandler);

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
  const correctPostTitle = newPostTitle.trim();
  const correctPostContent = newPostContent.trim();
  if(correctPostTitle.length < 3){
    alert("Длина заголовка должна быть более двух символов");
    return;
  }
  const postObj = {
    title: correctPostTitle,
    content: correctPostContent,
    creationDate: new Date(),
  };

  posts.unshift(postObj); //push - в конец добавляем новые посты в массив

  postsWrapper.prepend(createNewPost(postObj)); //apend - в конец
  target.reset();
  parentNode.hidden = true;
  addNewPostBtn.hidden = false;
}

function createPostResetHandler({target:{parentNode}}) {
  parentNode.hidden = true;
  addNewPostBtn.hidden = false;
}