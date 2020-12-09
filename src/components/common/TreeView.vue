<template>
	<li>
		<div @click="toggle" :class="{ 'lst-tree__menu': isFolder }">
			<span v-if="isFolder" class="icon-folder-open">{{ isOpen ? '-' : '+' }}</span>
			<span @click="clickMenu(item)">{{ item.name }}</span>
		</div>
		<ul class="lst-tree__sub" v-show="isOpen" v-if="isFolder" style="padding-left: 1em;">
			<tree-item
				class="lst-tree__item cursor_hand"
				v-for="(children, index) in item.children"
				:key="index"
				:item="children"
			></tree-item>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'tree-item',
	props: {
		// 컴포넌트에서 사용할 변수
		item: Object,
	},
	data() {
		return {
			isOpen: false, // tree가 열렸는지 확인.
		};
	},
	computed: {
		isFolder() {
			return this.item.children && this.item.children.length;
		},
	},
	methods: {
		/**********************************************
		 * @method : toggle
		 * @note 트리 구조 접고 펴는 함수
		 * @author : seunggu
		 ***********************************************/
		toggle() {
			if (this.isFolder) {
				this.isOpen = !this.isOpen;
			}
		},
		/**********************************************
		 * @method : clickMenu
		 * @note 메뉴 클릭
		 * @author : seunggu
		 ***********************************************/
		async clickMenu(data) {
			if (data.menuId == 0) {
				return;
			}
			console.log('dddd');
		},
	},
};
</script>

<style scoped>
.cursor_hand {
	cursor: pointer;
}
</style>
