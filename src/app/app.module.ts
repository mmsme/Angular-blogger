import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderComponent } from './loader/loader.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TimeLineComponent } from './time-line/time-line.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { PorfilePostComponent } from './porfile-post/porfile-post.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/AuthGuard.service';
import { UserCardComponent } from './user-card/user-card.component';
import { WritersComponent } from './writers/writers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostTagsComponent } from './post-tags/post-tags.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    PostComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SignUpComponent,
    ProfileComponent,
    LoaderComponent,
    ArticleComponent,
    CommentComponent,
    TimeLineComponent,
    CreateArticleComponent,
    PorfilePostComponent,
    EditArticleComponent,
    SearchComponent,
      UserCardComponent,
      WritersComponent,
      UserDetailsComponent,
      PostTagsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
  ],
  providers: [HttpClientModule, FormBuilder, AuthGuard],
  bootstrap: [AppComponent],
  exports: [PostComponent],
})
export class AppModule {}
