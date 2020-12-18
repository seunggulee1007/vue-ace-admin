<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">시스템 코드 그룹</h4>
			</div>
			<div class="inner-wrap">
				<div class="component-box component-box-top">
					<select v-model="pagingVO.searchKind">
						<option value="1">그룹명</option>
						<option value="2">그룹 정보</option>
					</select>
					<div class="input-box">
						<input class="input" type="text" v-model="pagingVO.searchKeyword" placeholder="입력하세요" />
						<button type="button" class="button" @click="selectCodeMasterList">
							<span class="icon icon-search"></span>
							조회
						</button>
					</div>
				</div>
				<div class="table-wrap">
					<table class="table">
						<thead>
							<tr>
								<th>No.</th>
								<th>그룹 아이디</th>
								<th>그룹명</th>
								<th>그룹 정보</th>
								<th>사용여부</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="row"
								v-for="(item, idx) in codeMasterList"
								:key="item.codeMasterId"
								@click="choiceCodeMaster(item)"
							>
								<td>{{ idx + 1 }}</td>
								<td>{{ item.codeMasterId }}</td>
								<td>{{ item.codeMasterNm }}</td>
								<td>{{ item.codeMasterInfo }}</td>
								<td>{{ item.useYn == 'Y' ? '사용' : '미사용' }}</td>
							</tr>
						</tbody>
					</table>
					<div class="buttons buttons--center">
						<button type="button" class="button button__more">
							더보기
						</button>
					</div>
				</div>
				<div class="component-box-wrap">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹 아이디</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" readonly v-model="codeMasterVO.codeMasterId" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="codeMasterVO.codeMasterNm"
									ref="codeMasterNm"
								/>
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
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="codeMasterVO.codeMasterInfo"
									ref="codeMasterInfo"
								/>
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
										value="Y"
										id="pageActiveY"
										class="input input-radio"
										v-model="codeMasterVO.useYn"
									/>
									<label for="pageActiveY">사용</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										value="N"
										id="pageActiveN"
										class="input input-radio"
										v-model="codeMasterVO.useYn"
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
					<button type="submit" class="button button__submit" @click="saveMaster">저장</button>
					<button type="button" class="button button__cancel" @click="initMaster">초기화</button>
					<button type="button" class="button button__delete" @click="deleteMaster">삭제</button>
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
						시스템 코드 등록
					</h3>
				</div>
				<div class="component-area">
					<div class="component-box-top">
						<strong class="content__title">{{ codeMasterNm }}</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>코드</th>
									<th>코드명</th>
									<th>코드 정보</th>
									<th>보기순서</th>
									<th>사용여부</th>
								</tr>
							</thead>
							<tbody>
								<tr
									class="row"
									v-for="(item, idx) in codeList"
									:key="item.codeId"
									@click="choiceCode(item)"
								>
									<td>{{ idx + 1 }}</td>
									<td>{{ item.code }}</td>
									<td>{{ item.codeNm }}</td>
									<td>{{ item.codeInfo }}</td>
									<td>{{ item.ord }}</td>
									<td>{{ item.useYn == 'Y' ? '사용' : '미사용' }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="component-box-wrap">
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">코드 아이디</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" readonly v-model="codeVO.codeId" />
								</div>
							</div>
						</div>

						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">코드 명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="codeVO.codeNm"
										ref="codeNm"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">코드 정보</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="codeVO.codeInfo"
										ref="codeInfo"
									/>
								</div>
							</div>
						</div>
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 1</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input"
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.char_1"
										/>
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 1</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input"
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.int_1"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 2</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input"
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.char_2"
										/>
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 2</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.int_2"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 3</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.char_3"
										/>
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 3</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.int_3"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 4</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.char_4"
										/>
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 4</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.int_4"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 5</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.char_5"
										/>
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 5</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input
											class="input "
											type="text"
											placeholder="입력하세요"
											v-model="codeVO.int_5"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="component-box" v-if="codeVO.codeId">
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
											v-model="codeVO.useYn"
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
											v-model="codeVO.useYn"
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
						<button type="submit" class="button button__submit" @click="saveCode">저장</button>
						<button type="button" class="button button__cancel" @click="initCode">초기화</button>
						<button type="button" class="button button__delete" @click="deleteCode">삭제</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {
	selectCodeMasterList,
	insertCodeMaster,
	updateCodeMaster,
	deleteCodeMaster,
	selectCodeList,
	insertCode,
	updateCode,
	deleteCode,
	moveCode,
} from '@/api/systemCode';
export default {
	async created() {
		await this.selectCodeMasterList();
	},
	data() {
		return {
			pagingVO: {
				pageNo: 0,
				searchKeyword: '',
				searchKind: 1,
			},
			codePagingVO: {
				pageNo: 0,
			},
			codeMasterVO: {
				useYn: 'Y',
			},
			codeVO: {
				useYn: 'Y',
			},
			codeMasterList: [],
			codeList: [],
			codeMasterNm: '',
			codeMasterId: '',
		};
	},
	methods: {
		async selectCodeMasterList() {
			let res = await selectCodeMasterList(this.pagingVO);
			this.codeMasterList = res.data;
			if (this.codeMasterList.length > 0 && !this.codeMasterVO.codeMasterId) {
				await this.choiceCodeMaster(this.codeMasterList[0]);
			} else if (this.codeMasterList.length == 0) {
				this.initMaster();
				this.codeList = [];
				this.initCode();
			}
		},
		async saveMaster() {
			let txt = '저장';
			if (this.codeMasterVO.codeMasterId) {
				txt = '수정';
			}
			this.sConfirm(txt + '하시겠습니까?', async () => {
				if (!this.codeMasterVO.codeMasterNm) {
					this.sAlert('그룹명을 입력해주세요.');
					this.$refs.codeMasterNm.focus();
					return;
				} else if (!this.codeMasterVO.codeMasterInfo) {
					this.sAlert('그룹 정보를 입력해 주세요.');
					this.$refs.codeMasterInfo.focus();
					return;
				}
				let res;
				if (!this.codeMasterVO.codeMasterId) {
					res = await insertCodeMaster(this.codeMasterVO);
				} else {
					res = await updateCodeMaster(this.codeMasterVO);
				}
				if (res.result == 0) {
					this.selectCodeMasterList();
					this.initMaster();
				}
				this.sAlert(res.resultMsg);
			});
		},
		// 마스터 정보 초기화
		initMaster() {
			this.codeMasterVO = {
				useYn: 'Y',
			};
			this.codeMasterId = '';
			this.codeMasterNm = '';
			this.codeList = [];
			this.initCode();
		},
		// 마스터 삭제
		async deleteMaster() {
			this.sConfirm('삭제하시겠습니까?', async () => {
				// TODO
				let res = deleteCodeMaster(this.codeMasterVO.codeMasterId);
				if (res.result == 0) {
					this.selectCodeMasterList();
				}
				this.sAlert(res.resultMsg);
			});
		},
		choiceCodeMaster(item) {
			this.codeMasterVO = JSON.parse(JSON.stringify(item));
			this.codeMasterId = item.codeMasterId;
			this.codeMasterNm = item.codeMasterNm;
			this.selectCodeList();
		},
		choiceCode(item) {
			this.codeVO = JSON.parse(JSON.stringify(item));
		},
		async selectCodeList() {
			this.codePagingVO.searchId = this.codeMasterId;
			let res = await selectCodeList(this.codePagingVO);
			if (res.result == 0) {
				this.codeList = res.data;
			}
			this.codeVO.codeMasterNm = this.codeMasterNm;
			this.codeVO.codeMasterId = this.codeMasterId;
		},
		initCode() {
			this.codeVO = {
				codeMasterNm: this.codeMasterNm,
				codeMasterId: this.codeMasterId,
				useYn: 'Y',
			};
		},
		async saveCode() {
			let txt = '저장';
			if (this.codeVO.codeId) {
				txt = '수정';
			}
			console.log(this.codeVO);
			this.sConfirm(txt + '하시겠습니까?', async () => {
				if (!this.codeVO.codeNm) {
					this.sAlert('코드명을 입력해 주세요.');
					this.$refs.codeNm.focus();
					return;
				} else if (!this.codeVO.codeInfo) {
					this.sAlert('코드 정보를 입력해 주세요.');
					this.$refs.codeInfo.focus();
					return;
				}
				let res;
				if (this.codeVO.codeId) {
					res = await updateCode(this.codeVO);
				} else {
					res = await insertCode(this.codeVO);
				}
				if (res.result == 0) {
					this.initCode();
					this.selectCodeList();
				}
				this.sAlert(res.resultMsg);
			});
		},
		async deleteCode() {
			let res = await deleteCode(this.codeVO.codeId);
			if (res.result == 0) {
				this.selectCodeList();
			}
			this.sAlert(res.resultMsg);
		},
		// 최상단으로 순서 변경
		async moveTop() {
			if (this.codeVO.ord == 1) {
				return;
			}
			this.changeOrd(1);
		},
		// 상단으로 변경
		async moveUp() {
			this.changeOrd(2);
		},
		// 하단으로 순서 변경
		async moveDown() {
			this.changeOrd(3);
		},
		// 최하단으로 순서 변경
		moveBottom() {
			if (this.codeList.length == this.codeVO.ord) {
				return;
			}
			this.changeOrd(4);
		},
		async changeOrd(gu) {
			let res = await moveCode(gu, this.codeVO.ord, this.codeVO.codeMasterId);
			if (res.result == 0) {
				this.codeVO.ord = res.data + 1;
			}
			this.selectCodeList();
		},
	},
};
</script>

<style></style>
