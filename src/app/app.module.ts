import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; 
import { AppComponent } from "./app.component";
import { FormularioReactivoComponent } from "./components/formulario-reactivo/formulario-reactivo.component"; 
import { HttpClientModule } from "@angular/common/http";
import { ProductoComponent } from "./producto/producto.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    FormularioReactivoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
