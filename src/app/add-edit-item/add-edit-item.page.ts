import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddEditItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
