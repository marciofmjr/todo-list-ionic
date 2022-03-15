import { Item } from '../models/item.model';

export const getAllResponseMock: Item[] = [
  {
    id: '9491c969-21e2-4a10-804d-19011d4c473e',
    title: 'buy notebook',
    done: false,
    createdAt: '2022-03-15T00:16:28.028Z'
  },
  {
    id: '6f7a6746-9795-4f7b-8262-4f2db8866711',
    title: 'complete tasks',
    done: true,
    createdAt: '2022-03-13T00:16:28.028Z'
  }
];

export const deleteResponseMock: Item = {
  id: 'f1325f9a-e283-43eb-83f5-6d95b63fe645',
  title: 'complete tasks',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z'
};

export const createResponseMock: Item = {
  id: '705f602a-7cf9-4819-b551-6fed5bc23efe',
  title: 'sleep',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z'
};

export const createBodyMock: Item = {
  title: 'sleep',
  done: false
};

export const updateDoneBodyMock: { id: string; done: boolean } = {
  id: 'c2cdfadd-f075-4af0-9c27-f42dae8468b6',
  done: true
};

export const updateDoneResponseMock: Item = {
  id: 'c2cdfadd-f075-4af0-9c27-f42dae8468b6',
  title: 'buy mouse',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z'
};

export const updateTitleBodyMock: { id: string; title: string } = {
  id: 'a19cab2d-4080-4df6-b0c2-dc495f18ad37',
  title: 'buy MacBook'
};

export const updateTitleResponseMock: Item = {
  id: 'a19cab2d-4080-4df6-b0c2-dc495f18ad37',
  title: 'buy MacBook',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z'
};
