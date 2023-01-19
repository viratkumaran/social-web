import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbocComponent } from './inboc.component';

describe('InbocComponent', () => {
  let component: InbocComponent;
  let fixture: ComponentFixture<InbocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
