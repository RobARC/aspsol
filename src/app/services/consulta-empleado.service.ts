import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoEmpleado } from '../Models/infoEmpleado.model';
import { InfoPrestamoEmpleado } from '../Models/infoPrestamoEmp.model';
import { InfoPagoPrestamoEmp } from '../Models/InfoPagoPrestamoEmp.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEmpleadoService {

  triggerData = new EventEmitter<any>();
  triggerPagoDataPrestamo = new EventEmitter<any>();

  URL: string = 'https://m1recruitment.aspsols.com';
  constructor(private http: HttpClient,
              private router: Router) { }


   async getInfoEmpleado(id: string)  {
    return await this.http.get<InfoEmpleado[]>(`${this.URL}/api/info-empleado/?cedula=${id}`);
    }

    async getInfoPrestamosEmp(id: string){
      return await this.http.get<InfoPrestamoEmpleado[]>(`${this.URL}/api/prestamos?cedula=${id}`);
    }
}
