import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

//modulos
import{ReactiveFormsModule}from '@angular/forms';
import { FormsModule } from "@angular/forms";

//componentes

import { ListaProductoComponent } from "./lista-producto/lista-producto.component";
import { ProductoDetalleComponent } from "./producto-detalle/producto-detalle.component";
import { HomeComponent } from "./home/home.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
@NgModule({
    declarations:[
        AppComponent,
        ListaProductoComponent,
        ProductoDetalleComponent,
        MenuComponent,
        HomeComponent,
    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatIconModule

    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
