import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { ProductoComponent } from "./producto/producto.component";
import { ListaProductoComponent } from "./lista-producto/lista-producto.component";
//import { FiltroProductoPipe } from "./pipes/filtro-producto.pipe";

// Firebase
//import { environment } from "../environments/environment";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListaProductoComponent,
    FiltroProductoPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    CommonModule,
    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
