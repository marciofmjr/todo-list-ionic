import { ItemStore } from 'src/app/domains/item/item.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentsModule } from './../../components/components.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          ComponentsModule,
        ],
        providers: [ItemStore],
      }).compileComponents();

      fixture = TestBed.createComponent(FooterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
