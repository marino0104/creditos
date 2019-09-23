import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  message = false;
  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.usuariosService
        .obtenerUsuario(id)
        .subscribe((response: UsuarioModel) => {
          this.usuario = response;
          this.usuario.id = id;
        });
    }
  }
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('usuario no válido');
      return;
    }
    if (this.usuario.id) {
      this.usuariosService
        .actualizarUsuario(this.usuario)
        .subscribe(response => {});
      this.message = true;
      setTimeout(() => {
        this.message = false;
      }, 3000);
    } else {
      this.usuariosService.crearUsuario(this.usuario).subscribe(response => {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 3000);
      });
    }
  }
}
