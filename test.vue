<template>
	<div>
		<h1>Template页面</h1>
		<p>{{ name }} - {{time}}</p>
		<p>hello - filters => {{ 'hello' | capitalize }}</p>
		<button @click="handleOnClick">设置名称</button>
	</div>
</template>

<script>
import {
	stateMapper,
	gettersMapper,
	mutationsMapper,
	actionsMapper
} from "./mapper.js";

// 按需引入
const { name } = { ...stateMapper };
const { setName } = { ...mutationsMapper };
const { time } = { ...gettersMapper };
const { getInfo } = { ...actionsMapper };

const mixins = {
	data() {
		return {
			date: 1,
			favor: "apple"
		};
	},
	created: function() {
		console.log("混入对象的钩子被调用");
	},
	methods: {
		foo: function() {
			console.log("foo");
		},
		conflicting: function() {
			console.log("from mixin");
		}
	}
};

export default {
	mixins: [mixins],
	data() {
		return {
			favor: "banner"
		};
	},
	computed: {
		// 引入全部state
		// ...stateMapper
		name,
		time
	},
	filters: {
		capitalize: function(value) {
			if (!value) return "";
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
	},
	created() {
		console.log(this.$data);
		console.log("组件钩子被调用");
	},
	methods: {
		// 引入全部mutation
		// ...mutationsMapper,
		setName,
		getInfo,
		handleOnClick() {
			this.setName({
				name: "hhhh"
			});
			this.getInfo();
		},
		conflicting: function() {
			console.log("from self");
		}
	}
};
</script>
