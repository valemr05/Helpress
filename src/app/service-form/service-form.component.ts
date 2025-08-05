import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-form.component.html',
  styleUrl: './service-form.component.css'
})

export class ServiceFormComponent {
  categorias = ['A/A', 'Plomería', 'Electricidad', 'Jardinería'];
  subcategorias = ['Instalación', 'Reparación', 'Mantenimiento'];

  form = {
    categoria: '',
    subcategoria: '',
    titulo: '',
    descripcion: '',
    ubicacion: '',
    foto: null as File | null
  };

  subirFoto(event: any) {
    this.form.foto = event.target.files[0];
  }

  enviarFormulario() {
    console.log('Datos del formulario:', this.form);
    
  }
}
