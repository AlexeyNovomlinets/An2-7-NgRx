import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    // Instrumentation must be imported after importing StoreModule
    // (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class CoreStoreModule { }
