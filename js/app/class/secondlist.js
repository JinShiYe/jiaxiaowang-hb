mui.init({
	pullRefresh: {
		container: "#secondlist", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
		down: {
			height: 50, //可选,默认50.触发下拉刷新拖动距离,
			auto: true, //可选,默认false.自动下拉刷新一次
			contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
			contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
			contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
			callback: endpullfresh//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
});

function endpullfresh() {
	//业务逻辑代码，比如通过ajax从服务器获取新数据；

	//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
	mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
}