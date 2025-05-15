import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  ngOnInit() {
    setTimeout(() => {
      console.log("carrequei")
    }, 3000);
  }
  texto = "carrequei";

  carregar(){
    setTimeout(() => {
      return this.texto;
    }, 3000);
  }
}
