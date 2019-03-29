import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPrivateTeamPage } from './config-private-team.page';

describe('ConfigPrivateTeamPage', () => {
  let component: ConfigPrivateTeamPage;
  let fixture: ComponentFixture<ConfigPrivateTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPrivateTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPrivateTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
