import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalchoosePage } from '../modalchoose/modalchoose.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  guidelines: any;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController
    ) {

      this.guidelines = [
        {
        "id": 0,
        "guideline_name": "Water Comfort",
        "description": "The most basic and essential swimming skill is simply becoming comfortable in the water. Although humans are born with innate water skills, many people develop a fear of the water. When unintentional submersion occurs, panicking gets in the way of logical thinking and increases the likelihood of drowning. To become more comfortable in the water, spend time in a shallow pool or wading in the ocean. Never enter the water alone, especially if you are not a strong swimmer.",
        "owner": "Matt Hardy (Photo)",
        "imgToURL": "assets/images/watercomfort.jpeg"
      },
      {
        "id": 1,
        "guideline_name": "Breath Control",
        "description": "Breathing is often difficult for novice swimmers. With water all around, having some water enters the nose and mouth is a common occurrence. Some novice swimmers panic at the feeling of water in their noses, while others have trouble holding their breath while submerged. Learning to control your breathing is a key component in learning to swim. Each game is divided into sections, and all levels have two halves. In college, each half is twenty minutes long. Breath control begins with simple exercises such as drawing a breath, submerging, blowing bubbles and then resurfacing for another breath. As your swimming skills improve, you will learn specific breathing techniques for different strokes. Work with a swimming coach or a friend or relative who is a strong swimmer.",
        "owner": "Jess Vide (Photo)",
        "imgToURL": "assets/images/breathcontrol.webp"
      },
      {
        "id": 2,
        "guideline_name": "Floating",
        "description": "Floating, or keeping your body in a horizontal position in the water, is a basic water skill. If you accidentally fall in the water, you may be able to float until you are rescued, even if you are not strong enough to swim to safety. Humans are naturally buoyant, and floating is not difficult. Like any other skill, however, floating does require a bit of technique. Get lessons from a coach or a competent friend or relative.",
        "owner": "Med Gadon (Photo)",
        "imgToURL": "assets/images/floating.jpeg"
      },
      {
        "id": 3,
        "guideline_name": "Kicking",
        "description": "Kicking provides propulsion through the water. Once you are comfortable with floating, kicking is the logical next step. Kicking is also used in treading water, which is the process of remaining in one place while keeping your head above the water line. Many coaches use Kickboards, or flat floatation devices made of foam or plastic, to support the swimmer’s body. A keyboard allows you to focus solely on your kicking technique without worrying abouth staying afloat.",
        "owner": "Sergio Souza (Photo)",
        "imgToURL": "assets/images/kicking.webp"
      },
      {
        "id": 4,
        "guideline_name": "Strokes",
        "description": "Strokes are the arm movements used to pull the body through the water. The front crawl, sidestroke, breaststroke, backstroke and butterfly are the five most common swimming strokes. Each stroke uses different body positioning, breathing techniques and arm movements. Training with a qualified swimming coach is the best way to learn the various strokes.",
        "owner": "Mali Maeder (Photo)",
        "imgToURL": "assets/images/strokes.webp"
      },
    ]

  }

    async presentHalfModal() {
      const modal = await this.modalController.create({
        component: ModalchoosePage,
        cssClass: 'half-modal'
      });
      return await modal.present();
    }


    filterProductData(event: any) {
      this.guidelines = [
        {
          "id": 0,
          "guideline_name": "Water Comfort",
          "description": "The most basic and essential swimming skill is simply becoming comfortable in the water. Although humans are born with innate water skills, many people develop a fear of the water. When unintentional submersion occurs, panicking gets in the way of logical thinking and increases the likelihood of drowning. To become more comfortable in the water, spend time in a shallow pool or wading in the ocean. Never enter the water alone, especially if you are not a strong swimmer.",
          "owner": "Matt Hardy (Photo)",
          "imgToURL": "assets/images/watercomfort.jpeg"
        },
        {
          "id": 1,
          "guideline_name": "Breath Control",
          "description": "Breathing is often difficult for novice swimmers. With water all around, having some water enters the nose and mouth is a common occurrence. Some novice swimmers panic at the feeling of water in their noses, while others have trouble holding their breath while submerged. Learning to control your breathing is a key component in learning to swim. Each game is divided into sections, and all levels have two halves. In college, each half is twenty minutes long. Breath control begins with simple exercises such as drawing a breath, submerging, blowing bubbles and then resurfacing for another breath. As your swimming skills improve, you will learn specific breathing techniques for different strokes. Work with a swimming coach or a friend or relative who is a strong swimmer.",
          "owner": "Jess Vide (Photo)",
          "imgToURL": "assets/images/breathcontrol.webp"
        },
        {
          "id": 2,
          "guideline_name": "Floating",
          "description": "Floating, or keeping your body in a horizontal position in the water, is a basic water skill. If you accidentally fall in the water, you may be able to float until you are rescued, even if you are not strong enough to swim to safety. Humans are naturally buoyant, and floating is not difficult. Like any other skill, however, floating does require a bit of technique. Get lessons from a coach or a competent friend or relative.",
          "owner": "Jess Vide (Photo)",
          "imgToURL": "assets/images/floating.jpeg"
        },
        {
          "id": 3,
          "guideline_name": "Kicking",
          "description": "Kicking provides propulsion through the water. Once you are comfortable with floating, kicking is the logical next step. Kicking is also used in treading water, which is the process of remaining in one place while keeping your head above the water line. Many coaches use Kickboards, or flat floatation devices made of foam or plastic, to support the swimmer’s body. A keyboard allows you to focus solely on your kicking technique without worrying abouth staying afloat.",
          "owner": "Med Gadon (Photo)",
          "imgToURL": "assets/images/kicking.webp"
        },
        {
          "id": 4,
          "guideline_name": "Strokes",
          "description": "Strokes are the arm movements used to pull the body through the water. The front crawl, sidestroke, breaststroke, backstroke and butterfly are the five most common swimming strokes. Each stroke uses different body positioning, breathing techniques and arm movements. Training with a qualified swimming coach is the best way to learn the various strokes.",
          "owner": "Mali Maeder (Photo)",
          "imgToURL": "assets/images/strokes.webp"
        },
    ]
    
   
      const val = event.target.value;
        if(val && val.trim() !== '') {
      this.guidelines = this.guidelines.filter((guideline) => {
        return (guideline.guideline_name.toLowerCase().indexOf(val.toLowerCase()) >-1);
          })
      };

    }

    viewDetailsGuide(guideline) {
      this.router.navigate(['/guide-details/', {
        'id': guideline.id,
        'guideline_name': guideline.guideline_name,
        'description': guideline.description,
        'full_description': guideline.full_description,
        'owner': guideline.owner,
        'imgToURL': guideline.imgToURL
      }
    ]);
    }

    async refreshPage() {
      const loading = await this.loadingController.create({
        duration: 3000,
        message: 'Please wait...'
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed! after 3 Seconds', { role, data });
    }



    closeModal() {
      this.modalController.dismiss();
    }
    

}


