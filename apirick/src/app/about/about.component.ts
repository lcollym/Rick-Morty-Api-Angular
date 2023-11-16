import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,} from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
