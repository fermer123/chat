import {IData} from '@src/types';
import axios from './index';

const postData = async (url: string, data: IData) => {
  await axios.post<IData>(url, {data});
};
export default postData;
