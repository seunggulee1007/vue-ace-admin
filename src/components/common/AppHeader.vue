<template>
	<header class="header admin-header" v-if="isUserLogin">
		<div>
			<h1 class="logo">
				<p class="mark">
					<span>A</span>
				</p>
				<p>
					<span><span class="color">ACE</span> Business Portal</span>
					<span>Agile Centric Efficiency</span>
				</p>
			</h1>
			<h2 class="page__title">슈퍼관리자센터</h2>
			<button type="button" class="button__nav">
				<span class="nav-bar"></span>
				<span class="nav-bar"></span>
				<span class="nav-bar"></span>
				<span class="blind">메뉴열기</span>
			</button>
			<div class="gnb-wrap">
				<nav class="admin-gnb">
					<ul class="lst-gnb">
						<li class="lst-gnb__title">
							<p>메뉴</p>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/menu/menu" class="lst-gnb__link">메뉴 등록</router-link>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/menu/systemCode" class="lst-gnb__link">시스템 코드 등록</router-link>
						</li>
						<li class="lst-gnb__title">
							<p>계약관리</p>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/contract/client" class="lst-gnb__link">고객사 등록</router-link>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/contract/clientModule" class="lst-gnb__link"
								>고객사 모듈 등록</router-link
							>
						</li>
					</ul>
					<button type="button" class="button__close">
						<span class="close-bar"></span>
						<span class="close-bar"></span>
						<span class="blind">메뉴닫기</span>
					</button>
				</nav>
			</div>
			<div class="buttons">
				<button class="button__logout" @click="logoutUser">
					<span class="icon icon-logout"></span>
					로그아웃
				</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.sConfirm('로그아웃 하시겠습니까?', () => {
				this.$store.commit('clearLoginInfo');
				this.$store.commit('clearUserInfo');
				this.$router.push('/login');
			});
		},
	},
};
</script>

<style></style>
