import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ListDevicesPage } from '../pages/list-devices/list-devices';

import { BluetoothService } from '../providers/bluetooth-service';

@NgModule({
  declarations: [
    MyApp,

    TabsPage,
    HomePage,
    ListDevicesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    HomePage,
    ListDevicesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BluetoothService]
})
export class AppModule {}
