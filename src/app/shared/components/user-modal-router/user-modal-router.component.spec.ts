import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FullModalComponent } from '../../../templates/full-modal/full-modal.component';
import { SharedModule } from '../../shared.module';

import { UserModalRouterComponent } from './user-modal-router.component';

describe('UserModalRouterComponent', () => {
  let component: UserModalRouterComponent;
  let fixture: ComponentFixture<UserModalRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModalRouterComponent, FullModalComponent ],
      imports: [ RouterTestingModule, SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should .follow-unfollow-button click call userService.userMakeUnfollow', () => {
    spyOn(component['userService'], 'userMakeUnfollow');
    component.loggedUserId = 244497;
    component.modalUserId = 270447;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.follow-unfollow-button')).nativeElement.click();
    expect(component['userService'].userMakeUnfollow).toHaveBeenCalled();
  })

  it('should .follow-unfollow-button click call userService.userMakeFollow', () => {
    spyOn(component['userService'], 'userMakeFollow');
    component.loggedUserId = 244497;
    component.modalUserId = 27044768768;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.follow-unfollow-button')).nativeElement.click();
    expect(component['userService'].userMakeFollow).toHaveBeenCalled();
  })

});
