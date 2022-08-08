import {commentI} from "../models/models"

export async function getAllPostsFromBacked(){
    const response:Response = await fetch('http://localhost:8080/api/posts/get/all/posts')

    const comments:commentI[] = await response.json()
}