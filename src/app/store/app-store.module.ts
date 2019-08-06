import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { effects, reducers } from '../store';
// import { CustomSerializer } from './reducers/router.reducers';

@NgModule({
  imports: [
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [
    // {
    //   provide: RouterStateSerializer,
    //   useClass: CustomSerializer,
    // }
  ]
})
export class AppStoreModule {}
