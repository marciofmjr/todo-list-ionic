import { Item } from 'src/app/domains/item/item.model';
import { itemsMock, itemMock } from './item.mock';
import { environment } from './../../../environments/environment.prod';
import { NgSimpleStateModule } from 'ng-simple-state';
import { TestBed } from '@angular/core/testing';
import { ItemStore } from 'src/app/domains/item/item.store';

describe('ItemStore', () => {
  let itemStore: ItemStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgSimpleStateModule.forRoot({
          enableDevTool: !environment.production,
          enableLocalStorage: false,
        }),
      ],
    });

    itemStore = new ItemStore(TestBed);
  });

  it('initialState should be an empty array', () => {
    expect(itemStore.getCurrentState()).toEqual([]);
  });

  it('set should restartState and set items', () => {
    const itemsMockObj = itemsMock();
    itemStore.set(itemsMockObj);
    expect(itemStore.getCurrentState()).toEqual(itemsMockObj);
  });

  it('add should add new item to state', () => {
    const itemsMockObj = itemsMock();
    itemStore.set(itemsMockObj);
    const newItem: Item = {
      id: '506ac3f8-8688-40ec-89fc-a1ff8ac2a422',
      title: 'new item from test',
      done: false,
      createdAt: '2022-03-12T13:59:21.406Z',
    };
    itemStore.add(newItem);
    expect(itemStore.getCurrentState()).toEqual([...itemsMockObj, newItem]);
  });

  it('update should update item in state', () => {
    const originalItemsMockObj = itemsMock();
    const updatedItemsMockObj = itemsMock();
    updatedItemsMockObj[0].title = 'I changed';
    updatedItemsMockObj[0].visible = true;
    updatedItemsMockObj[1].visible = true;

    itemStore.set(originalItemsMockObj.reverse());
    itemStore.update(updatedItemsMockObj[0]);
    expect(itemStore.getCurrentState()).toEqual(updatedItemsMockObj);
  });

  it('delete item should delete item in state', () => {
    const itemsMockObj = itemsMock();
    itemStore.set(itemsMockObj);
    itemStore.delete(itemsMockObj[0]);
    expect(itemStore.getCurrentState()).toEqual([itemsMockObj[1]]);
  });

  it('search should find items in state and set visibility', () => {
    const originalItem = itemMock();
    originalItem.visible = true;

    const item1: Item = { ...originalItem };
    const item2: Item = { ...originalItem };
    const item3: Item = { ...originalItem };
    const item4: Item = { ...originalItem };

    item1.title = 'buy MacBook';
    item2.title = 'go to super market';
    item3.title = 'I need to buy a new house';
    item4.title = 'other';

    const itemsBeforeSearch = [
      { ...item1 },
      { ...item2 },
      { ...item3 },
      { ...item4 },
    ];
    const itemsAfterSearch = [
      { ...item1 },
      { ...item2, visible: false },
      { ...item3 },
      { ...item4, visible: false },
    ];

    itemStore.set(itemsBeforeSearch.reverse());
    itemStore.search('buy');
    expect(itemStore.getCurrentState()).toEqual(itemsAfterSearch);
  });

  it('calling getItemVisibility with item.visible false, should return false', () => {
    const itemObj = itemMock();
    itemObj.visible = false;
    expect(itemStore.getItemVisibility(itemObj)).toBeFalse();
  });
  it('calling getItemVisibility with item.visible true, should return true', () => {
    const itemObj = itemMock();
    itemObj.visible = true;
    expect(itemStore.getItemVisibility(itemObj)).toBeTrue();
  });
});
