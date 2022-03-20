import { itemMock } from './../../domains/item/item.mock';
import { ItemStore } from 'src/app/domains/item/item.store';
import { ItemFacade } from './../../domains/item/item-facade';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateItemComponent } from './create-item.component';
import { of } from 'rxjs';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CreateItemComponent],
        imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule],
        providers: [ItemStore],
      }).compileComponents();

      fixture = TestBed.createComponent(CreateItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling save with empty inputTitle, should not call itemFacade.create method', () => {
    const itemFacade = fixture.debugElement.injector.get(ItemFacade);
    spyOn(itemFacade, 'create').and.callThrough();

    component.inputTitle = '';
    fixture.detectChanges();

    component.save();

    expect(itemFacade.create).not.toHaveBeenCalled();
  });

  it('calling save with filled inputTitle, should call itemFacade.create method and clean inputTitle value', () => {
    const itemFacade = fixture.debugElement.injector.get(ItemFacade);
    spyOn(itemFacade, 'create').and.returnValue(of(itemMock()));

    component.inputTitle = 'some item';
    fixture.detectChanges();

    component.save();

    expect(itemFacade.create).toHaveBeenCalled();
    expect(component.inputTitle).toBe('');
  });
});
