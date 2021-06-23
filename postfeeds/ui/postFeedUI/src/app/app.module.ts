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

@NgModule({
  declarations: [
    AppComponent,
    PostfeedsComponent,
    PostComponent,
    CommentsComponent,
    NavbarComponent,
    DaysCheckPipe,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
