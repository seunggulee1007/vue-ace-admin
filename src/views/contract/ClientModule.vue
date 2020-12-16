<template>
	<ClientModuleForm @choiceClient="choiceClient" v-if="!clientFlag"></ClientModuleForm>
	<client-form :clientId="clientId" v-else></client-form>
</template>

<script>
import ClientModuleForm from '@/components/contract/ClientModuleForm.vue';
import ClientForm from '@/components/contract/ClientForm.vue';
export default {
	components: {
		ClientModuleForm,
		ClientForm,
	},
	data() {
		return {
			clientId: '',
			clientFlag: false,
		};
	},
	methods: {
		choiceClient(clientId) {
			this.clientFlag = true;
			this.clientId = clientId;
		},
	},
};
</script>

<style></style>
