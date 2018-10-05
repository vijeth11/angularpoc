import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import { ProductlistService } from './productlist.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { RouterModule,Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductguardGuard } from './productdetail/productguard.guard';
import { AuthguardGuard } from './welcome/authguard.guard';
const routes:Route[]=[
  {path:'welcome',component:WelcomeComponent},
  {path:'product',component:ProductsComponent,canActivate:[AuthguardGuard]},
  {path:'products/:id',component:ProductdetailComponent,canActivate:[ProductguardGuard,AuthguardGuard]},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',redirectTo:'welcome',pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductdetailComponent,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
