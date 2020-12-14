import { doAxios } from './api';

// 코드 마스터 조회
function selectCodeMasterList(pagingVO) {
	return doAxios('/code/codeMasterList', 'get', pagingVO);
}

// 마스터 저장
function insertCodeMaster(masterVO) {
	return doAxios('/code/codeMaster', 'post', masterVO);
}

// 마스터 수정
function updateCodeMaster(masterVO) {
	return doAxios('/code/codeMaster', 'put', masterVO);
}

// 마스터 삭제
function deleteCodeMaster(codeMasterId) {
	return doAxios(`/code/codeMaster/${codeMasterId}`, 'delete');
}

// 코드 리스트 조회
function selectCodeList(pagingVO) {
	return doAxios('/code/codeList', 'get', pagingVO);
}

// 코드 저장
function insertCode(codeVO) {
	return doAxios('/code', 'post', codeVO);
}

// 코드 수정
function updateCode(codeVO) {
	return doAxios('/code', 'put', codeVO);
}

// 코드 삭제
function deleteCode(codeId) {
	return doAxios(`/code/${codeId}`, 'delete');
}

// 코드 순서 변경
function moveCode(gu, ord, codeMasterId) {
	return doAxios(`/code/moveCode/${gu}/${ord}/${codeMasterId}`, 'put');
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
