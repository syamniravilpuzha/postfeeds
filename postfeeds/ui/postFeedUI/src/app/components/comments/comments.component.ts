import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/models/data';
import { PostService } from 'src/app/services/post.service';
import {Comment} from '../../models/data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId='';
  comments:Array<Comment>=[];
  constructor(private post:PostService) { }

  /**
   * Init component
   */
  ngOnInit(): void {
    this.getCommentsByPostId(this.postId);
  }
  /**
   * Get comments by post id
   * @param postId 
   */
  getCommentsByPostId(postId:string) : void{

    this.post.getCommentsByPostId(postId).subscribe((data:CommentResponse)=>{
      this.comments = data.response;
    })

  }

}
