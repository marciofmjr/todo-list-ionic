import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateItemComponent } from './create-item.component';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
