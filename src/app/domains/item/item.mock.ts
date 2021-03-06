import { Item } from './item.model';

export const itemMock = (): Item => ({
  id: 'ace3156d-22bf-405f-a6e6-173a0c9ed163',
  title: 'visit parents',
  done: true,
  createdAt: '2022-03-15T00:16:28.028Z',
});

export const itemsMock = (): Item[] => [
  {
    id: '07928701-d923-4897-b63c-05e4c6141f06',
    title: 'buy food',
    done: true,
    createdAt: '2022-03-15T00:16:28.028Z',
  },
  {
    id: '36356f29-a172-4b79-8016-010a7559ce37',
    title: 'buy notebook',
    done: false,
    createdAt: '2022-03-15T00:16:28.028Z',
  },
];

export const deleteResponseMock = (): Item => ({
  id: 'f1325f9a-e283-43eb-83f5-6d95b63fe645',
  title: 'complete tasks',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const createResponseMock = (): Item => ({
  id: '705f602a-7cf9-4819-b551-6fed5bc23efe',
  title: 'sleep',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const createBodyMock = (): Item => ({
  title: 'sleep',
  done: false,
});

export const saveUpdateApiBodyMock = (): Item => ({
  id: 'a9981958-8488-45e1-881c-6a2d985fb79f',
  title: 'sleep early',
  done: false,
});

export const saveUpdateApiResponseMock = (): Item => ({
  id: 'a9981958-8488-45e1-881c-6a2d985fb79f',
  title: 'sleep early',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const saveCreateApiBodyMock = (): Item => ({
  title: 'go to school',
  done: false,
});

export const saveCreateApiResponseMock = (): Item => ({
  id: '44d4d3c9-871d-4e21-a91b-8d4b0c06942c',
  title: 'go to school',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const getApiResponseMock = (): Item[] => [
  {
    id: 'd59dc088-6904-4268-8683-5af72b8149a7',
    title: 'complete my events',
    done: false,
    createdAt: '2022-03-13T00:16:28.028Z',
  },
  {
    id: '6cfbc2b5-bcee-4321-8acf-42fb16f4bd9d',
    title: 'go to home',
    done: true,
    createdAt: '2022-03-13T00:16:28.028Z',
  },
];

export const deleteApiResponseMock = (): Item => ({
  id: '420776b0-9db4-4438-9125-6593569144bb',
  title: 'go to church',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const patchApiResponseMock = (): Item => ({
  id: '8be2712c-7527-4ece-bf1a-a74e7459c045',
  title: 'sleep',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
});

export const patchItemBodyMock = (): Partial<Item> => ({
  id: '18104ec5-bd33-4a25-972c-c305a9eb6bb0',
  title: 'new title',
});

export const patchItemResponseMock = (): Item => ({
  id: '18104ec5-bd33-4a25-972c-c305a9eb6bb0',
  title: 'new title',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
});
