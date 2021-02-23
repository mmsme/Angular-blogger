import { UserDetailsComponent } from './user-details/user-details.component';
import { PostTagsComponent } from './post-tags/post-tags.component';
import { WritersComponent } from './writers/writers.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/AuthGuard.service';
import { CreateArticleComponent } from './create-article/create-article.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ArticleComponent } from './article/article.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: TimeLineComponent, outlet: 'route1' },
      {
        path: 'article/:id',
        component: ArticleComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        component: CreateArticleComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: EditArticleComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'search',
        component: SearchComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'writers',
        component: WritersComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'tags/:tag',
        component: PostTagsComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'editProfile/:id',
        component: EditProfileComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
      {
        path: 'details/:id',
        component: UserDetailsComponent,
        outlet: 'route1',
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
