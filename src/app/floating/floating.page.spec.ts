import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloatingPage } from './floating.page';

describe('FloatingPage', () => {
  let component: FloatingPage;
  let fixture: ComponentFixture<FloatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
