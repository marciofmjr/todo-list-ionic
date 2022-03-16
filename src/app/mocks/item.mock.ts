import { Item } from '../models/item.model';

export const itemMock: Item = {
  id: 'ace3156d-22bf-405f-a6e6-173a0c9ed163',
  title: 'visit parents',
  done: true,
  createdAt: '2022-03-15T00:16:28.028Z',
};

export const getAllResponseMock: Item[] = [
  {
    id: '9491c969-21e2-4a10-804d-19011d4c473e',
    title: 'buy notebook',
    done: false,
    createdAt: '2022-03-15T00:16:28.028Z',
  },
  {
    id: '6f7a6746-9795-4f7b-8262-4f2db8866711',
    title: 'complete tasks',
    done: true,
    createdAt: '2022-03-13T00:16:28.028Z',
  },
];

export const deleteResponseMock: Item = {
  id: 'f1325f9a-e283-43eb-83f5-6d95b63fe645',
  title: 'complete tasks',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const createResponseMock: Item = {
  id: '705f602a-7cf9-4819-b551-6fed5bc23efe',
  title: 'sleep',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const createBodyMock: Item = {
  title: 'sleep',
  done: false,
};

export const updateDoneBodyMock: { id: string; done: boolean } = {
  id: 'c2cdfadd-f075-4af0-9c27-f42dae8468b6',
  done: true,
};

export const updateDoneResponseMock: Item = {
  id: 'c2cdfadd-f075-4af0-9c27-f42dae8468b6',
  title: 'buy mouse',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const updateTitleBodyMock: { id: string; title: string } = {
  id: 'a19cab2d-4080-4df6-b0c2-dc495f18ad37',
  title: 'buy MacBook',
};

export const updateTitleResponseMock: Item = {
  id: 'a19cab2d-4080-4df6-b0c2-dc495f18ad37',
  title: 'buy MacBook',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const saveUpdateApiBodyMock: Item = {
  id: 'a9981958-8488-45e1-881c-6a2d985fb79f',
  title: 'sleep early',
  done: false,
};

export const saveUpdateApiResponseMock: Item = {
  id: 'a9981958-8488-45e1-881c-6a2d985fb79f',
  title: 'sleep early',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const saveCreateApiBodyMock: Item = {
  title: 'go to school',
  done: false,
};

export const saveCreateApiResponseMock: Item = {
  id: '44d4d3c9-871d-4e21-a91b-8d4b0c06942c',
  title: 'go to school',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const getApiResponseMock: Item[] = [
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

export const deleteApiResponseMock: Item = {
  id: '420776b0-9db4-4438-9125-6593569144bb',
  title: 'go to church',
  done: false,
  createdAt: '2022-03-13T00:16:28.028Z',
};

export const patchApiResponseMock: Item = {
  id: '8be2712c-7527-4ece-bf1a-a74e7459c045',
  title: 'sleep',
  done: true,
  createdAt: '2022-03-13T00:16:28.028Z',
};
