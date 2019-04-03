import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPage } from './local.page';

describe('LocalPage', () => {
  let component: LocalPage;
  let fixture: ComponentFixture<LocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
