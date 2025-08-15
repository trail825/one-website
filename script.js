
function loadComments() {
  const saved = JSON.parse(localStorage.getItem('comments')) || [];
  const commentList = document.getElementById('commentList');
  saved.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    commentList.appendChild(li);
  });
}

function addComment() {
  const input = document.getElementById('commentInput');
  const commentText = input.value.trim();

  if (commentText !== '') {
    const commentList = document.getElementById('commentList');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentList.appendChild(newComment);

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('comments')) || [];
    saved.push(commentText);
    localStorage.setItem('comments', JSON.stringify(saved));

    input.value = '';
  }
}

window.onload = loadComments;