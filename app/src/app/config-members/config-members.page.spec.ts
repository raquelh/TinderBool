import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMembersPage } from './config-members.page';

describe('ConfigMembersPage', () => {
  let component: ConfigMembersPage;
  let fixture: ComponentFixture<ConfigMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMembersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
