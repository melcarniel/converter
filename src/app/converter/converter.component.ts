import { Component, OnInit } from '@angular/core';
import { StringCurrency, ValueCurrency } from './converter.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  totalValue = 0;
  placeHolder = 0;
  valor = '0';
  currency = 'USD';
  convertCurrency = 'USD'
  
  onClick(valor: any, currency: any, convertCurrency: any){
    const value1 = Number(valor) * Number(ValueCurrency[currency]);
    this.totalValue = value1 / Number(ValueCurrency[convertCurrency]);
  }

}
