import { getAllPostsFromBacked, addNewPostToBacked, 
    editPostToBacked, deletePostToBacked,
    addNewCommentToBacked,  getAllCommentsFromBacked,
    editCommentToBacked, deleteCommentToBacked
  } from "./requests/asyncRequests.js" 
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


function recreatePosts(posts:postI[]){
    posts.forEach(post => createComment(post))
}





function createComment(post: postI) {  const postsContainer = document.querySelector('.posts-container') as HTMLDivElement

const div:HTMLDivElement = document.createElement('div');
div.className = 'single-post-container'
div.classList.add(`post-${post.id}`)

const h2:HTMLHeadElement = document.createElement('h2');
h2.className = `single-post-title-${post.id}`
h2.innerText = post.title

const commentP:HTMLParagraphElement = document.createElement('p')
commentP.className = `single-post-comment-${post.id}`
commentP.innerText = post.content


const deleteButton:HTMLButtonElement = document.createElement('button')
deleteButton.className = 'single-post-delete-button'
deleteButton.innerText = 'X'
deleteButton.addEventListener('click', ()=> handleDelete(div))

const editButton:HTMLButtonElement = document.createElement('button')
editButton.className = 'single-post-edit-button'
editButton.innerText = 'edit'
editButton.addEventListener('click', ()=> hanldeEdit(post))

div.append(h2, commentP, deleteButton, editButton)
postsContainer.append(div)
        
}

function hanldeEdit(comment:commentI){
    const titleInput = document.querySelector('.title-input') as HTMLInputElement;
    const reminderInput = document.querySelector('.reminder-input') as HTMLInputElement;
    const submitButton = document.querySelector('.reminders-form-button') as HTMLButtonElement
    submitButton.classList.add('display_none')
  
    const editButton:HTMLButtonElement = document.createElement('button')
    editButton.className = 'form-edit-button'
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => executeEdition(comment, titleInput, reminderInput))
  
    const formContainer = document.querySelector('.form-container');
    formContainer?.append(editButton)
    
    reminderInput.value = comment.content;
}

function executeEdition(comment:commentI, content:string, numberOfLikes:number){  
    const commentEdited:commentI = {
      id:comment.id,
      content:content,
      numberOfLikes: numberOfLikes
    }
  
}