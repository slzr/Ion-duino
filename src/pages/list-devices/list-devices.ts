import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BluetoothService } from '../../providers/bluetooth-service';

@Component({
  selector: 'page-list-devices',
  templateUrl: 'list-devices.html',

})
export class ListDevicesPage {
  public dispositivos: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bs: BluetoothService
  ) {

  }

  ionViewDidLoad() {
    this.bs.getDevices().then(()=>{
      
    })   ;
  }

}
