import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Asegúrate de que esto esté configurado correctamente
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  // Define la estructura de los ítems con un tipo
  items: { id: number; name: string; date: string; acciones: string; completed: boolean }[] = [];
  nextId: number = 1;

  constructor() {}

  // Método para agregar un nuevo ítem
  addItem(name: string, date: string, acciones: string): void {
    if (name.trim() && date.trim() && acciones.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        date: date.trim(),
        completed: false,
        acciones: acciones.trim(),
      });
    } else {
      console.error('El nombre, la fecha y las tareas no pueden estar vacíos.');
    }
  }

  toggleCompleted(id: number): void {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}


 