import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

import VueDaumPostcode from 'vue-daum-postcode';
import 'v-slim-dialog/dist/v-slim-dialog.css';
import SlimDialog from 'v-slim-dialog';

Vue.use(SlimDialog);
Vue.use(VueDaumPostcode);

Vue.mixin({
	methods: {
		// 전역 알림 창
		sAlert(text, title, okLabel) {
			title = title ? title : '알림';

			text = text ? text : '';
			okLabel = okLabel ? okLabel : '확인';

			/**
			 * @param String message
			 * @param Object options default { title, okLabel = 'OK', size }
			 */
			const options = { title: title, size: 'sm', okLabel: okLabel };
			this.$dialogs.alert(text, options).then(res => {
				console.log(res); // {ok: true|false|undefined}
			});
		},
		// 전역 경고창
		sWarnning(text, title, confirmButtonText) {
			title = title ? title : '경고';
			text = text ? text : '';
			confirmButtonText = confirmButtonText ? confirmButtonText : '확인';
			this.$swal({
				title,
				text,
				confirmButtonText,
				icon: 'warning',
			});
		},
		// 전역 확인 창
		async sConfirm(text, param) {
			let params = {};
			// 파라미터로 온 값들을 세팅
			for (let data in param) {
				params.append(data, param[data]);
			}
			// 내용 세팅
			if (text) {
				params.title = text;
			}

			// 취소 버튼
			params.showCancelButton = true;
			// 확인 버튼에 텍스트 내용이 없다면 '예'로 초기화
			if (!params.confirmButtonText) {
				params.confirmButtonText = '예';
			}
			if (!params.cancelButtonText) {
				params.cancelButtonText = '아니오';
			}
			return await this.$swal(params).then(result => {
				return result.isConfirmed;
			});
		},
		checkBizNo(bizNo) {
			// 사업자 번호 체크

			let checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
			let i,
				chkSum = 0,
				c2,
				remander;
			bizNo = bizNo.replace(/-/gi, '');
			if (bizNo.length != 10) {
				return false;
			}
			for (i = 0; i <= 7; i++) {
				chkSum += checkID[i] * bizNo.charAt(i);
			}
			c2 = '0' + checkID[8] * bizNo.charAt(8);
			c2 = c2.substring(c2.length - 2, c2.length);
			chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
			remander = (10 - (chkSum % 10)) % 10;

			return Math.floor(bizNo.charAt(9)) == remander;
		},
		/**********************************************
		 * @method : getToday
		 * @note  현재 날짜 리턴
		 * @author : es-seungglee
		 ***********************************************/
		getToday() {
			let date = new Date();
			let year = date.getFullYear();
			let month = new String(date.getMonth() + 1);
			let day = new String(date.getDate());
			if (month.length == 1) {
				month = '0' + month;
			}
			if (day.length == 1) {
				day = '0' + day;
			}

			return year + '-' + month + '-' + day;
		},
	},
});

Vue.config.productionTip = false;

// 통화로 변경해 주는 필터링
Vue.filter('currency', function(value, flag) {
	if (!value) {
		return;
	} else {
		value = value.toString();
		if (value.indexOf('.') != -1) {
			// 소수점 들어왔을 시
			if (flag) {
				// 반올림 여부
				value = Math.round(value);
			} else {
				let values = value.split('.');
				return values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + values[1];
			}
		}
		return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
});

// 넘겨진 번호를 사업자 번호 포맷에 맞춰서 마스킹 해주는 필터링
Vue.filter('bizNoFilter', function(value, type) {
	if (!value) return;
	if (value.includes('-')) {
		return value;
	}
	var formatNum = '';
	try {
		if (value.length == 10) {
			if (type == 0) {
				formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-*****');
			} else {
				formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
			}
		}
	} catch (e) {
		formatNum = value;
		console.log(e);
	}
	return formatNum;
});

Vue.filter('dateFilter', (value, type) => {
	if (!value) return '';
	if (!type) {
		type = '-';
	}
	return value.substr(0, 4) + type + value.substr(4, 2) + type + value.substr(6, 2);
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
