import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth/auth';
import User from './user/user';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		Auth,
		User,
	},
	plugins: [
		createPersistedState({
			//주목! : 여기에 쓴 모듈만 저장됩니다.
			paths: ['User'],
		}),
	],
});
