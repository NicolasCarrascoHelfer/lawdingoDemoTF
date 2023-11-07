import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { CommentService } from 'src/app/service/comment.service';
import { UsersService } from 'src/app/service/users.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment-creaedita',
  templateUrl: './comment-creaedita.component.html',
  styleUrls: ['./comment-creaedita.component.css']
})
export class CommentCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  comentario: Comment = new Comment();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  puntos: { value: number; viewValue: string }[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
    { value: 7, viewValue: '7' },
    { value: 8, viewValue: '8' },
    { value: 9, viewValue: '9' },
    { value: 10, viewValue: '10' },
  ];
  listaUsuarios: Users[] = [];
  listaClientes: Users[] = [];
  idClienteSeleccionado: number = 0;
  listaAbogados: Users[] = [];
  idAbogadoSeleccionado: number = 0;

  constructor(
    private cS: CommentService,
    private cltS: UsersService,
    private lawS: UsersService,
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
      idComment: [''],
      client: ['', Validators.required],
      lawyer: ['', Validators.required],
      description: ['', Validators.required],
      score: ['', Validators.required],
    });
    this.cltS.list().subscribe((data) => {
      this.listaUsuarios = data;

      this.listaClientes = this.listaUsuarios.filter((obj) => {
        return obj.lawyer == false;
      });
    });
    this.lawS.list().subscribe((data) => {
      this.listaUsuarios = data;

      this.listaAbogados = this.listaUsuarios.filter((obj) => {
        return obj.lawyer == true;
      });
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.comentario.idComment = this.form.value.idComment;
      this.comentario.client.idUser = this.form.value.client;
      this.comentario.lawyer.idUser = this.form.value.lawyer;
      this.comentario.description = this.form.value.description;
      this.comentario.score = this.form.value.score;
      

      if (this.edicion) {
        this.cS.update(this.comentario).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.comentario).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['comments']);
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idComment: new FormControl(data.idComment),
          client: new FormControl(data.client.idUser),
          lawyer: new FormControl(data.lawyer.idUser),
          description: new FormControl(data.description),
          score: new FormControl(data.score),
        });
      });
    }
  }
}
