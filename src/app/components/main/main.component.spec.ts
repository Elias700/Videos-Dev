import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainComponent } from './main.component';

describe('MainComponent', () => {
  let component: mainComponent;
  let fixture: ComponentFixture<mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [mainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
