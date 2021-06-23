import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostResponse } from 'src/app/models/data';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postDetails: Post = {};
  postId = "";
  commentsFlag = false;
  constructor(private route: ActivatedRoute,private post: PostService) { }

  /**
   * init lifecycle hook
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postId = id;
      this.getPostById(id);
    }
    this.commentsFlag = false;
  }

  /**
   * Get post by id
   * @param id 
   */
  getPostById(id: string): void {
    this.post.getPostById(id).subscribe((data: PostResponse) => {
      this.postDetails = data.response;
    })
  }

  /**
   * Load comments
   */
  loadComments(): void {
    if (this.commentsFlag) {
      this.commentsFlag = false;
    } else {
      this.commentsFlag = true;
    }

  }

}
