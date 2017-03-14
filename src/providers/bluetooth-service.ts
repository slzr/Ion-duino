import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BluetoothSerial } from 'ionic-native';

@Injectable()
export class BluetoothService {

  constructor(public http: Http) {
    console.log('Hello BluetoothService Provider');
  }


  getDevices(){
    return BluetoothSerial.list()
    // return new Promise(( resolve, reject ) => {
    //   BluetoothSerial.list(resolve, reject);
    // });
  }

}
