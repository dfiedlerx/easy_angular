import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
