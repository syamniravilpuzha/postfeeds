import { Routes } from "@angular/router";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { LoginComponent } from "./components/login/login.component";
import { PostComponent } from "./components/post/post.component";
import { PostfeedsComponent } from "./components/postfeeds/postfeeds.component";
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
    {
        path:'',redirectTo: 'login', pathMatch: 'full' 
    },
    { path: 'posts', component: PostfeedsComponent, canActivate: [AuthGuard] },
    {
      path: 'post-details/:id',
      component: PostComponent,
      canActivate: [AuthGuard] 
    },
    {
      path: 'contact-us',
      component: ContactusComponent,
      canActivate: [AuthGuard] 
    },
    { path: 'login', component: LoginComponent}
  ];
  export default appRoutes;