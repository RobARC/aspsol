import { Component } from '@angular/core';
import { ConsultaEmpleadoService } from 'src/app/services/consulta-empleado.service';

@Component({
  selector: 'app-pagos-prestamos',
  templateUrl: './pagos-prestamos.component.html',
  styleUrls: ['./pagos-prestamos.component.css']
})
export class PagosPrestamosComponent {

  data!: any;
  dataPagoPrestamo!: any;
  fechaPago: any;
  valorPagado: any;

  constructor(private consultaEmpleadoService: ConsultaEmpleadoService) {}

  ngOnInit(): void {
    this.consultaEmpleadoService.triggerPagoDataPrestamo.subscribe(resp => {
      this.data = resp;
      this.fechaPago = this.data.load[0].pagos
    });
  }
}
