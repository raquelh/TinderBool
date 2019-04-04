import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersPage } from './add-members.page';

describe('AddMembersPage', () => {
  let component: AddMembersPage;
  let fixture: ComponentFixture<AddMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
