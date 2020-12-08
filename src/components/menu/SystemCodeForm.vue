<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">시스템 코드 그룹</h4>
			</div>
			<div class="inner-wrap">
				<div class="input-box">
					<input class="input " type="text" placeholder="입력하세요" />
					<button type="button" class="button">
						<span class="icon icon-search"></span>
						조회
					</button>
				</div>
				<div class="table-wrap">
					<vue-good-table
						:columns="columns"
						:rows="rows"
						:fixed-header="true"
						max-height="50vh"
						styleClass="vgt-table"
						:select-options="{ enable: true }"
						@on-selected-rows-change="selectionChanged"
						:pagination-options="{
							enabled: true,
							mode: 'records',
							perPage: 5,
							perPageDropdown: [5, 10],
							position: 'bottom',
							nextLabel: '다음',
							prevLabel: '이전',
							rowsPerPageLabel: '페이지당 줄 수',
							ofLabel: '중',
							allLabel: 'All',
						}"
					/>
				</div>
				<div class="component-box-wrap">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹 아이디</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
								<button type="button" class="button">
									<span class="icon icon-check"></span>
									중복확인
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹 정보</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
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
			</div>
			<div class="buttons-complete">
				<div class="buttons">
					<button type="submit" class="button button__submit">저장</button>
					<button type="button" class="button button__cancel">초기화</button>
					<button type="button" class="button button__delete">삭제</button>
				</div>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h4 class="section__title">시스템 코드 등록</h4>
				</div>
				<div class="component-area">
					<div class="component-box component-box-top">
						<strong class="content__title">선택된 그룹명</strong>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>
							선택 삭제
						</button>
					</div>
					<div class="table-wrap">
						<vue-good-table
							:columns="columns"
							:rows="rows"
							:fixed-header="true"
							max-height="50vh"
							styleClass="vgt-table"
							:select-options="{ enable: true }"
							@on-selected-rows-change="selectionChanged"
							:pagination-options="{
								enabled: true,
								mode: 'records',
								perPage: 10,
								position: 'bottom',
								nextLabel: '다음',
								prevLabel: '이전',
								rowsPerPageLabel: '페이지당 줄 수',
								ofLabel: '중',
								allLabel: 'All',
							}"
						/>
					</div>
					<div class="component-box-wrap">
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">그룹명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">코드 아이디</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input " type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">코드 정보</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input " type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">문자열</p>
							</div>
							<div class="input-box-wrap input-term">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
								<p>~</p>
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">정수형</p>
							</div>
							<div class="input-box-wrap input-term">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
								<p>~</p>
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
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">저장</button>
						<button type="button" class="button button__cancel">초기화</button>
						<button type="button" class="button button__delete">삭제</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
export default {
	data: function() {
		return {
			columns: [
				{
					label: 'No.',
					field: 'num',
				},
				{
					label: '그룹 아이디',
					field: 'groupId',
				},
				{
					label: '그룹 정보',
					field: 'groupInfo',
				},
				{
					label: '사용여부',
					field: 'active',
				},
			],
			rows: [
				{
					num: '1',
					groupId: '그룹아이디1',
					groupInfo: '그룹명1',
					active: '사용',
				},
				{
					num: '2',
					groupId: '그룹아이디2',
					groupInfo: '그룹명2',
					active: '사용',
				},
				{
					num: '3',
					groupId: '그룹아이디3',
					groupInfo: '그룹명3',
					active: '미사용',
				},
			],
		};
	},
	components: {
		VueGoodTable,
	},
	metohds: {
		selectionChanged() {
			// params.selectedRows - all rows that are selected (this page)
		},
	},
};
</script>

<style></style>
