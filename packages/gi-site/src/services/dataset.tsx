import { GI_DATASET_DB, GI_PROJECT_DB } from '../hooks/useUpdate';
import { getUid } from '../pages/Workspace/utils';
import { IS_INDEXEDDB_MODE, SERVICE_URL_PREFIX } from './const';
import { IDataset } from './typing';
import { request } from './utils';
/**
 * 更新或保存指定项目
 * @param id 项目id
 * @param p 项目配置
 * @returns
 */
export const queryDatasetInfo = async (id: string) => {
  if (IS_INDEXEDDB_MODE) {
    return await GI_DATASET_DB.getItem(id);
  } else {
    const response = await request(`${SERVICE_URL_PREFIX}/dataset/${id}`, {
      method: 'get',
    });
    return response.data;
  }
};

export const createDataset = async (params: IDataset) => {
  const dsId = `ds_${getUid()}`;
  const payload = {
    id: dsId,
    ...params,
    gmtCreate: new Date(),
  };
  if (IS_INDEXEDDB_MODE) {
    return await GI_DATASET_DB.setItem(dsId, payload);
  } else {
    const response = await request(`${SERVICE_URL_PREFIX}/dataset/create`, {
      method: 'post',
      data: payload,
    });
    return response.success;
  }
};

export const queryDatasetList = async () => {
  /** 如果是在线模式，则备份一份 **/
  if (IS_INDEXEDDB_MODE) {
    const res = [];
    await GI_DATASET_DB.iterate(item => {
      //@ts-ignore
      res.push(item);
    });
    return res;
  } else {
    const response = await request(`${SERVICE_URL_PREFIX}/dataset/list`, {
      method: 'get',
    });
    return response.data;
  }
};

export const deleteDataset = async (id: string) => {
  /** 如果是在线模式，则备份一份 **/
  if (IS_INDEXEDDB_MODE) {
    GI_DATASET_DB.removeItem(id);
    GI_PROJECT_DB.iterate(item => {
      //@ts-ignore
      const { datasetId, id: PROJECT_ID } = item;
      if (datasetId === id) {
        GI_PROJECT_DB.removeItem(PROJECT_ID);
      }
    });
  } else {
    const response = await request(`${SERVICE_URL_PREFIX}/dataset/delete`, {
      method: 'DELETE',
    });
    return response.success;
  }
};
