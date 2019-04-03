import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesPage } from './equipes.page';

describe('EquipesPage', () => {
  let component: EquipesPage;
  let fixture: ComponentFixture<EquipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
