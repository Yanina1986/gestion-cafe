import { NgModule } from "@angular/core";
import { ProductoComponent } from "./Paginas/producto/producto.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClient} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormGroup } from "@angular/forms";



@NgModule ({
    imports: [
        BrowserModule, ReactiveFormsModule,FormsModule
    ],
    declarations:[AppComponent, ProductoComponent],
    exports: [CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],

    bootstrap: [AppComponent]
})


export class AppModule{}