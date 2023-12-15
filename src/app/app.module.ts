import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { InfoEmpleadoComponent } from './componentes/info-empleado/info-empleado.component';
import { PrestamoEmpleadoComponent } from './componentes/prestamo-empleado/prestamo-empleado.component';
import { PagosPrestamosComponent } from './componentes/pagos-prestamos/pagos-prestamos.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InfoEmpleadoComponent,
    PrestamoEmpleadoComponent,
    PagosPrestamosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
