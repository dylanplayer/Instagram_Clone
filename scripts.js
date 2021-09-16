import posts from './data.js';


const postContainer = document.querySelector("#posts");


for(let i = 0; i < posts.length; i++){
    
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";

    const profileImage = document.createElement("img");
    profileImage.className = "profile-img";
    profileImage.src = posts[i].profileImage;
    postHeader.appendChild(profileImage);
    
    postDiv.appendChild(postHeader)

    const username = document.createElement("h2");
    username.className = "username";
    username.innerHTML = posts[i].username;
    postHeader.appendChild(username);

    const postImage = document.createElement("img");
    postImage.className = "post-image";
    postImage.src = posts[i].image;
    postDiv.appendChild(postImage);

    postContainer.appendChild(postDiv);

}

