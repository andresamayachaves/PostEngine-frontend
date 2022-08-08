console.log("Ts created");
let posts;
/*getAllPostsFromBacked().then(response =>{
    posts = response;
    console.log(posts);
})*/
function materializePosts(posts) {
    const divRoot = document.querySelector('#root');
    console.log(divRoot);
    divRoot.innerText = 'DivRoot element working';
    posts.forEach(post => renderPost(post, divRoot));
}
function renderPost(post, divRoot) {
    const singlePostContainer = document.createElement('div');
    singlePostContainer.className = 'container-post-${post.id}';
    singlePostContainer.classList.add('single_post_container');
    const singlePostContent = `
    <h2 class="single-post-name-${post.id}">${post.content}> </h2>
    <p clas="Comment-${post.id}"> ${post.comments} </p>
    `;
    singlePostContainer.innerHTML = singlePostContent;
}
