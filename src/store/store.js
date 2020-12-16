import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { getCookie } from '../utils/cookies';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		userId: getCookie(process.env.VUE_APP_USER_ID) || '',
		userNm: getCookie(process.env.VUE_APP_USER_NM) || '',
		token: getCookie(process.env.VUE_APP_AUTH_TOKEN) || '',
	},
	getters,
	mutations,
	actions,
});
