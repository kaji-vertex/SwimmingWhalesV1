import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.page.html',
  styleUrls: ['./floating.page.scss'],
})
export class FloatingPage implements OnInit {

      // for modal articles BREASTSTROKE
      articles = [
        {
          "id": 1,
          "title": "Butterfly Stroke!",
          "desc1": "Butterfly Stroke is the toughest and competitive stroke used by the swimmers, thrilling to watch and unique in nature. The butterfly stroke was founded by the Australian named Sydney Cavill, the stroke spread like fire when Sydney went to the USA and inspired players like Michael Phelps, who carried on Sydney legacy and reframed the art of the butterfly stroke.",
          "desc2": "The swimmer uses a symmetrical arm stroke to create a wavelike body undulating with a dolphin kick. For a beginner, it is quite exhausting and requires some serious skill to master. It is the second-fastest swim stroke after freestyle.",
          "desc3": "Note: don’t juggle normal kick with a dolphin kick. It is different.",
          "credit": ["Gentrit Sylejmani (Photo)"," sportzcrazzy (content)"],
          "imageToURL": "assets/images/strokes/butterfly.jpg",
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


