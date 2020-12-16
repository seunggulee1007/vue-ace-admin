<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">고객사 현황</h4>
			</div>
			<div class="lst-wrap">
				<div class="input-box">
					<select v-model="pagingVO.searchKind">
						<option value="1">고객사명</option>
						<option value="2">대표명</option>
						<option value="3">사업자번호</option>
					</select>
					<input
						class="input "
						type="text"
						placeholder="입력하세요"
						@keyup.enter="selectClientList"
						v-model="pagingVO.searchKeyword"
					/>
					<button type="button" class="button" @click="selectClientList">
						<span class="icon icon-search"></span>
						조회
					</button>
				</div>
				<div class="table-wrap">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>No.</th>
								<th>고객사명</th>
								<th>사업자번호</th>
								<th>계약기간</th>
								<th>계약해지</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="row"
								v-for="(item, idx) in clientList"
								:key="item.clientId"
								@dblclick="choiceClient(item.clientId)"
							>
								<td>{{ idx + 1 }}</td>
								<td>{{ item.clientNm }}</td>
								<td>{{ item.bizNo | bizNoFilter }}</td>
								<td>
									{{ item.contractDateFrom | dateFilter }} ~ {{ item.contractDateTo | dateFilter }}
								</td>
								<td>
									<button type="button" class="button button-state true">
										<span class="button-txt button-txt__true">계약중</span>
										<span class="button-txt button-txt__false">계약해지</span>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">
						<button type="button" class="button__prev-page">
							<span class="icon icon-prev-page-white"></span>
							<span class="blind">이전페이지</span>
						</button>
						고객사 모듈 등록
					</h3>
				</div>
				<div class="component-area">
					<div class="component-top">
						<strong class="content__title">
							고객사명
						</strong>
					</div>
					<div class="table-wrap">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>No.</th>
									<th>모듈명</th>
									<th>사용여부</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>유연근무</td>
									<td>
										<button type="button" class="button button-state true">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>영업CRM</td>
									<td>
										<button type="button" class="button button-state true">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
								<tr class="row">
									<td>3</td>
									<td>비용정산</td>
									<td>
										<button type="button" class="button button-state true">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
								<tr class="row">
									<td>4</td>
									<td>WEB 주문</td>
									<td>
										<button type="button" class="button button-state false">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
								<tr class="row">
									<td>5</td>
									<td>구매 SCM</td>
									<td>
										<button type="button" class="button button-state false">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
								<tr class="row">
									<td>6</td>
									<td>EIS</td>
									<td>
										<button type="button" class="button button-state true">
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectClientList } from '@/api/client';
export default {
	created() {
		this.selectClientList();
	},
	data() {
		return {
			pagingVO: {
				pageNo: 0,
				searchKind: '1',
			},
			clientList: [],
		};
	},
	methods: {
		async selectClientList() {
			let res = await selectClientList(this.pagingVO);
			if (res.result == 0) {
				this.clientList = res.data;
			}
		},
		choiceClient(clientId) {
			this.$emit('choiceClient', clientId);
		},
	},
};
</script>

<style></style>
