import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  isHidden = true;
  characters: any;
  pages = 2;

  ngOnInit() {
    this.loadPage();
  }

 async nextPage(page: number = this.pages) {
    // Realizamos una solicitud GET a la página especificada
   await this.http
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
      this.increment();

  }
  async previusPage(page: number = this.pages) {
    // Realizamos una solicitud GET a la página especificada
   await this.http
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


      
   

    this.decrement()

  }
  loadPage() {
    // Realizamos una solicitud GET a la página especificada
    this.http
      .get('https://rickandmortyapi.com/api/character')
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


     
  
  }


  increment(){
    this.pages++;
    console.log(this.pages);
    if(this.pages >= 43){
      alert('There are no more characters :(')
      location.reload()
    }
    this.isHidden = false;
  }

  decrement(){
    this.pages--;
    console.log(this.pages);
    if(this.pages <= 0){
      this.isHidden = true;
     
    }
  }
}
