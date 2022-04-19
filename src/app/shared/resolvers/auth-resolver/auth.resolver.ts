import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { UserService } from '../../services/UserService/user.service'

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<boolean> {
  userLoggedId: number

  constructor(private userService: UserService, private route: Router) {
    this.userLoggedId = userService.getLoggedUserId()
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    let resultCheck =
      typeof this.userService.get(this.userLoggedId) !== 'undefined'

    if (!resultCheck) {

      this.route.navigate(['**'], { skipLocationChange: true })
      
    }

    return of(resultCheck)
  }
}
