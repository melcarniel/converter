import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick function USD -> GPB', () => {
    component.valor = '10';
    component.currency = 'USD';
    component.convertCurrency = 'GPB';

    component.onClick(component.valor, component.currency, component.convertCurrency)

    expect(component.totalValue).toEqual(7.803867403314917)
  });

  it('onClick function EUR -> GPB', () => {
    component.valor = '10';
    component.currency = 'EUR';
    component.convertCurrency = 'GPB';

    component.onClick(component.valor, component.currency, component.convertCurrency)

    expect(component.totalValue).toEqual(9.208563535911603)
  });

  it('onClick function GPB -> USD', () => {
    component.valor = '10';
    component.currency = 'GPB';
    component.convertCurrency = 'USD';

    component.onClick(component.valor, component.currency, component.convertCurrency)

    expect(component.totalValue).toEqual(12.814159292035399)
  });

  it('onClick function EUR -> USD', () => {
    component.valor = '10';
    component.currency = 'EUR';
    component.convertCurrency = 'USD';

    component.onClick(component.valor, component.currency, component.convertCurrency)

    expect(component.totalValue).toEqual(11.799999999999999)
  });

  it('onClick function BTC -> USD', () => {
    component.valor = '10';
    component.currency = 'BTC';
    component.convertCurrency = 'USD';

    component.onClick(component.valor, component.currency, component.convertCurrency)

    expect(component.totalValue).toEqual(107000)
  });
});
