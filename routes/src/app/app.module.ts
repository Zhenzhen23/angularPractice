import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes as childRoutes, ProductsModule } from './products/product.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { AUTH_PROVIDERS } from './auth.service';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './logged-in.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },

  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] },
  
  { path: 'products', component: ProductsComponent, children: childRoutes }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
