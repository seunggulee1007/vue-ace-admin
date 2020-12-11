import { doAxios } from './api';

function searchBizInfo(bizNo) {
	return doAxios(`/biz/bizInfo/${bizNo}`, 'get');
}
export { searchBizInfo };
