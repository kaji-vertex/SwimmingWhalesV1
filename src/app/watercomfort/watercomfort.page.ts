import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watercomfort',
  templateUrl: './watercomfort.page.html',
  styleUrls: ['./watercomfort.page.scss'],
})
export class WatercomfortPage implements OnInit {

    articles = [
      {
        "id": 1,
        "title": "Freestyle!",
        "desc1": "Freestyle Stroke also called front call by many is the most used stroke by the swimmers and triathletes. To swim freestyle, your arms should make alternate movements, one arm moves backward from the head, the other arm comes out of the water from the hips towards the head.",
        "desc2": "During the arm movement, the legs do the flutter kick making upward and downward movements with a pointed toe. This is a result-oriented kicking exercise to strengthen the ligament. Make sure the head is in line with the trunk looking straight down, extended arm with your palms turned downward.",
        "credit": ["Jim De Ramos (Photo)"," sportzcrazzy (content)"],
        "imageToURL": "assets/images/strokes/freestyle.jpeg",
      },
    ]
  router: any;
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  credit: string;
  imageToURL: string;

  constructor(
    private modalController: ModalController,
    private actRoute: ActivatedRoute
  ) {

    this.modalController.dismiss();
   }

  

   ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.desc1 = this.actRoute.snapshot.paramMap.get('desc1');
    this.desc2 = this.actRoute.snapshot.paramMap.get('desc2');
    this.credit = this.actRoute.snapshot.paramMap.get('credit');
    this.imageToURL = this.actRoute.snapshot.paramMap.get('imageToURL');
    console.log();
  }




}


