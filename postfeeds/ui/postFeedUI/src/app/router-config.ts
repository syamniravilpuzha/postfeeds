import { Routes } from "@angular/router";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { PostComponent } from "./components/post/post.component";
import { PostfeedsComponent } from "./components/postfeeds/postfeeds.component";

const appRoutes: Routes = [
    {
        path:'',redirectTo: 'posts', pathMatch: 'full' 
    },
    { path: 'posts', 
      component: PostfeedsComponent 
    },
    {
      path: 'post-details/:id',
      component: PostComponent
    },
    {
      path: 'contact-us',
      component: ContactusComponent
    }
  ];
  export default appRoutes;