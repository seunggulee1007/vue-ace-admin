<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>전체 메뉴</span>
			</h4>
			<div class="tree-area">
				<ul id="tree" class="tree tree-menu">
					<tree-view :item="treeData" @choiceMenu="choiceMenu"></tree-view>
				</ul>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">메뉴 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box component-box-top">
						<h5 class="content__title" v-if="!addFlag && parMenuNm">{{ parMenuNm }}</h5>
						<h5 class="content__title" v-else>{{ menuVO.menuNm }}</h5>
						<button
							type="button"
							class="button button__add"
							v-if="addFlag && menuVO.menuYn == 1"
							@click="addSubMenu"
						>
							<span class="icon icon-add"></span>
							하위메뉴 추가
						</button>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">메뉴/페이지 명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" v-model="menuVO.menuNm" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">유형</p>
						</div>
						<div class="component-box-cnt">
							<ul class="radio-options">
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageTypePage"
										id="pageTypePage"
										value="2"
										class="input input-radio"
										v-model="menuVO.menuYn"
									/>
									<label for="pageTypePage">페이지</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageType"
										value="1"
										id="pageTypeGroup"
										class="input input-radio"
										v-model="menuVO.menuYn"
									/>
									<label for="pageTypeGroup">메뉴</label>
								</li>
							</ul>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">페이지 URL</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" v-model="menuVO.pageUrl" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">컴포넌트</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" v-model="menuVO.component" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">메타정보</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" v-model="menuVO.metaInfo" />
							</div>
						</div>
					</div>
					<div class="component-box" v-if="menuVO.menuId">
						<div class="component-box-top">
							<p class="component__title">순서 변경</p>
						</div>
						<div class="component-box-cnt">
							<div class="buttons">
								<button type="button" class="button button__move-top" @click="moveTop">
									최상단으로 올리기
								</button>
								<button type="button" class="button button__move-up" @click="moveUp">
									한칸 위로 올리기
								</button>
								<button type="button" class="button button__move-down" @click="moveDown">
									한칸 아래로 내리기
								</button>
								<button type="button" class="button button__move-bottom" @click="moveBottom">
									최하단으로 내리기
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사용여부</p>
						</div>
						<div class="component-box-cnt">
							<ul class="radio-options">
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageActive"
										value="Y"
										id="pageActiveY"
										class="input input-radio"
										v-model="menuVO.useYn"
									/>
									<label for="pageActiveY">사용</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageActive"
										value="N"
										id="pageActiveN"
										class="input input-radio"
										v-model="menuVO.useYn"
									/>
									<label for="pageActiveN">미사용</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons" v-if="menuVO.menuId">
						<button type="button" class="button button__submit" @click="modifyMenu">
							수정
						</button>
						<button type="button" class="button button__submit" @click="deleteMenu">
							삭제
						</button>
					</div>
					<div class="buttons" v-else>
						<button type="button" class="button button__submit" @click="addMenu" v-if="!addFlag">
							추가
						</button>
						<button type="button" class="button button__cancel">초기화</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import TreeView from '@/components/common/TreeView.vue';
import { selectMenuList, updateMenu, insertMenu, deleteMenu, moveMenu } from '@/api/menu';
import { EventBus } from '@/utils/eventBus';
export default {
	created() {
		this.selectMenuList();
		EventBus.$on('choiceMenu', this.choiceMenu);
	},
	components: {
		TreeView,
	},
	methods: {
		async selectMenuList() {
			let res = await selectMenuList();
			if (res.result == 0) {
				this.treeData = res.data;
				this.treeData.isOpen = true;
			}
		},
		choiceAll() {
			this.addFlag = false;
			this.menuVO = {};
		},
		async addMenu() {
			this.sConfirm('추가하시겠습니까?', async () => {
				let res = await insertMenu(this.menuVO);
				if (res.result == 0) {
					this.selectMenuList();
					this.menuVO = res.data;
				}
				this.sAlert(res.resultMsg);
			});
		},
		// 메뉴 선택 이벤트
		choiceMenu(data) {
			if (data.menuId == 0) {
				this.addFlag = false;
				this.parMenuNm = '전체';
				this.menuVO = { menuYn: 1, useYn: 'Y', parMenuId: 0, crtId: this.$store.getters.getUserId };
			} else {
				if (data.menuYn == 2) {
					this.addFlag = false;
				} else {
					this.addFlag = true;
				}
				this.menuVO = JSON.parse(JSON.stringify(data));
				this.menuVO.chgId = this.$store.getters.getUserId;
				this.childCnt = this.menuVO.children.length;
				delete this.menuVO.children;
			}
		},
		// 하위 메뉴 추가 버튼 클릭 이벤트
		addSubMenu() {
			let parMenuId = this.menuVO.menuId;
			this.parMenuNm = this.menuVO.menuNm;
			this.addFlag = false;
			this.menuVO = {
				menuYn: 1,
				useYn: 'Y',
				parMenuId,
				crtId: this.$store.getters.getUserId,
			};
		},
		modifyMenu() {
			this.sConfirm('수정하시겠습니까?', async () => {
				if (!this.menuVO.menuNm) {
					this.sAlert('메뉴/페이지 명을 입력해 주세요.');
					return;
				}
				this.menuVO.chgId = this.$store.getters.getUserId;
				let res = await updateMenu(this.menuVO);
				this.sAlert(res.resultMsg);
				if (res.result == 0) {
					this.selectMenuList();
					this.menuVO = res.data;
					this.addFlag = this.menuVO.menuYn == 1;
				}
			});
		},
		async deleteMenu() {
			this.sConfirm('삭제하시겠습니까?\n상위메뉴인 경우 하위 메뉴도 함께 삭제됩니다.', async () => {
				let res = await deleteMenu(this.menuVO.menuId);
				if (res.result == 0) {
					this.selectMenuList();
					this.menuVO = {
						parMenuId: 0,
						menuYn: 1,
						useYn: 'Y',
						crtId: this.$store.getters.getUserId,
					};
				}
				this.sAlert(res.resultMsg);
			});
		},
		// 최상단으로 순서 변경
		async moveTop() {
			if (this.menuVO.ord == 1) {
				return;
			}
			let res = await moveMenu(1, this.menuVO.parMenuId, this.menuVO.ord);
			if (res.result == 0) {
				this.menuVO.ord = res.data + 1;
			}
			this.selectMenuList();
		},
		// 상단으로 변경
		async moveUp() {
			let res = await moveMenu(2, this.menuVO.parMenuId, this.menuVO.ord);
			if (res.result == 0) {
				this.menuVO.ord = res.data + 1;
			}
			this.selectMenuList();
		},
		// 하단으로 순서 변경
		async moveDown() {
			let res = await moveMenu(3, this.menuVO.parMenuId, this.menuVO.ord);
			console.log(res);
			if (res.result == 0) {
				this.menuVO.ord = res.data + 1;
			}
			this.selectMenuList();
		},
		// 최하단으로 순서 변경
		async moveBottom() {
			if (this.childCnt == this.menuVO.ord) {
				return;
			}
			let res = await moveMenu(4, this.menuVO.parMenuId, this.menuVO.ord);
			if (res.result == 0) {
				this.menuVO.ord = res.data + 1;
			}
			this.selectMenuList();
		},
	},
	data() {
		return {
			treeData: {},
			parMenuNm: '',
			addFlag: false,
			childCnt: 0,
			menuVO: {
				parMenuId: 0,
				menuYn: 1,
				useYn: 'Y',
				crtId: this.$store.getters.getUserId,
			},
		};
	},
};
</script>

<style></style>
