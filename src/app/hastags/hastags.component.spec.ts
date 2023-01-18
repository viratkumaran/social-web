import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastagsComponent } from './hastags.component';

describe('HastagsComponent', () => {
  let component: HastagsComponent;
  let fixture: ComponentFixture<HastagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
