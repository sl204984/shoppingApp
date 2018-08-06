import { UploadFile } from '../../src/utils/fetch';

/**
 * 多图上传
 * @param files [path, path, path, ...]
 */
export const uploadImages = body => {
  return UploadFile({
    url: 'upload/files',
    body,
    multi: true
  })
};