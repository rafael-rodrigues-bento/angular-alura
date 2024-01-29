import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class CustomReuseStrategy extends BaseRouteReuseStrategy {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data['reuseComponent'];
  }
}
