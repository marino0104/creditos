import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  p = 1;
  buscar = '';
  arregloUsuarios: any[] = [];
  palabra: any;
  constructor(
    public usuariosService: UsuariosService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe(parametros => {
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.arregloUsuarios = this.buscarUsuario();
        console.log(this.arregloUsuarios);
      }
    });
  }

  ngOnInit() {}
  buscarUsuario(): any[] {
    const usuariosArray: any[] = [];
    if (this.buscar.length == 0) {
      return;
    }
    this.buscar = this.buscar.toLowerCase();
    this.usuariosService.obtenerUsuarios().subscribe((data: any) => {
      for (const usuario of data) {
        const nombre = usuario.nombres.toLowerCase();
        const apellidos = usuario.apellidos.toLowerCase();
        const ciudad = usuario.ciudad.toLowerCase();
        if (
          nombre.indexOf(this.buscar) >= 0 ||
          apellidos.indexOf(this.buscar) >= 0 ||
          ciudad.indexOf(this.buscar) >= 0
        ) {
          usuariosArray.push(usuario);
        }
      }
    });
    return usuariosArray;
  }
}
