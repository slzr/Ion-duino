import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ListDevicesPage } from '../list-devices/list-devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl:   NavController,
    public modalCtrl: ModalController
  ) {

  }

  openListDevices(){
    let modal = this.modalCtrl.create( ListDevicesPage );
    modal.present();
  }

}
