<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">고객사 현황</h4>
			</div>
			<div class="inner-wrap">
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
									@click="choiceItem(item)"
								>
									<td>{{ idx + 1 }}</td>
									<td>{{ item.clientNm }}</td>
									<td>{{ item.bizNo | bizNoFilter }}</td>
									<td>
										{{ item.contractDateFrom | dateFilter }}
										~ {{ item.contractDateTo | dateFilter }}
									</td>
									<td>
										<button type="button" class="button button-state button-state__2options true">
											<span class="button-txt button-txt__true">계약중</span>
											<span class="button-txt button-txt__false">계약해지</span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">
						<button type="button" class="button__back">
							<span class="icon icon-prev-page-white"></span>
							<span class="blind">이전페이지</span>
						</button>
						고객사 모듈 등록
					</h3>
				</div>
				<div class="component-area">
					<div class="component-box component-box-top">
						<strong class="content__title">
							{{ clientNm }}
						</strong>
						<div class="switch-box">
							<p class="component__title">즉시반영</p>
							<el-switch v-model="immediateYn"> </el-switch>
						</div>
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
								<tr
									class="row"
									v-for="(item, idx) in clientMenuList"
									:key="item.clientMenuId + item.menuNm"
								>
									<td>{{ idx + 1 }}</td>
									<td>{{ item.menuNm }}</td>
									<td>
										<button
											type="button"
											class="button button-state button-state__2options"
											:class="{ true: item.useYn == 'Y', false: item.useYn == 'N' }"
											@click="updateUseFlag(item)"
										>
											<span class="button-txt button-txt__true">사용</span>
											<span class="button-txt button-txt__false">미사용</span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectClientList } from '@/api/client';
import { selectClientMenuList, syncClientMenu } from '@/api/clientModule';
export default {
	async created() {
		await this.selectClientList();
		if (this.clientList.length > 0) {
			this.clientId = this.clientList[0].clientId;
			this.clientNm = this.clientList[0].clientNm;
		}
	},
	watch: {
		clientId() {
			this.selectClientMenuList();
			this.clientMenuVO.clientId = this.clientId;
		},
	},
	data() {
		return {
			pagingVO: {
				pageNo: 0,
				searchKind: '1',
			},
			clientList: [],
			clientId: 0,
			clientMenuList: [],
			clientMenuVO: {},
			clientNm: '',
			immediateYn: false,
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
		async selectClientMenuList() {
			let res = await selectClientMenuList(this.clientId);
			console.log(res);
			if (res.result == 0) {
				this.clientMenuList = res.data;
			}
		},
		choiceItem(item) {
			if (this.clientId == item.clientId) {
				return;
			}
			this.clientId = item.clientId;
		},
		async updateUseFlag(item) {
			this.sConfirm('사용 여부를 변경하시겠습니까?', async () => {
				this.clientMenuVO = item;
				this.clientMenuVO.immediateYn = this.immediateYn ? 'Y' : 'N';
				this.clientMenuVO.useYn = this.clientMenuVO.useYn == 'Y' ? 'N' : 'Y';
				let res = await syncClientMenu(this.clientMenuVO);
				if (res.result == 0) {
					this.selectClientMenuList();
				}
				this.sAlert(res.resultMsg);
			});
		},
	},
};
</script>

<style></style>
