import { Router } from '@angular/router';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalchoose',
  templateUrl: './modalchoose.page.html',
  styleUrls: ['./modalchoose.page.scss'],
})
export class ModalchoosePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


  waterComfort() {
    this.loadingController.create({
      duration:2000,
      message: 'Redirecting please wait...'
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/watercomfort']);
      })
    })
  }

  breathControl() {
    this.loadingController.create({
      duration:2000,
      message: 'Redirecting please wait...'
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/breathcontrol']);
      })
    })
  }

  floating() {
    this.loadingController.create({
      duration:2000,
      message: 'Redirecting please wait...'
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/floating']);
      })
    })
  }

  kicking() {
    this.loadingController.create({
      duration:2000,
      message: 'Redirecting please wait...'
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/kicking']);
      })
    })
  }

  strokes() {
    this.loadingController.create({
      duration:2000,
      message: 'Redirecting please wait...'
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/strokes']);
      })
    })
  }

}


