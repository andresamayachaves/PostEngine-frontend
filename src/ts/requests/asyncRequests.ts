import {postI, commentI} from "../models/models.js"
export async function addNewPostToBacked(){
/*     const response:Response = await fetch('http://localhost:8080/api/post/create/post')
    const posts:postI[] = await response.json()

    return posts
 */
}

export async function getAllPostsFromBacked(){
    const response:Response = await fetch('http://localhost:8080/api/post/get/all/posts')
    const posts:postI[] = await response.json()

    return posts
}

export async function editPostToBacked(){
/*     const response:Response = await fetch('http://localhost:8080/api/post/get/all/posts')
    const posts:postI[] = await response.json()

    return posts
 */
} 

export async function deletePostToBacked(){
    const response:Response = await fetch('http://localhost:8080/api/post/get/all/posts')
    const posts:postI[] = await response.json()

    return posts
}



//--- Comments

export async function addNewCommentToBacked(){
/*     const response:Response = await fetch('http://localhost:8080/api/comment/create/comment')
    const posts:postI[] = await response.json()

    return posts
 */
}
export async function getAllCommentsFromBacked(){
    const response:Response = await fetch('http://localhost:8080/api/comment/get/all/comments')
    const comments:commentI[] = await response.json()

    return comments
}

/* export async function editCommentToBacked(){
    const response:Response = await fetch('http://localhost:8080/api/comment/update/comment')
    const comments:postI[] = await response.json()

    return comments
*/
}

export async function deleteCommentToBacked(){
    /* const response:Response = await fetch('http://localhost:8080/api/comment/delete/comment')
    const posts:postI[] = await response.json()

    return posts */
}