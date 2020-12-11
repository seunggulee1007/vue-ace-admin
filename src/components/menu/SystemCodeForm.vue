<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">시스템 코드 그룹</h4>
			</div>
			<div class="inner-wrap">
				<div class="input-box">
					<input class="input" type="text" v-model="searchTerm" placeholder="입력하세요" />
					<button type="button" class="button" @click="rows = []">
						<span class="icon icon-search"></span>
						조회
					</button>
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
							<tr class="row">
								<td>1</td>
								<td>그룹아이디1</td>
								<td>그룹명1</td>
								<td>그룹정보1</td>
								<td>사용</td>
							</tr>
							<tr class="row">
								<td>2</td>
								<td>그룹아이디2</td>
								<td>그룹명2</td>
								<td>그룹정보2</td>
								<td>사용</td>
							</tr>
							<tr class="row">
								<td>3</td>
								<td>그룹아이디3</td>
								<td>그룹명3</td>
								<td>그룹정보3</td>
								<td>미사용</td>
							</tr>
						</tbody>
					</table>
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
					<div class="component-box-top">
						<strong class="content__title">선택된 그룹명</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelectAll1" />
												<label for="checkboxAll1" class="input-checkbox__label">
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</th>
									<th>No.</th>
									<th>그룹명</th>
									<th>코드명</th>
									<th>코드 정보</th>
									<th>사용여부</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect1-1" />
												<label for="checkboxSelect1-1" class="input-checkbox__label">
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>1</td>
									<td>그룹명1</td>
									<td>코드명1</td>
									<td>코드정보1</td>
									<td>사용</td>
								</tr>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect1-2" />
												<label for="checkboxSelect1-2" class="input-checkbox__label">
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>2</td>
									<td>그룹명2</td>
									<td>코드명2</td>
									<td>코드정보2</td>
									<td>사용</td>
								</tr>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect1-3" />
												<label for="checkboxSelect1-3" class="input-checkbox__label">
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>3</td>
									<td>그룹명3</td>
									<td>코드명3</td>
									<td>코드정보3</td>
									<td>미사용</td>
								</tr>
							</tbody>
						</table>
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
						<div class="flex-box">
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">문자열 1</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 1</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
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
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 2</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
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
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 3</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
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
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 4</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
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
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
								</div>
							</div>
							<div class="component-box">
								<div class="component-box-top">
									<p class="component__title">정수형 5</p>
								</div>
								<div class="component-box-cnt">
									<div class="input-box">
										<input class="input " type="text" placeholder="입력하세요" />
									</div>
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
export default {
	data: function() {
		return {};
	},
};
</script>

<style></style>
