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
									<input class="input " type="text" placeholder="입력하세요" />
									<button type="button" class="button">중복확인</button>
								</div>
								<p class="msg-state">중복입니다</p>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">거래처 종류</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<select name="" id="" class="input-select">
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
									<input class="input " type="text" placeholder="하이픈(-) 없이 입력하세요" />
									<button type="button" class="button">휴/폐업 조회</button>
								</div>
								<p class="msg-state">부가가치세 일반과세자</p>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">대표자명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">법인등록번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">업태</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">업종</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">주소</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<button type="button" class="button">주소 검색</button>
									<input class="input" type="text" placeholder="검색해주세요" readonly />
								</div>
								<div class="input-box">
									<input class="input" type="text" placeholder="상세주소" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">대표 전화번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">담당자</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">휴대전화</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">E-Mail</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">계약금액</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input class="input" type="text" placeholder="입력하세요" />
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
	</div>
</template>

<script>
export default {};
</script>

<style></style>
