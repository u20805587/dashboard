import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFunctionComponent } from './roleFunction.component';

describe('RoleFunctionComponent', () => {
  let component: RoleFunctionComponent;
  let fixture: ComponentFixture<RoleFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
