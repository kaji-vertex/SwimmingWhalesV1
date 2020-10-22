import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.page.html',
  styleUrls: ['./guide-details.page.scss'],
})
export class GuideDetailsPage implements OnInit {

  id: any;
  guideline_name: any;
  description: any;
    full_description: any;
  owner: any;
  imgToURL: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.guideline_name = this.actRoute.snapshot.paramMap.get('guideline_name');
    this.description = this.actRoute.snapshot.paramMap.get('description');
    this.full_description = this.actRoute.snapshot.paramMap.get('full_description');
    this.owner = this.actRoute.snapshot.paramMap.get('owner');
    this.imgToURL = this.actRoute.snapshot.paramMap.get('imgToURL');    
  }
}


