import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatercomfortPage } from './watercomfort.page';

describe('WatercomfortPage', () => {
  let component: WatercomfortPage;
  let fixture: ComponentFixture<WatercomfortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatercomfortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatercomfortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
