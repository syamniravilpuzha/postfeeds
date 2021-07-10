import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostfeedsComponent } from './components/postfeeds/postfeeds.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component'
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DaysCheckPipe } from './pipes/days-check.pipe';
import { ContactusComponent } from './components/contactus/contactus.component';
import appRoutes from './router-config';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
// ...
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    PostfeedsComponent,
    PostComponent,
    CommentsComponent,
    NavbarComponent,
    DaysCheckPipe,
    ContactusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['localhost:3000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
