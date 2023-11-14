import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/model/users';
import { Notification } from 'src/app/model/notification';
import { NotificationService } from 'src/app/service/notification.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-notification-creaedita',
  templateUrl: './notification-creaedita.component.html',
  styleUrls: ['./notification-creaedita.component.css']
})
export class NotificationCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  notificacion: Notification = new Notification();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  listaSenders: Users[] = [];
  idSendersSeleccionado:number = 0

  listaRecivers: Users[] = [];
  idReciversSeleccionado:number = 0

  constructor(
    private nS: NotificationService,
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
      idNotification: ['',],
      sender: ['', Validators.required],
      receiver: ['', Validators.required],
      message: ['', Validators.required],
    });
    ///USERS
    this.uS.list().subscribe((data) => {
      this.listaRecivers = data.filter(User=>User.lawyer==false);
      this.listaSenders = data.filter(User=>User.lawyer);
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.notificacion.idNotification = this.form.value.idNotification;
      this.notificacion.sender.idUser = this.form.value.sender;
      this.notificacion.receiver.idUser = this.form.value.receiver;
      this.notificacion.message = this.form.value.message;

      if (this.edicion) {
        this.nS.update(this.notificacion).subscribe(() => {
          this.nS.list().subscribe((data) => {
            this.nS.setList(data);
          });
        });
      } else {
        this.nS.insert(this.notificacion).subscribe((data) => {
          this.nS.list().subscribe((data) => {
            this.nS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/notification']);
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
      this.nS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idNotification: new FormControl(data.idNotification),
          sender: new FormControl(data.sender.idUser),
          receiver: new FormControl(data.receiver.idUser),
          message: new FormControl(data.message),
        });
      });
    }
  }

}
