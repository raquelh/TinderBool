import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuserPage } from './cuser.page';

describe('CuserPage', () => {
  let component: CuserPage;
  let fixture: ComponentFixture<CuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
