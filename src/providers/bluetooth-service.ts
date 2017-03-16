import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BluetoothSerial } from 'ionic-native';

@Injectable()
export class BluetoothService {
  public connectedDevice: Observable<any>;


  constructor(public http: Http) {
  }

  isEnabled(){
    return BluetoothSerial.isEnabled();
  }

  listDevices(){
    return BluetoothSerial.list()
  }

  connect(deviceAddress, insecure = true) {
    return BluetoothSerial.connectInsecure( deviceAddress );
  }


}
