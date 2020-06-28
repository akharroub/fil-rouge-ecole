
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { EleveModule } from './modules/eleve/eleve.module';
import { ContactComponent } from './modules/contact/contact.component';
import { TuteurModule } from './modules/tuteur/tuteur.module';
import { UserModule } from './modules/user/user.module';
import { ClassesModule } from './modules/classes/classes.module';
import { MatiereModule } from './modules/matiere/matiere.module';
import { CoursModule } from './modules/cours/cours.module';
import { JwtModule } from '@auth0/angular-jwt';
import { EmployeModule } from './modules/employe/employe.module';
import { FooterComponent } from './shared/acceuil/footer/footer.component';
import { CentreModule } from './modules/centre/centre.module';
import { AcceuilModule } from './shared/acceuil/acceuil.module';
import { MetierModule } from './modules/metier/metier.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EleveModule,
    TuteurModule,
    UserModule,
    FormsModule,
    EmployeModule,
    ClassesModule,
    MatiereModule,
    CoursModule,
    CentreModule,
    AcceuilModule,
    MetierModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['g-ecole.fr:8080',
      ],
        blacklistedRoutes: ['http://g-ecole.fr:8080/auth']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

