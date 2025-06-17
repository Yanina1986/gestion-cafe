import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms"; 
import { ProductoComponent } from "./producto/producto.component";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
