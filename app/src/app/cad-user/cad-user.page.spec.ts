import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUserPage } from './cad-user.page';

describe('CadUserPage', () => {
  let component: CadUserPage;
  let fixture: ComponentFixture<CadUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
