import { FetchRequest, UploadQiniuFile } from '../../src/utils/fetch';

export const fetchQiniuToken = body => {
  return FetchRequest({
    url: 'upload/qiniu/shopping', 
    method: 'POST', 
    body
  });
}
/**
 * 多图上传
 * @param files [path, path, path, ...]
 */
export const uploadImages = body => {
  return UploadQiniuFile({
    body,
    multi: true,
    name: 'shopping'
  })
};