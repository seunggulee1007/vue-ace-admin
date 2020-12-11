<template>
	<div class="container admin-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">고객사 등록</h3>
				</div>
				<div class="component-area">
					<div class="items-wrap">
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">거래처명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input "
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.clientNm"
										maxlength="150"
										ref="clientNm"
									/>
									<button type="button" class="button" @click="confirmDuple">중복확인</button>
								</div>
								<p class="msg-state" v-if="!idDupleResult">{{ idDupleResultMsg }}</p>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">거래처 종류</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<select class="input-select" v-model="clientVO.clientKind" ref="clientKind">
										<option value="" selected>선택하세요</option>
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">사업자번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input "
										type="text"
										placeholder="하이픈(-) 없이 입력하세요"
										v-model="clientVO.bizNo"
										maxlength="10"
										ref="bizNo"
									/>
									<button type="button" class="button" @click="searchBizInfo">휴/폐업 조회</button>
									<button type="button" class="button" @click="reSearchBizInfo">재 조회</button>
								</div>
								<p class="msg-state">{{ clientVO.bizResultMsg }}</p>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">대표자명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.ceoNm"
										maxlength="30"
										ref="ceoNm"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">법인등록번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.coRegNo"
										ref="coRegNo"
										maxlength="13"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">업태</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.bizCond"
										ref="bizCond"
										maxlength="150"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">업종</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.bizKind"
										ref="bizKind"
										maxlength="150"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">주소</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" readonly />
									<button type="button" class="button" @click="openPostData()">주소 검색</button>
								</div>
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="상세주소"
										v-model="clientVO.addrDetail"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">대표 전화번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.telNo"
										maxlength="11"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">담당자</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.manager"
										maxlength="15"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">휴대전화</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										maxlength="11"
										v-model="clientVO.phone"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">E-Mail</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										v-model="clientVO.email"
										maxlength="50"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">계약금액</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input
										class="input"
										type="text"
										placeholder="입력하세요"
										maxlength="9"
										v-model="clientVO.contractAmt"
									/>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">계약기간</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-term">
									<div class="input-box">
										<input class="input" type="text" placeholder="시작일" readonly />
										<button type="button" class="button__calendar">
											<span class="icon icon-calendar"></span>
											<span class="blind">날짜 선택</span>
										</button>
									</div>
									<p>~</p>
									<div class="input-box">
										<input class="input" type="text" placeholder="종료일" readonly />
										<button type="button" class="button__calendar">
											<span class="icon icon-calendar"></span>
											<span class="blind">날짜 선택</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">등록</button>
						<button type="button" class="button button__cancel">취소</button>
					</div>
				</div>
			</div>
		</section>
		<div class="popup" :class="{ show: openPostFlag }">
			<div class="component-area">
				<div class="popup-top">
					<strong class="popup__title">주소 검색</strong>
				</div>
				<!-- vue-daum-postcode -->
				<div v-if="openPostFlag">
					<vue-daum-postcode @complete="getPostData($event)" />
				</div>
				<button type="button" class="button__close" @click="closeModal">
					<span class="icon icon-close"></span>
					<span class="blind">닫기</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { searchBizInfo } from '@/api/client';
export default {
	data() {
		return {
			idDupleResult: false, // 아이디 중복 체크 여부
			idDupleResultMsg: '거래처명 중복 체크를 해 주세요.',
			clientVO: {
				clientNm: '',
				clientKind: '',
				bizNo: '',
				bizResultMsg: '',
				bizResultEngMsg: '',
				bizResult: '',
				ceoNm: '',
				coRegNo: '',
				bizCond: '',
				bizKind: '',
				postNo: '',
				addr: '',
				addrEng: '',
				addrType: '',
				addrDetail: '',
				buildingCd: '',
				buildingNm: '',
				sido: '',
				sigungu: '',
				sigunguCd: '',
				telNo: '',
				manager: '',
				phone: '',
				contractAmt: 0,
				email: '',
			},

			openPostFlag: false,
		};
	},
	methods: {
		getPostData(data) {
			console.log(data);
			this.openPostFlag = false;
		},
		openPostData() {
			this.openPostFlag = true;
		},
		closeModal() {
			this.openPostFlag = false;
		},
		async searchBizInfo() {
			if (!this.clientVO.bizNo) {
				this.sAlert('사업자번호를 입력해 주세요.');
				return;
			}
			if (!this.checkBizNo(this.clientVO.bizNo)) {
				this.sAlert('사업자번호가 유효하지 않습니다.');
				return;
			}
			let res = await searchBizInfo(this.clientVO.bizNo);
			if (res.result == 0) {
				this.clientVO.bizResultMsg = res.data.resultMsg;
				this.clientVO.bizResultDetailMsg = res.data.detailMsg;
				this.clientVO.bizResultDetailEngMsg = res.data.detailMsgEngl;
			}
			console.log(res);
		},
		// 아이디 중복 체크
		confirmDuple() {
			if (!this.clientNm) {
				this.sAlert('거래처 명을 입력해 주세요');
				this.$refs.clientNm.focus();
				return;
			}
		},
		// 휴폐업 재 조회
		reSearchBizInfo() {},
	},
};
</script>

<style></style>
