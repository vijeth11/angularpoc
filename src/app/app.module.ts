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
import { WelcomeComponent } from './welcome/welcome.component';

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
    HttpClientModule
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
