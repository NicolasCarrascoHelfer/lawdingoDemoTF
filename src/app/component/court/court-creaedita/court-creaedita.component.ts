import { CourtService } from 'src/app/service/court.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Court } from 'src/app/model/court';
import { District } from 'src/app/model/district';
import { DistrictService } from 'src/app/service/district.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-court-creaedita',
  templateUrl: './court-creaedita.component.html',
  styleUrls: ['./court-creaedita.component.css']
})
export class CourtCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  court: Court = new Court();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaDistritos: District[] = [];
  idDistritoSeleccionado:number=0
  constructor(private cS:CourtService, private dS: DistrictService, private router:Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      
    });
    this.form = this.formBuilder.group({
      idCourt: ['',],
      name: ['', Validators.required],
      district: ['', Validators.required],
    });
    this.dS.list().subscribe((data)=>{
      this.listaDistritos=data;
    })
    
  }
  aceptar(): void{
    if(this.form.valid){
      this.court.idCourt=this.form.value.idCourt;
      this.court.name=this.form.value.name;
      this.court.district.idDistrict=this.form.value.district;
      if (this.edicion) {
        this.cS.update(this.court).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.court).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/courts'])
    }else{
      this.mensaje='Ingrese todos los campos'
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCourt: new FormControl(data.idCourt),
          name: new FormControl(data.name),
          district: new FormControl(data.district)
        });
      });
    }
  }

}
