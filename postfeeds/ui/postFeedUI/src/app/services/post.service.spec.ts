import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpMock:HttpTestingController;
  const BASE_URL="http://localhost:3000";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all posts', () => {

    const response = {"response":[{"id":"101","title":"Angular","author":"User","createdDate":"24/01/2021"},{"id":"102","title":"Node JS","author":"Syam","createdDate":"25/03/2021"}]};

    service.getAllPosts().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(BASE_URL+"/posts");
    expect(req.request.method).toEqual("GET");
    req.flush(response);

    httpMock.verify();
  });
  it('should get post by id', () => {

    let id="101";

    const response = {"response":{"id":"101","title":"Angular","content":"Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.","author":"User","createdDate":"24/01/2021","comments":[{"commentId":"C1","authorName":"Commentator1","comment":"Hurray!!! Angular does the job for me."},{"commentId":"C2","authorName":"Commentator2","comment":"Angular is an amazing gift from Google"}]}};

    service.getPostById(id).subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(BASE_URL+"/posts/"+id);
    expect(req.request.method).toEqual("GET");
    req.flush(response);

    httpMock.verify();
  });
  it('should get comments by post-id', () => {

    let postId="101";

    const response = {"response":[{"commentId":"C1","authorName":"Commentator1","comment":"Hurray!!! Angular does the job for me."},{"commentId":"C2","authorName":"Commentator2","comment":"Angular is an amazing gift from Google"}]};

    service.getCommentsByPostId(postId).subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(BASE_URL+"/posts/"+postId+"/comments");
    expect(req.request.method).toEqual("GET");
    req.flush(response);

    httpMock.verify();
  });
});
