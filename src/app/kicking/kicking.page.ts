import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kicking',
  templateUrl: './kicking.page.html',
  styleUrls: ['./kicking.page.scss'],
})
export class KickingPage implements OnInit {
        
        articles = [
          {
            "id": 1,
            "title": "Backstroke!",
            "desc1": "As the name goes, it is swimming on the back. The swimmer uses alternate circular movements to keep the body above the water level, while the legs use the flutter kick to push the body as used in freestyle stroke.",
            "desc2": "If you suffer from any kind of back problems, backstroke helps in releasing the muscle tension and strengthen the upper back and Lats, giving your body a robust posture. It is somewhere between breaststroke and butterfly in terms of execution.",
            "desc3": "To master the backstroke, the swimmer practice different drills to improve the performance, such as:",
            "desc4": "Build drill",
            "desc5": "Backstroke 7&7 drill",
            "desc6": "One arm backstroke drill",
            "credit": ["Ryan Fleischer (Photo)"," sportzcrazzy (content)"],
            "imageToURL": "assets/images/strokes/backstroke.jpg",
          },
        ]
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
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
    this.desc4 = this.actRoute.snapshot.paramMap.get('desc4');
    this.desc5 = this.actRoute.snapshot.paramMap.get('desc5');
    this.desc6 = this.actRoute.snapshot.paramMap.get('desc6');
    this.credit = this.actRoute.snapshot.paramMap.get('credit');
    this.imageToURL = this.actRoute.snapshot.paramMap.get('imageToURL');
    console.log();
  }

}


