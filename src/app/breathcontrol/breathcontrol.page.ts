import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breathcontrol',
  templateUrl: './breathcontrol.page.html',
  styleUrls: ['./breathcontrol.page.scss'],
})
export class BreathcontrolPage implements OnInit {
  [x: string]: any;

      articles = [
        {
          "id": 1,
          "title": "Breaststroke!",
          "desc1": "The breaststroke is one of the first strokes taught to early swimmers, easy to learn and execute in the water. During the stroke, both the arms make half-circular movements, lifting your upper half. The arm release movement occurs in the water. The legs execute a whip kick.",
          "desc2": "The reason it is taught to the beginners is that he can keep his head above the water skipping all the breathing and panic problems. Once you are experienced, you can submerge your head in the water during the stroke.",
          "desc3": "The upper body should be at the top when your hands meet below the chest and feet above your buttocks.",
          "credit": ["Chuttersnap (Photo)"," sportzcrazzy (content)"],
          "imageToURL": "assets/images/strokes/breaststroke.jpg",
        },
      ]
  
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  credit: string;
  imageToURL: string;      

  constructor(
    private actRoute: ActivatedRoute,
    private modalController: ModalController
  ) {

    this.modalController.dismiss();
   }


   ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.desc1 = this.actRoute.snapshot.paramMap.get('desc1');
    this.desc2 = this.actRoute.snapshot.paramMap.get('desc2');
    this.desc3 = this.actRoute.snapshot.paramMap.get('desc3');
    this.credit = this.actRoute.snapshot.paramMap.get('credit');
    this.imageToURL = this.actRoute.snapshot.paramMap.get('imageToURL');
    console.log();
  }

}

