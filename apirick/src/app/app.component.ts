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
  pages:number = 3;

  ngOnInit() {
    this.nextPage();

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

  increment(){
    this.pages+=1;
    console.log(this.pages);
    if(this.pages >= 43){
      alert('There are no more characters :(')
      location.reload()
    }
    this.isHidden = false;
  }

  decrement(){
    this.pages-=1;
    console.log(this.pages);
    if(this.pages <= 1){
      this.isHidden = true;
     
    }
  }
}
