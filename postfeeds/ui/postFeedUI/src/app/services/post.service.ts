import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentResponse, Data, PostResponse } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "http://localhost:3000";

  /**
   * constructor
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all posts
   * @returns Observable
   */
  getAllPosts(): Observable<Data> {
    return this.http.get<Data>(this.baseUrl + "/posts");
  }

  /**
   * Get post by id
   * @param id 
   * @returns Observable
   */
  getPostById(id: string): Observable<PostResponse> {
    return this.http.get<PostResponse>(this.baseUrl + "/posts/" + id);
  }

  /**
   * Get comments by  post id
   * @param postId 
   * @returns Observable
   */
  getCommentsByPostId(postId: string): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(this.baseUrl + "/posts/" + postId + "/comments");
  }
}
