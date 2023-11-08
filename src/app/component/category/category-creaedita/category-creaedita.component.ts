import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-category-creaedita',
  templateUrl: './category-creaedita.component.html',
  styleUrls: ['./category-creaedita.component.css']
})
export class CategoryCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  categoria: Category = new Category();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private cS: CategoryService,
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
      idCategory: ['',],
      name: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.categoria.idCategory = this.form.value.idCategory;
      this.categoria.name = this.form.value.name;

      if (this.edicion) {
        this.cS.update(this.categoria).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.categoria).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/categories']);
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
          idCategory: new FormControl(data.idCategory),
          name: new FormControl(data.name),

        });
      });
    }
  }
}
