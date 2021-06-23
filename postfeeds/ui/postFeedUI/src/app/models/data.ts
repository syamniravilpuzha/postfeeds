export interface Data{
    response:Array<Post>;
}
export interface PostResponse{
    response:Post;
}
export interface CommentResponse{
    response:Array<Comment>;
}
export interface Post{
    id?:string;
    title?:string;
    createdDate?:string;
    content?:string;
    author?:string;
    comments?:Array<Comment>;
}
export interface Comment{
    commentId?:string;
    comment?:string;
    authorName?:string;
}
