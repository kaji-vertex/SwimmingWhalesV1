import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrokesPage } from './strokes.page';

describe('StrokesPage', () => {
  let component: StrokesPage;
  let fixture: ComponentFixture<StrokesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrokesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrokesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
