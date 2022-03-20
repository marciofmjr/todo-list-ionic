import { ItemStore } from 'src/app/domains/item/item.store';
import { ItemFacade } from './../../domains/item/item-facade';
import { itemsMock } from '../../domains/item/item.mock';
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
  let itemFacadeSpy: jasmine.SpyObj<ItemFacade>;

  beforeEach(
    waitForAsync(() => {
      itemFacadeSpy = jasmine.createSpyObj('ItemFacade', {
        get: of(itemsMock()),
        items: of(itemsMock()),
      });
      TestBed.configureTestingModule({
        declarations: [DashboardPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          ComponentsModule,
          LayoutModule,
        ],
        providers: [
          { provide: ItemFacade, useValue: itemFacadeSpy },
          ItemStore,
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

  it('onInit, should call itemFacade items method', () => {
    expect(itemFacadeSpy.items).toHaveBeenCalled();
  });
  it('onInit, should call itemFacade get method', () => {
    expect(itemFacadeSpy.get).toHaveBeenCalled();
  });
});
