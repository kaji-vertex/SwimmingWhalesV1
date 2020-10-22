import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strokes',
  templateUrl: './strokes.page.html',
  styleUrls: ['./strokes.page.scss'],
})
export class StrokesPage implements OnInit {



          articles = [
            {
              "id": 1,
              "title": "Sidestroke!",
              "desc1": "Sidestroke is completely out of fashion and is hardly used by the swimmers in the competitions, but can prove to be a unique substitute to backstroke. Nowadays, it is used by the lifeguards to rescue victims.",
              "desc2": "You can master the sidestroke in just a few sessions and practicing certain drills over a period of time. For example:",
              "desc3": "Dryland scissor kick",
              "desc4": "Dry-land side stroke arm motions",
              "desc5": "Dry-Land Sidestroke Swimming Motions",
              "desc6": "Swimming sidestroke with a swim noodle",
              "desc7": "Sid stroke arm motions with a pull buoy",
              "desc8": "Scissorkick in the water with a swim noodle",
              "desc9": "Swimming side stroke",
              "desc10": "Alternating Sidestroke and Breaststroke",

              "credit": ["Keeze@Pixabay (Photo)"," sportzcrazzy (content)"],
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
  desc7: string;
  desc8: string;
  desc9: string;
  desc10: string;
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
    this.desc7 = this.actRoute.snapshot.paramMap.get('desc7');
    this.desc8 = this.actRoute.snapshot.paramMap.get('desc8');
    this.desc9 = this.actRoute.snapshot.paramMap.get('desc9');
    this.desc10 = this.actRoute.snapshot.paramMap.get('desc10');
    this.credit = this.actRoute.snapshot.paramMap.get('credit');
    this.imageToURL = this.actRoute.snapshot.paramMap.get('imageToURL');
    console.log();
  }

}


