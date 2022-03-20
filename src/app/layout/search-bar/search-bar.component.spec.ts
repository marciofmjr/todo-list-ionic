import { ItemFacade } from './../../domains/item/item-facade';
import { ItemStore } from 'src/app/domains/item/item.store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchBarComponent],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          ReactiveFormsModule,
        ],
        providers: [ItemStore],
      }).compileComponents();

      fixture = TestBed.createComponent(SearchBarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given searchTextControl valueChanges, should call itemFacade search method', () => {
    const itemFacade = fixture.debugElement.injector.get(ItemFacade);
    spyOn(itemFacade, 'search').and.callThrough();

    fixture.componentRef.instance.searchTextControl.setValue('buy item');
    expect(itemFacade.search).toHaveBeenCalled();
  });
});
