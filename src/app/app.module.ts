import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutThisComponent } from './pages/about-this/about-this.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerInterceptor } from './interceptor/loading-spinner.interceptor';
import { SizeDirective } from './directives/animations/size.directive';
import { ColorDirective } from './directives/animations/color.directive';
import { RotationDirective } from './directives/animations/rotation.directive';
import { TranslationDirective } from './directives/animations/translation.directive';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SocialMediaComponent,
    AboutThisComponent,
    AboutMeComponent,
    ProjectsComponent,
    NotFoundComponent,
    SizeDirective,
    ColorDirective,
    RotationDirective,
    TranslationDirective,
    FooterComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingSpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
