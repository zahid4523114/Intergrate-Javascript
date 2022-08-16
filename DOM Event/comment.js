let postBtn = document.getElementById("post-btn");
//step-2 setup click event
postBtn.addEventListener("click", function () {
  let commentBox = document.getElementById("comment-box");

  let addComment = commentBox.value;

  //   console.log(addComment);

  //step-3 adding comment to the document..

  let comment = document.getElementById("comment");
  //   console.log(comment);

  let newComment = document.createElement("p");

  newComment.innerText = addComment;

  comment.appendChild(newComment);
  //clear textarea..
  commentBox.value = "";
});
