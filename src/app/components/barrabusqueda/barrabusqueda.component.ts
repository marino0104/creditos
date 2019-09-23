import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrabusqueda',
  templateUrl: './barrabusqueda.component.html',
  styleUrls: ['./barrabusqueda.component.css']
})
export class BarrabusquedaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  buscar(termino: string) {
    termino = termino.toLowerCase();
    if (termino.length === 0) {
      return;
    }
    this.router.navigate(['buscar', termino]);
  }
}
