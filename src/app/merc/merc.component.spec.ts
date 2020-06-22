import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercComponent } from './merc.component';

describe('MercComponent', () => {
  let component: MercComponent;
  let fixture: ComponentFixture<MercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
