import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KickingPage } from './kicking.page';

describe('KickingPage', () => {
  let component: KickingPage;
  let fixture: ComponentFixture<KickingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KickingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
