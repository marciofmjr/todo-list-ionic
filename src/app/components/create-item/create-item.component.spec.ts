import { ItemApiService } from './../../services/item-api.service';
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
      }).compileComponents();

      fixture = TestBed.createComponent(CreateItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling save with empty inputTitle, should not call itemApiService.create method', () => {
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'create').and.callThrough();

    component.inputTitle = '';
    fixture.detectChanges();

    component.save();

    expect(itemApiService.create).not.toHaveBeenCalled();
  });

  it('calling save with filled inputTitle, should call itemApiService.create method and clean inputTitle value', () => {
    const itemMock = {
      id: '6f7a6746-9795-4f7b-8262-4f2db8866711',
      title: 'complete tasks',
      done: true,
      createdAt: '2022-03-13T00:16:28.028Z',
    };

    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'create').and.returnValue(of(itemMock));

    component.inputTitle = 'some item';
    fixture.detectChanges();

    component.save();

    expect(itemApiService.create).toHaveBeenCalled();
    expect(component.inputTitle).toBe('');
  });
});
