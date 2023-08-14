const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsEl = document.querySelector("#posts");





window.addEventListener("load", function () {
  let html = "";
  for (let i = 0; i < posts.length; i++) {
    html += createPost(posts[i]);
  }
  postsEl.innerHTML = html;
});

function createPost(post) {
  const postEl = `
     <div class="user">
        <div> <img
            src="${post.avatar}"
            alt="${post.name} avatar"
            width="34px"
            height="34px"
            class="avatar"
          /></div> 
         <div> <strong><h3 class="user-name">${post.name}</h3></strong>
          <p class="location">${post.location}</p></div>
        </div>

        <img src="${post.post}" alt="${post.name} portrait" width="100%" class="main-img" />
      
        <button class="btn like-btn" id="likeBtn">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button class="btn comment-btn">
          <i class="fa-regular fa-comment"></i>
        </button>
        <button class="btn share-btn">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
       <strong> <p class="likes"> <span id="likes">${post.likes}</span> likes</p></strong>
        <ul class="comments">
          <li>
           <strong> <span class="comment-from">${post.username}</span></strong>
            <span class="comment-text">${post.comment}</span>
          </li>
        </ul>
    `;
  return postEl;
}

const likeBtn = document.querySelector("#likeBtn");
const likeEl = document.querySelector("#likes");


likeBtn.addEventListener("click", function () {


  if(likeBtn.classList.add("liked")){
     currentLikes + 1;
  likeEl.textContent = currentLikes;
  }else{
    likeBtn.classList.remove("liked");
    
  }
   
});
