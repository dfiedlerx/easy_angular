import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FullModalComponent } from './full-modal.component';

describe('FullModalComponent', () => {
  let component: FullModalComponent;
  let fixture: ComponentFixture<FullModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullModalComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullModalComponent);
    TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should closeModal navigates to out', () => {
    
    spyOn(component.modalClose, 'next');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.close');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.modalClose.next).toHaveBeenCalled();

  });

});
