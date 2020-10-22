import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreathcontrolPage } from './breathcontrol.page';

describe('BreathcontrolPage', () => {
  let component: BreathcontrolPage;
  let fixture: ComponentFixture<BreathcontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathcontrolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreathcontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
