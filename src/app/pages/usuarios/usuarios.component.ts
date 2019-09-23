import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  p = 1;
  constructor(
    private usuariosService: UsuariosService,

  ) { }

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(response => {
      this.usuarios = response;
    });
  }

}
