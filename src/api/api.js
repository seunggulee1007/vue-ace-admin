import axios from 'axios';
import { setInterceptors } from '@/api/common';
import router from '@/router/router';
import store from '@/store/store';

function createInstance() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}/api`,
	});
	return setInterceptors(instance);
}

const instance = createInstance();
//test
function doAxios(url, method, params, config) {
	return instance({
		url,
		method,
		params,
		config,
	})
		.then(response => {
			// 토큰을 계속 갱신해 준다. 토큰은 20분간 유효하다.
			if (response.headers.ACCESS_TOKEN) {
				store.commit('setToken', response.headers.ACCESS_TOKEN);
				store._vm.$cookie.set(process.env.VUE_APP_AUTH_TOKEN, response.headers.ACCESS_TOKEN);
			}
			return response.data;
		})
		.catch(error => {
			let res = {
				result: -1,
			};
			if (error.response) {
				res = error.response.data;
				res.status = error.response.status;
				if (error.response.status == 401) {
					// 인증 오류라면 메인 페이지로
					// 쿠키에서 인증정보 삭제 후
					store.commit('clearLoginInfo');
					store._vm.$cookie.delete(process.env.VUE_APP_AUTH_TOKEN);
					store._vm.$alert(error.response.resultMsg, '경고', {
						confirmButtonText: '확인',
						callback: action => {
							/*this.$message({
								type: 'info',
								message: `action: ${action}`,
							}); */
							if (action) {
								router.push('/login');
							}
						},
					});
				}
			} else if (!error.status) {
				res.resultMsg = '네트워크 연결을 확인해 주세요';
			} else {
				res.data.resultMsg = error.message;
			}
			store._vm.$message({
				type: 'warnning',
				message: res.resultMsg,
			});
			return res;
		});
}
export { createInstance, doAxios };
