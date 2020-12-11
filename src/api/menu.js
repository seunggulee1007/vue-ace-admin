import { doAxios } from './api';

// 사용자 등록
function selectMenuList() {
	return doAxios('/menu/menuList', 'get');
}

function selectMenu(menuId) {
	return doAxios(`/menu/${menuId}`, 'get');
}

function updateMenu(data) {
	return doAxios('/menu/', 'put', data);
}

function insertMenu(data) {
	return doAxios('/menu/', 'post', data);
}

function deleteMenu(menuId) {
	return doAxios(`/menu/${menuId}`, 'delete');
}

function moveMenu(gu, ord, menuId) {
	return doAxios(`/menu/moveMenu/${gu}/${ord}/${menuId}`, 'put');
}
export { selectMenuList, selectMenu, updateMenu, insertMenu, deleteMenu, moveMenu };
