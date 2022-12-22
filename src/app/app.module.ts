// for import(s)
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
// for declarations
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";

// decorator
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  bootstrap: [ AppComponent ]
})

// class
export class AppModule { }