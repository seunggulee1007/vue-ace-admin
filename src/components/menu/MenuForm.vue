<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>전체 메뉴</span>
			</h4>
			<div class="tree-area">
				<ul id="tree" class="tree tree-menu">
					<tree-view :item="treeData"></tree-view>
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
						<h5 class="content__title">거래처 등록</h5>
						<button type="button" class="button button__add" v-if="addFlag">
							<span class="icon icon-add"></span>
							하위메뉴 추가
						</button>
						<button type="button" class="button button__add" v-if="!addFlag">
							<span class="icon icon-add"></span>
							취소
						</button>
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
										value="Y"
										class="input input-radio"
										v-model="pageYn"
									/>
									<label for="pageTypePage">페이지</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageType"
										value="N"
										id="pageTypeGroup"
										class="input input-radio"
										v-model="pageYn"
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
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">컴포넌트</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">메타정보</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">순서 변경</p>
						</div>
						<div class="component-box-cnt">
							<div class="buttons">
								<button type="button" class="button button__move-top">
									최상단으로 올리기
								</button>
								<button type="button" class="button button__move-up">
									한칸 위로 올리기
								</button>
								<button type="button" class="button button__move-down">한칸 아래로 내리기</button>
								<button type="button" class="button button__move-bottom">최하단으로 내리기</button>
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
										value="yes"
										id="pageActiveY"
										class="input input-radio"
										checked
									/>
									<label for="pageActiveY">사용</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageActive"
										value="no"
										id="pageActiveN"
										class="input input-radio"
									/>
									<label for="pageActiveN">미사용</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">추가</button>
						<button type="button" class="button button__cancel">취소</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import TreeView from '@/components/common/TreeView.vue';
import { selectMenuList } from '@/api/menu';
export default {
	created() {
		this.selectMenuList();
	},
	components: {
		TreeView,
	},
	methods: {
		async selectMenuList() {
			let res = await selectMenuList();
			if (res.result == 0) {
				console.log(res.data);
				this.treeData = res.data;
			} else {
				this.sAlert(res.resultMsg);
			}
		},
	},
	data() {
		return {
			pageYn: 'Y',
			treeData: {},
			addFlag: true,
		};
	},
};
</script>

<style></style>
