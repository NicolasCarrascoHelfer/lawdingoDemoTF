import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Documentation } from 'src/app/model/documentation';
import { Proceeding } from 'src/app/model/proceeding';
import { DocumentationService } from 'src/app/service/documentation.service';
import { ProceedingService } from 'src/app/service/proceeding.service';

@Component({
  selector: 'app-creaedita-documentation',
  templateUrl: './creaedita-documentation.component.html',
  styleUrls: ['./creaedita-documentation.component.css']
})
export class CreaeditaDocumentationComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  documentation: Documentation = new Documentation();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaExpedientes: Proceeding[] = [];
  idExpedienteSeleccionado:number=0
  constructor(private dS:DocumentationService, private pS: ProceedingService, private router:Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      
    });
    this.form = this.formBuilder.group({
      idDocumentation: [''],
      name: ['', Validators.required],
      proceeding: ['', Validators.required],
    });
    this.pS.list().subscribe((data)=>{
      this.listaExpedientes=data;
    })
    
  }
  aceptar(): void{
    if(this.form.valid){
      this.documentation.idDocumentation=this.form.value.idDocumentation;
      this.documentation.name=this.form.value.name,
      this.documentation.proceeding.idProceeding=this.form.value.proceeding;
      if (this.edicion) {
        this.dS.update(this.documentation).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.documentation).subscribe((data) => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/documentations'])
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
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idDocumentation: new FormControl(data.idDocumentation),
          name: new FormControl(data.name),
          proceeding: new FormControl(data.proceeding)
        });
      });
    }
  }
}
