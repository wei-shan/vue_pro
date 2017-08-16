<template>
	<section>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to='news/list'>
					<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
					<div class="mui-media-body">news</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to='/photo/list/0'>
					<span class="mui-icon mui-icon-image"></span>
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/goods/list/1">
					<span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">location</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">Search</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-list"></span>
					<div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul>
	</section>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>