import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {CoachApplyComponent} from './coach-apply/coach-apply.component';
import {CoachProfileComponent} from './coach-profile/coach-profile.component';
import {CoachesOverviewComponent} from './coaches-overview/coaches-overview.component';
import {CoachProfileUpdateComponent} from './coach-profile-update/coach-profile-update.component';
import {CreateSessionComponent} from './create-session/create-session.component';
import {CoachProfilePublicViewComponent} from './coach-profile-public-view/coach-profile-public-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'coaches', component: CoachesOverviewComponent},
  {path: 'user/editprofile', component: EditprofileComponent},
  {path: 'coach/editcoachprofile', component: CoachProfileUpdateComponent},
  {path: 'user/myprofile/:id', component: MyprofileComponent},
  {path: 'user/:id', component: MyprofileComponent},
  {path: 'want_to_be_coach', component: CoachApplyComponent},
  {path: 'coach-detail/:id', component: CoachProfilePublicViewComponent},
  {path: 'coach/:id', component: CoachProfileComponent},
  {path: 'session/create/:id', component: CreateSessionComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
