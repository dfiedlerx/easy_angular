import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserNamePhotoTextComponent } from './user-name-photo-text.component';

describe('UserNamePhotoTextComponent', () => {
  let component: UserNamePhotoTextComponent;
  let fixture: ComponentFixture<UserNamePhotoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNamePhotoTextComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNamePhotoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
