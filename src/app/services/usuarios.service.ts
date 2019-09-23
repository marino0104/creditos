import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'https://credito-3c722.firebaseio.com';
  constructor(private http: HttpClient) {}
  crearUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/usuarios.json`, usuario).pipe(
      map((response: any) => {
        usuario.id = response.name;
        return usuario;
      })
    );
  }
  actualizarUsuario(usuario: UsuarioModel) {
    const usuarioUpdt = {
      ...usuario
    };
    delete usuarioUpdt.id;
    return this.http.put(
      `${this.url}/usuarios/${usuario.id}.json`,
      usuarioUpdt
    );
  }
  obtenerUsuario(id: string) {
    return this.http.get(`${this.url}/usuarios/${id}.json`);
  }
  obtenerUsuarios() {
    return this.http
      .get(`${this.url}/usuarios.json`)
      .pipe(map(this.crearUsuarios));
  }
  private crearUsuarios(usuariosObj: object) {
    const usuarios: UsuarioModel[] = [];
    if (usuariosObj === null) {
      return [];
    }
    Object.keys(usuariosObj).forEach(key => {
      const usuario: UsuarioModel = usuariosObj[key];
      usuario.id = key;
      usuarios.push(usuario);
    });
    return usuarios;
  }
}
