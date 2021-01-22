import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCursoPage } from './detail-curso.page';

describe('DetailCursoPage', () => {
  let component: DetailCursoPage;
  let fixture: ComponentFixture<DetailCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
