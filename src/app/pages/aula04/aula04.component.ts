import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FormatCEPPipe } from '../../pipes/format-cep.pipe';

@Component({
  selector: 'app-aula04',
  imports: [
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    JsonPipe,
    SlicePipe,
    FormatCEPPipe,
    TitleCasePipe,
  ],
  templateUrl: './aula04.component.html',
  styleUrl: './aula04.component.css',
  providers: [DatePipe, JsonPipe]
})
export class Aula04Component {
  date: any = new Date();
  dataFormatada: string = "11-24-2023";
  json: string = "";
  text: string = 'Exemplo de texto';
  textTitlecase: string = 'o angular é um framework SPA muito bom';
  number: number = 90.5;
  obj: any = {
    nome: 'Fulano',
    idade: 30,
    endereco: [{ rua: 'Rua 1', numero: 10 }],
  };

  constructor(private datePipe: DatePipe, private jsonPipe: JsonPipe) {
    console.log(this.textTitlecase);
    this.dataFormatada = this.datePipe.transform(this.date, 'dd/MM/yyyy') || '';
    this.json = this.jsonPipe.transform(this.obj);
  }

  funcaoTeste(numero1: number, numero2: number) {}
}
