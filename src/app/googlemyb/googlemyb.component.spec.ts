import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemybComponent } from './googlemyb.component';

describe('GooglemybComponent', () => {
  let component: GooglemybComponent;
  let fixture: ComponentFixture<GooglemybComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemybComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
