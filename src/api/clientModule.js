import { doAxios } from './api';

function selectClientMenuList(clientId) {
	return doAxios(`/clientMenu/${clientId}`, 'get');
}

function syncClientMenu(data) {
	return doAxios('/clientMenu', 'post', data);
}
export { selectClientMenuList, syncClientMenu };
