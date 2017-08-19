<template>
	<footer class="footer">
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<router-link :to="{name:'ShopcartL'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge shopCar" v-text="total"></span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
	</footer>
</template>
<script>
import goods from '../../js/model/goods';
export default {
	data(){
		return {
			total:goods.get()
		}
	}
}
</script>
<style>
.footer {
	height: 40px;
}
</style>