import { Component, OnInit } from '@angular/core';
import { routePathKeys } from 'src/app/auth/route-part-keys';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'nc-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  links = routePathKeys;
  constructor(private store: Store) {}

  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
