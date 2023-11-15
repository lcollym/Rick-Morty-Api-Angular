import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  characters: any;
  maxchar = 0;
  minchar = 0;
  ngOnInit() {
    this.loadPage();
  }

  loadPage(page: number = this.maxchar) {
    // Realizamos una solicitud GET a la página especificada
    this.http
      .get('https://rickandmortyapi.com/api/character?page=' + page)
      .subscribe(
        (response: any) => {
          // Actualizamos la lista de personajes con la respuesta de la API
          this.characters = response;
          console.log(response);
        },
        (error: any) => {
          // Manejamos el error
        }
      );

    this.maxchar++;
    console.log(this.maxchar);
  }
}
