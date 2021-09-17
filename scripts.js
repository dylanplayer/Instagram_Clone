import posts from './data.js';


const postContainer = document.querySelector("#posts");


for(let i = 0; i < posts.length; i++){
    
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";

    const headerLeft = document.createElement("div");
    headerLeft.className = "post-header";

    const profileImage = document.createElement("img");
    profileImage.className = "profile-img";
    profileImage.src = posts[i].profileImage;
    headerLeft.appendChild(profileImage);

    const username = document.createElement("h2");
    username.className = "username";
    username.innerHTML = posts[i].username;
    headerLeft.appendChild(username);
    
    const moreButton = document.createElement("img");
    moreButton.className = "more-button";
    moreButton.src = "assets/more.png";
    
    postHeader.appendChild(headerLeft);
    postHeader.appendChild(moreButton);
    postDiv.appendChild(postHeader);

    const interactionBar = document.createElement("div");
    interactionBar.className = "interaction-bar";

    const interactionBarLeft = document.createElement("div");
    interactionBarLeft.className = "interaction-bar-left";
    
    const likeButton = document.createElement("img")
    likeButton.src = "assets/heart.png";
    interactionBarLeft.appendChild(likeButton);

    const chatButton = document.createElement("img")
    chatButton.src = "assets/messenger.png";
    interactionBarLeft.appendChild(chatButton);

    const sendButton = document.createElement("img")
    sendButton.src = "assets/send.png";
    interactionBarLeft.appendChild(sendButton);

    const bookmarkButton = document.createElement("img")
    bookmarkButton.src = "assets/bookmark.png";

    interactionBar.appendChild(interactionBarLeft);
    interactionBar.appendChild(bookmarkButton);

    const comments = document.createElement("div");
    comments.className = "comments";

    const comment = document.createElement("div");
    comment.className = "comment";
    
    const usernameSmall = document.createElement("h2");
    usernameSmall.className = "username";
    usernameSmall.innerHTML = posts[i].username;
    comment.appendChild(usernameSmall);

    const commentContent = document.createElement("h2");
    commentContent.className = "comment-content";
    commentContent.innerHTML = posts[i].description;
    comment.appendChild(commentContent);

    const commentBar = document.createElement("div");
    commentBar.className = "comment-bar";

    const commentBarLeft = document.createElement("div");
    commentBarLeft.className = "comment-bar-left";

    const emojiInput = document.createElement("img");
    emojiInput.className = "emoji-input";
    emojiInput.src = "assets/smile.png"
    commentBarLeft.appendChild(emojiInput);
    
    const newCommentInput = document.createElement("input");
    newCommentInput.type = "text";
    newCommentInput.className = "new-comment-input";
    newCommentInput.placeholder = "Add a comment..."
    commentBarLeft.appendChild(newCommentInput);

    commentBar.appendChild(commentBarLeft);

    const postCommentButton = document.createElement("button");
    postCommentButton.innerHTML = "Post";
    postCommentButton.className = "post-comment-button";
    commentBar.appendChild(postCommentButton);
    
    const postImage = document.createElement("img");
    postImage.className = "post-image";
    postImage.src = posts[i].image;

    postDiv.appendChild(postImage);
    postDiv.appendChild(interactionBar);
    postDiv.appendChild(comments);
    comments.appendChild(comment);
    postDiv.appendChild(commentBar);

    postContainer.appendChild(postDiv);

}

