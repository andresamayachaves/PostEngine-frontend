interface postInterface{
    id:number,
    title:string,
    content:string,
    numberOfLikes: number,
    comments: commentI[]
    userLikes: userLikesI[]
}

export interface commentI{
    id:number,
    content: string,
    numberOfLikes: number,
    userLikes: userLikesI[]
}

interface userLikesI{
    id:number,
    userNmae:string,
    dni:string
}