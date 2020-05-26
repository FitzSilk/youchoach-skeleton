import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {AuthenticationInterceptor} from './authentication/authentication.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoachApplyComponent } from './coach-apply/coach-apply.component';
import { MyprofileViewComponent } from './myprofile-view/myprofile-view.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { CoachesOverviewComponent } from './coaches-overview/coaches-overview.component';
import { CoachProfileViewComponent } from './coach-profile-view/coach-profile-view.component';
import { CoachTopicUpdateComponent } from './coach-topic-update/coach-topic-update.component';
import { CoachProfileUpdateComponent } from './coach-profile-update/coach-profile-update.component';
import {MatSelectModule} from "@angular/material/select";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloWorldComponent,
    HomeComponent,
    RegistrationComponent,
    MyprofileComponent,
    CoachApplyComponent,
    MyprofileViewComponent,
    EditprofileComponent,
    NavigationBarComponent,
    FooterComponent,
    NotFoundComponent,
    CoachProfileComponent,
    CoachesOverviewComponent,
    CoachProfileComponent,
    CoachProfileViewComponent,
    CoachTopicUpdateComponent,
    CoachProfileUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
