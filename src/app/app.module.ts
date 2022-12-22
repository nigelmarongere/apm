// for import(s)
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// for declarations
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";

// decorator
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  bootstrap: [ AppComponent ]
})

// class
export class AppModule { }