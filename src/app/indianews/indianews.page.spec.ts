import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndianewsPage } from './indianews.page';

describe('IndianewsPage', () => {
  let component: IndianewsPage;
  let fixture: ComponentFixture<IndianewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
