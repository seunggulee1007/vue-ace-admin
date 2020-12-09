import { doAxios } from './api';

// 사용자 등록
function selectMenuList() {
	return doAxios('/menu/menuList', 'get');
}

function selectMenu(menuId) {
	return doAxios(`/menu/${menuId}`, 'get');
}

export { selectMenuList, selectMenu };
