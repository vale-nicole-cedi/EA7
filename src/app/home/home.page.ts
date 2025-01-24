import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: { id: number; name: string; date: string; acciones: string }[] = [];
  nextId: number = 1;
  isEditing: boolean = false;
  editingUserId: number | null = null;

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      acciones: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      const { name, date, acciones } = this.userForm.value;

      if (this.isEditing && this.editingUserId !== null) {
        const user = this.users.find((u) => u.id === this.editingUserId);
        if (user) {
          user.name = name.trim();
          user.date = date.trim();
          user.acciones = acciones.trim();
        }
        this.isEditing = false;
        this.editingUserId = null;
      } else {
        this.users.push({
          id: this.nextId++,
          name: name.trim(),
          date: date.trim(),
          acciones: acciones.trim(),
        });
      }

      this.userForm.reset();
    } else {
      console.error('El formulario contiene errores de validación.');
    }
  }

  editUser(id: number): void {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      this.userForm.patchValue({
        name: user.name,
        date: user.date,
        acciones: user.acciones,
      });
      this.isEditing = true;
      this.editingUserId = id;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}



 
