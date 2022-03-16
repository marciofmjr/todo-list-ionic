import { ItemApiService } from './../../services/item-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';

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
      }).compileComponents();

      fixture = TestBed.createComponent(SearchBarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given searchTextControl valueChanges, should call itemApiService search method', () => {
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'search').and.callThrough();

    fixture.componentRef.instance.searchTextControl.setValue('aaaa');
    expect(itemApiService.search).toHaveBeenCalled();
  });
});
