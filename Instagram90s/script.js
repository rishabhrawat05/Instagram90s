const messageButton = document.getElementsByClassName("user");
const users = document.getElementsByClassName("user-name");
const messageBox = document.getElementById("message-me");
const closeButton = document.getElementById("close-button");
const userName = document.getElementsByClassName("user-name");
const messageBoxName = document.getElementById("message-me-user");
const messageBoxImage = document.getElementById("message-me-image");
const userNameImage = document.getElementsByClassName("user-image");
const closeButtonComment = document.getElementById("close-button-comment");
const commentBox = document.getElementById("comment-box");
const commentButton = document.getElementsByClassName("comment");
const likeButton = document.getElementsByClassName("like");
const likeCount = document.getElementsByClassName("like-count");
const menuBox = document.getElementById("menu-box");
const menuCloseButton = document.getElementById("close-button-menu");
const menuButton = document.getElementsByClassName("menu-icon");
const userPosts = document.getElementById("user-posts");
const userStoryButton = document.getElementsByClassName("user-story");
const storyBox = document.getElementById("story-box");
const closeButtonStory = document.getElementById("close-button-story");
const userStoryUser = document.getElementsByClassName("user-story-user");
const storyBoxUser = document.getElementById("story-box-user");
const storyBoxImage = document.getElementById("story-box-image");
const storyImage = document.getElementsByClassName("story-image");
const messageMeBodyImage = document.getElementById("message-me-body-image");
const commentInput = document.getElementById("comment-box-input");
const commentList = document.getElementById("comment-list");
const sendComment = document.getElementById("send-comment");
const messageInput = document.getElementById("message-input");
const messageList = document.getElementById("message-list");
const sendMessage = document.getElementById("send-message");
const storyBoxPostImage = document.getElementById("story-box-post-image");
const postImage90 = document.getElementsByClassName("post-image-90");
function closeAllBoxes() {
    messageBox.style.display = 'none';
    commentBox.style.display = 'none';
    menuBox.style.display = 'none';
    storyBox.style.display = 'none';
}
for (let i = 0; i < messageButton.length; i++) {
        messageButton[i].addEventListener('click', () => {
            closeAllBoxes();
            messageBox.style.display = 'block';
            messageBoxName.innerText = userName[i].innerText;
            messageBoxImage.src = userNameImage[i].src;
            messageMeBodyImage.src = userNameImage[i].src;
            
        });
}
closeButton.addEventListener('click', () =>{
    messageBox.style.display = 'none';
    
});

for(let i = 0; i < commentButton.length; i++) {
        commentButton[i].addEventListener('click', () =>{
            closeAllBoxes();
            commentBox.style.display = 'block';
            
        });
    
}
closeButtonComment.addEventListener('click', () =>{
    commentBox.style.display = 'none';
    
});

for(let i = 0; i < likeButton.length; i++) {
    let liked = false;
    likeButton[i].addEventListener('click', () =>{
        if(liked){
            likeCount[i].innerText = parseInt(likeCount[i].innerText) - 1;
            likeButton[i].style.scale = '1',
            likeButton[i].style.backgroundColor = 'white'
            liked = false;
        }
        else{
            likeCount[i].innerText = parseInt(likeCount[i].innerText) + 1;
            likeButton[i].style.scale = '0.9',
            likeButton[i].style.backgroundColor = '#fd1d1d'
            liked = true;
        }
        
        
    });
}

for(let i = 0; i < menuButton.length; i++){
    menuButton[i].addEventListener('click', () => {
       closeAllBoxes();
       menuBox.style.display = 'block';
       userPosts.style.overflowY = 'hidden';
        
    });
}

menuCloseButton.addEventListener('click', () => {
    menuBox.style.display = 'none';
    userPosts.style.overflowY = 'auto';
});

for(let i = 0; i < userStoryButton.length; i++){
    userStoryButton[i].addEventListener('click', () => {
        closeAllBoxes();
        storyBox.style.display = 'block';
        storyBoxUser.innerText = userStoryUser[i].innerText;
        storyBoxImage.src = storyImage[i].src;
        storyBoxPostImage.src = postImage90[i].src;
        
});
}

closeButtonStory.addEventListener('click', () => {
    storyBox.style.display = 'none';
});

sendMessage.addEventListener('click', () => {
    const messageInputValue = messageInput.value;
    if (messageInputValue.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.innerText = messageInputValue;
        messageList.appendChild(listItem);
        messageInput.value = "";
    }
});
sendComment.addEventListener('click', () => {
    const commentInputValue = commentInput.value;
    if (commentInputValue.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.innerText = commentInputValue;
        commentList.appendChild(listItem);
        commentInput.value = "";
    }
});

