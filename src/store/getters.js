export default {
	isLogin(state) {
		return state.token !== '';
	},
	getToken(state) {
		return state.token;
	},
	getUserId(state) {
		return state.userId;
	},
	getSectionPush(state) {
		return state.sectionPush;
	},
	getSpinnerStatus(state) {
		return state.spinnerStatus;
	},
};
