import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndianewssinglePage } from './indianewssingle.page';

describe('IndianewssinglePage', () => {
  let component: IndianewssinglePage;
  let fixture: ComponentFixture<IndianewssinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianewssinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianewssinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
