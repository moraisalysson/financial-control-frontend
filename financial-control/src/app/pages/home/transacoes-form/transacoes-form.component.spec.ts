import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesFormComponent } from './transacoes-form.component';

describe('TransacoesFormComponent', () => {
  let component: TransacoesFormComponent;
  let fixture: ComponentFixture<TransacoesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransacoesFormComponent]
    });
    fixture = TestBed.createComponent(TransacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
