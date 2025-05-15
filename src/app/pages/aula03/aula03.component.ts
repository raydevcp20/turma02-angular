import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-aula03',
  imports: [
    FormsModule,
    ButtonComponent,
  ],
  templateUrl: './aula03.component.html',
  styleUrl: './aula03.component.css',
})
export class Aula03Component {
  password: string = '';
  itens: string[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  buttonType: string = 'success';
}
