import { Component } from '@angular/core';
import {ServiceFormComponent} from './service-form/service-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServiceFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helpress Application';
}
