import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEquipePage } from './cad-equipe.page';

describe('CadEquipePage', () => {
  let component: CadEquipePage;
  let fixture: ComponentFixture<CadEquipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEquipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEquipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
