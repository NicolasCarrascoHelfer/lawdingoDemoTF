import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  Role } from 'src/app/model/role';
import { RoleService } from 'src/app/service/role.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-role-creaedita',
  templateUrl: './role-creaedita.component.html',
  styleUrls: ['./role-creaedita.component.css']
})
export class RoleCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  r: Role = new Role();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  trol: { value: string; viewValue: string }[] = [
    { value: 'ADMIN', viewValue: 'ADMIN' },
    { value: 'CLIENTE', viewValue: 'CLIENTE' },
    { value: 'ABOGADO', viewValue: 'ABOGADO' },
  ];

  listaUsuarios: Users[] = [];
  idUsuarioSeleccionado:number=0


  constructor(
    private rS: RoleService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private uS: UsersService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      id: ['',],
      rol: ['', Validators.required],
      user: ['', Validators.required],


    });
    ///USERS
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data
      this.listaUsuarios = data
    });
   
  }
  aceptar(): void {
    if (this.form.valid) {
      this.r.id = this.form.value.id;
      this.r.rol = this.form.value.rol;
      this.r.user.idUser = this.form.value.user;


      if (this.edicion) {
        this.rS.update(this.r).subscribe(() => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.r).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
      this.router.navigate(['roles']);
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
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          rol: new FormControl(data.rol),
          user: new FormControl(data.user.idUser),

        });
      });
    }
  }
}
