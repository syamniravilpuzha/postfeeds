import { Component, OnInit } from '@angular/core';
import { Data, Post } from 'src/app/models/data';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postfeeds',
  templateUrl: './postfeeds.component.html',
  styleUrls: ['./postfeeds.component.css']
})
export class PostfeedsComponent implements OnInit {

  posts: Array<Post> = [];
  isError: boolean;
  constructor(private post: PostService) {
    this.isError = false;
  }

  /**
   * Init lifecycle hook
   */
  ngOnInit(): void {
    this.getAllPosts();
  }

  /**
   * Get all posts
   */
  getAllPosts(): void {
    this.isError = false;
    this.post.getAllPosts().subscribe((data: Data) => {
      console.log(data);
      this.posts = data.response;
    }, (err) => {
      this.isError = true;
    });
  }


}
