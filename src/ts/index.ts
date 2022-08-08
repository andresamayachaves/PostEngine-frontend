import { getAllPostsFromBacked } from "./requests/asyncRequests.js" 
import { commentI, postI } from "./models/models.js"

console.log("Ts created")

const form: HTMLFormElement |null = 
document.querySelector('.comments-form');

getAllPostsFromBacked().then(response =>{
    posts = response;
    console.log(posts);
    recreatePosts(response);
})


let posts:postI[] = [];
let comments:postI[] = [];


form?.addEventListener('submit', (e) => handleSubmit(e))

function handleSubmit(e:SubmitEvent){
    e.preventDefault()
    const titleInput = document.querySelector('.title-input') as HTMLInputElement;
    const contentInput = document.querySelector('.content-input') as HTMLInputElement;

    if(titleInput.value&&contentInput.value){
    
      const newPost:postI = {
        id: null,
        title: titleInput.value,
        content: contentInput.value,
        numberOfLikes: 0,
        comments
      }
  
      addNewPostToBacked(newPost).then(
        response => {
          if(response.status === 200){
            posts.push(newPost)
  
            createComment(newPost);  
            titleInput.value = '';
            contentInput.value = '';
          }
        }
      )
      
    }
  }

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
    <p class="comment_numeberOfLikes_${comment.id}"> ${comment.numberOfLikes}</p>    `

    singleCommentContainer.innerHTML = singleCommentContent;
    postContainer.append(singleCommentContainer)
}

function CreatePostButton(){
    
}



function recreatePosts(posts:postI[]){
    posts.forEach(post => createReminder(post))
  }
  