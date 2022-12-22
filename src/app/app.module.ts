// for import(s)
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
// for declarations
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";

// decorator
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})

// class
export class AppModule { }