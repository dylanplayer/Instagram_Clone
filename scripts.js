import posts from "./data";

const postContainer = document.querySelector();

for(let post in posts){

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";

    const profileImage = document.createElement("img");
    profileImage.className = "profile-img";
    profileImage.src = post.profileImage;
    postHeader.appendChild(profileImage);

    const username = document.createElement("h2");
    username.innerHTML = post.username;


}

