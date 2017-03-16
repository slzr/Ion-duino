import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ListDevicesPage } from '../list-devices/list-devices';

import { BluetoothService } from '../../providers/bluetooth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl:   NavController,
    public modalCtrl: ModalController,
    public bs: BluetoothService
  ) {

  }

  openListDevices(){
    let modal = this.modalCtrl.create( ListDevicesPage );
    modal.present();
  }

}
