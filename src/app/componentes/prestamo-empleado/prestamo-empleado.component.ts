import { Component } from '@angular/core';
import { ConsultaEmpleadoService } from '../../services/consulta-empleado.service';
import { InfoPrestamoEmpleado } from 'src/app/Models/infoPrestamoEmp.model';

@Component({
  selector: 'app-prestamo-empleado',
  templateUrl: './prestamo-empleado.component.html',
  styleUrls: ['./prestamo-empleado.component.css']
})
export class PrestamoEmpleadoComponent {

  cedula!: any;
  dataPrestamo!: any;

  fechaPrestamo: any;
  valorPrestamo: any;
  cuotasAcordadas: any;
  valorPagado: any;

  constructor(private consultaEmpleadoService: ConsultaEmpleadoService) {}

  ngOnInit(): void {
    this.consultaEmpleadoService.triggerData.subscribe(resp => {
      this.cedula = resp;
      this.getInfoPrestamoEmpleado(this.cedula);
    });
  }

    async getInfoPrestamoEmpleado(id: string){
      (await (await this.consultaEmpleadoService.getInfoPrestamosEmp(id)).subscribe(
        (resp: any) => {
        
        this.dataPrestamo = resp;

        this.fechaPrestamo = this.dataPrestamo.load[0].fechaInicio;
        this.valorPrestamo = this.dataPrestamo.load[0].valorPrestamo;
        this.cuotasAcordadas = this.dataPrestamo.load[0].cuotas;
        this.valorPagado = this.dataPrestamo.load[0].valorPagado;

        this.consultaEmpleadoService.triggerPagoDataPrestamo.emit(this.dataPrestamo)
        
      }));
    }
  
}
