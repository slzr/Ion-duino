import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { BluetoothService } from '../../providers/bluetooth-service';

@Component({
  selector: 'page-list-devices',
  templateUrl: 'list-devices.html',

})
export class ListDevicesPage {
  public devices: Array<any>;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public bs: BluetoothService
  ) {
    this.devices = [ ];

  }

  ionViewDidLoad() {
    this.bs.listDevices()
    .then( (devices) => {
      this.devices = devices;
    }).catch( (err) => {
      console.log( err );
    });
  }

  connectTo(device) {
    this.bs.connect( device ).subscribe( data => {
      alert(data);
      console.log(data);
    });
  }

}
