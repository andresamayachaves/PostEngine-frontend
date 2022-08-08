import { commentI } from "./models/models.js"
import { getAllPostsFromBacked } from "./requests/asyncRequests.js" 

console.log("Ts created")

let posts:postI[];

getAllPostsFromBacked().then(response =>{
    posts = response;
    console.log(posts);
}
    
)