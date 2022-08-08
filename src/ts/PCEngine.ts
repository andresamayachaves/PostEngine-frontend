//import { commentI } from "./models/models.js"
import { commentI, postI } from "./models/models.js"
import { getAllPostsFromBacked } from "./requests/asyncRequests.js" 

console.log("Ts created")

let posts:postI[];

/*getAllPostsFromBacked().then(response =>{
    posts = response;
    console.log(posts);
})*/

function materializePosts(posts: Array<postI>){
    const divRoot = document.querySelector('#root') as HTMLDivElement
    console.log(divRoot)
    divRoot.innerText = 'DivRoot element working'
    posts.forEach(post => renderPost(post, divRoot))
}

function renderPost(post:postI, divRoot:HTMLDivElement){    
    "container-post-${post.id}"
    const singlePostContainer =  document.createElement('div')
    singlePostContainer.className = 'single-post-container${post.id}'
    singlePostContainer.classList.add('single_post_container')

    const singlePostContent = `
    <h2 class="single-post-name-${post.id}">${post.content} </h2>
    <p clas="Comment-${post.id}"> ${post.comments} </p>
    `
    singlePostContainer.innerHTML = singlePostContent  
    materializeComments(post.comments, singlePostContainer)
    divRoot.append(singlePostContainer)
}

function materializeComments(comments:commentI[], 
    postContainer:HTMLDivElement){
comments.forEach(comment => renderComment(comment, postContainer))
}

function renderComment(comment:commentI, 
postContainer:HTMLElement){
    const singleCommentContainer:HTMLDivElement = document.createElement('div')
    singleCommentContainer.className = `single_comment_container_${comment.id}`
    singleCommentContainer.classList.add('single_comment_container')

    const singleCommentContent:string = `
    <h3 class="comment_content_${comment.id}"> ${comment.content}</h3>
    <p class="comment_numeberOfLikes_${comment.id}"> ${comment.numberOfLikes}</p>
    <p class="comment_userLikes_${comment.id}"> ${comment.userLikes}</p>
    `

    singleCommentContainer.innerHTML = singleCommentContent;
    postContainer.append(singleCommentContainer)
}