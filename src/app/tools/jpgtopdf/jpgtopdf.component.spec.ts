import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgtopdfComponent } from './jpgtopdf.component';

describe('JpgtopdfComponent', () => {
  let component: JpgtopdfComponent;
  let fixture: ComponentFixture<JpgtopdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpgtopdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpgtopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
