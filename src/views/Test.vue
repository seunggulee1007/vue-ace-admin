<template>
	<div>
		<input
			type="file"
			@change="importExcel"
			accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		/>
		<div>
			<div v-for="(item, idx) in items" :key="idx">
				<div v-for="(data, idx) in item" :key="data.일자 + idx">
					<h2
						style="
    color: dodgerblue;
    font-weight: bold;
    font-size: 30px;
"
					>
						{{ idx + 1 }}
					</h2>
					<h1>{{ setComma(data.일자) }}</h1>
					<table>
						<tr>
							<th>기고자</th>
							<td>{{ data.기고자 }}</td>
						</tr>
						<tr>
							<th>제목</th>
							<td>{{ data.제목 }}</td>
						</tr>
						<tr>
							<th>본문</th>
							<td>
								<textarea
									v-html="data.본문"
									style="
    width: 100%;
    height: 200px;
"
								></textarea>
							</td>
						</tr>
						<tr>
							<th>url</th>
							<td><a :href="data.URL" target="_blank">바로가기</a></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import XLSX from 'xlsx';
export default {
	data() {
		return {
			items: [],
			tmpResult: '',
		};
	},
	methods: {
		importExcel(event) {
			this.items = [];
			const file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = e => {
				let data = e.target.result;
				data = reader.result;
				let workbook = XLSX.read(data, { type: 'binary' });
				workbook.SheetNames.forEach(sheetName => {
					const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
					this.items.push(roa);
				});
			};
			reader.readAsBinaryString(file);
		},
	},
};
</script>

<style>
table {
	width: 100%;
	border: 1px solid #444444;
}
th,
td {
	border: 1px solid #444444;
}
</style>
