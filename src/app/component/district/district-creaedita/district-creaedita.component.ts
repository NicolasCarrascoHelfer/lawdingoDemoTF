import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { District } from 'src/app/model/district';
import { DistrictService } from 'src/app/service/district.service';

@Component({
  selector: 'app-district-creaedita',
  templateUrl: './district-creaedita.component.html',
  styleUrls: ['./district-creaedita.component.css']
})
export class DistrictCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  distrito: District = new District();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private dS: DistrictService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      
    });
    this.form = this.formBuilder.group({
      idDistrict: ['',],
      name: ['', Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.distrito.idDistrict = this.form.value.idDistrict;
      this.distrito.name = this.form.value.name;

      if (this.edicion) {
        this.dS.update(this.distrito).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.distrito).subscribe((data) => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/districts']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idDistrict: new FormControl(data.idDistrict),
          name: new FormControl(data.name),

        });
      });
    }
  }
}
