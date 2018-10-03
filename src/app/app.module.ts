import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
