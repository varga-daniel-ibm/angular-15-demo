import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPlaygroundComponent } from './forms-playground.component';

describe('FormsPlaygroundComponent', () => {
  let component: FormsPlaygroundComponent;
  let fixture: ComponentFixture<FormsPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
