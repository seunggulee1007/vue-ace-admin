import { doAxios } from './api';

function selectCodeMasterList(pagingVO) {
	return doAxios('/code/codeMasterList', 'get', pagingVO);
}

function insertCodeMaster(masterVO) {
	return doAxios('/code/codeMaster', 'post', masterVO);
}

function updateCodeMaster(masterVO) {
	return doAxios('/code/codeMaster', 'put', masterVO);
}

function deleteCodeMaster(codeMasterId) {
	return doAxios(`/code/codeMaster/${codeMasterId}`, 'delete');
}

function selectCodeList(pagingVO) {
	return doAxios('/code/codeList', 'get', pagingVO);
}

function insertCode(codeVO) {
	return doAxios('/code', 'post', codeVO);
}

function updateCode(codeVO) {
	return doAxios('/code', 'put', codeVO);
}

function deleteCode(codeId) {
	return doAxios(`/code/${codeId}`, 'delete');
}

function moveCode(gu, codeMasterId, ord) {
	return doAxios(`/code/moveCode${gu}/${ord}/${codeMasterId}`, 'put');
}
export {
	selectCodeMasterList,
	insertCodeMaster,
	updateCodeMaster,
	deleteCodeMaster,
	selectCodeList,
	insertCode,
	updateCode,
	deleteCode,
	moveCode,
};
