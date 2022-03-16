import { itemsMock } from './../../mocks/item.mock';
import { ItemApiService } from './../../services/item-api.service';
import { LayoutModule } from './../../layout/layout.module';
import { ComponentsModule } from './../../components/components.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { of } from 'rxjs';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          ComponentsModule,
          LayoutModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(DashboardPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling setItems, should call itemApiService getItems', async () => {
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'getItems').and.returnValue(of(itemsMock));

    component.setItems();

    expect(itemApiService.getItems).toHaveBeenCalled();
  });
});
