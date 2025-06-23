import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; 
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { ProductoComponent } from "./producto/producto.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListaProductoComponent} from "./lista-producto/lista-producto.component";
import { FiltroProductoPipe } from "./pipes/filtro-producto.pipe";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    
    
    ListaProductoComponent,
    FiltroProductoPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    CommonModule, 

  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
