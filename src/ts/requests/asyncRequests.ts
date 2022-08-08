import {postI} from "../models/models.js"

export async function getAllPostsFromBacked(){
    const response:Response = await fetch('http://localhost:8080/api/posts/get/all/posts')
    const posts:postI[] = await response.json()

    return posts
}