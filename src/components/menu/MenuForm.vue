<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>전체 메뉴</span>
			</h4>
			<div class="tree-area">
				<ul id="tree" class="tree tree-menu">
					<tree-view :item="treeData" :key="idx"></tree-view>
				</ul>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">메뉴 등록</h3>
				</div>
				<div class="component-area">
					<h5 class="content__title">거래처 등록</h5>
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
										value="page"
										class="input input-radio"
										checked
									/>
									<label for="pageTypePage">페이지</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageType"
										value="group"
										id="pageTypeGroup"
										class="input input-radio"
									/>
									<label for="pageTypeGroup">그룹</label>
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
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">컴포넌트</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">메타정보</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
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
export default {
	components: {
		TreeView,
	},
	data() {
		return {
			treeData: {
				name: '메뉴',
				children: [
					{
						name: '영업 CRM',
						children: [
							{
								name: '영업 기회',
								children: [{ name: '거래처 등록' }, { name: '거래처 조회' }],
							},
							{
								name: '영업 활동',
								children: [{ name: '영업 활동 등록' }, { name: '영업 활동 현황' }],
							},
							{
								name: '고객',
								children: [{ name: '고객 등록' }, { name: '고객 현황' }],
							},
						],
					},
					{
						name: '유연 근무',
						children: [
							{
								name: '유연 근무 유형',
								children: [{ name: '유연 근무 등록' }, { name: '유연 근무 조회' }],
							},
							{
								name: '근태 관리',
								children: [
									{ name: '출/퇴근 등록' },
									{ name: '근무 실적 조회' },
									{ name: '근무 계획 변경 신청' },
									{ name: '연장 근무 신청' },
									{ name: '휴가 신청' },
									{ name: '출장 신청' },
								],
							},
							{
								name: '승인 처리',
								children: [
									{ name: '승인 처리 (근무 계획 변경)' },
									{ name: '승인 처리 (연장/휴가/외근/출장)' },
								],
							},
						],
					},
					{
						name: '비용 정산',
						children: [
							{
								name: '법인 카드',
								children: [{ name: '카드 정산 신청' }, { name: '카드 정산 내역' }],
							},
							{
								name: '일반 비용',
								children: [{ name: '비용 정산 신청' }, { name: '비용 정산 내역' }],
							},
						],
					},
					{
						name: 'WEB 주문',
						children: [
							{ name: '품목 등록' },
							{ name: '품목 조회' },
							{ name: '주문 등록' },
							{ name: '장바구니' },
							{ name: '주문서' },
							{ name: '주문 조회' },
							{ name: '입금 내역 조회' },
						],
					},
					{ name: '구매 SCM' },
					{
						name: 'EIS',
						children: [
							{
								name: '재무 관리',
								children: [{ name: '재무 분석' }, { name: '손익 상세' }],
							},
							{
								name: '영업 관리',
								children: [{ name: '영업 실적' }],
							},
							{
								name: 'CRM',
								children: [
									{ name: '영업 기회 현황' },
									{ name: '영업 활동 현황' },
									{ name: '예상 매출 현황' },
								],
							},
							{
								name: '구매 관리',
								children: [{ name: '구매 실적' }],
							},
							{
								name: '프로젝트',
								children: [{ name: '프로젝트 예실 현황' }, { name: '프로젝트 원가 분석' }],
							},
						],
					},
				],
			},
		};
	},
};
</script>

<style></style>
