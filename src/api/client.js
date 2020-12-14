import { doAxios } from './api';

function searchBizInfo(bizNo) {
	return doAxios(`/biz/bizInfo/${bizNo}`, 'get');
}

function selectClientList(data) {
	return doAxios('/client/clientList', 'get', data);
}

function confirmDuple(clientNm) {
	return doAxios(`/client/confirmDuple/${clientNm}`, 'get');
}

function saveClient(data) {
	return doAxios('/client', 'post', data);
}

function modifyClient(data) {
	return doAxios('/client', 'put', data);
}

export { searchBizInfo, confirmDuple, saveClient, modifyClient, selectClientList };
