import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultaEmpleadoService } from 'src/app/services/consulta-empleado.service';
import { InfoEmpleado } from '../../Models/infoEmpleado.model';

@Component({
  selector: 'app-info-empleado',
  templateUrl: './info-empleado.component.html',
  styleUrls: ['./info-empleado.component.css']
})
export class InfoEmpleadoComponent {

  infoEmpleadoForm: any
  cedula!: string
  infoEmpleado: InfoEmpleado = new InfoEmpleado();
  @Input() dataEmpleado: any;

  constructor(private fb: FormBuilder,
    private consultaEmpleadoService: ConsultaEmpleadoService) {
    this.infoEmpleadoForm = fb.group({
      cedula: "",
      nombreEmpleado: "",
      fechaNacimiento: "",
      salario: "",
      nit: "",
      nombreEmpresa: "",
      direccion: "",
      fechaIngreso: ""
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.infoEmpleado.cedula = this.infoEmpleadoForm.value.cedula
    const data: any = this.infoEmpleado
    this.cedula = data.cedula;
    
    (await this.consultaEmpleadoService.getInfoEmpleado(this.cedula)).subscribe(
      (resp: any) => {
        this.getDataForm(resp);
      });
  }
  getDataForm(data: any) {
    this.infoEmpleadoForm.patchValue({
      cedula: data.load.cedula,
      nombreEmpleado: data.load.nombre,
      fechaNacimiento: data.load.fechaNacimiento,
      salario: data.load.salario,
      nit: data.load.empresa.nit,
      nombreEmpresa: data.load.empresa.nombre,
      direccion: data.load.empresa.direccion,
      fechaIngreso: data.load.fechaIngreso,
      
    });

    this.consultaEmpleadoService.triggerData.emit(this.cedula);
  }
}
