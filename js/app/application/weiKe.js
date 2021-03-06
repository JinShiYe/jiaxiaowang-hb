/**
 *@author an
 *@description 微课界面实现逻辑
 */
mui.init({
	swipBack:false
})
mui.plusReady(
	function(){
		/**
		 * 各个按钮
		 */
		var btn_grade=document.getElementById("grade");
		var btn_subject=document.getElementById("suject");
		var btn_search=document.getElementById("search");
		//年级按钮 加载监听
		btn_grade.addEventListener('tap',function(){
			openNewPage("choose_grade")
		})
		//科目按钮加载监听
		btn_subject.addEventListener('tap',function(){
			openNewPage("choose_subject")
		})
		//搜索按钮加载监听
		btn_search.addEventListener('tap',function(){
			openNewPage("search")
			
		})
		window.addEventListener('pageRefresh',function(e){
		
		if(typeof (e.detail.data) !== 'undefined'){
			btn_grade.innerText=e.detail.data
		}
		if(typeof (e.detail.subject) !== 'undefined'){
			btn_subject.innerText=e.detail.subject
		}
		
		})
	}
)
//打开页面公用方法
function openNewPage(htmlName){
	mui.openWindow({
					url: htmlName+'.html',
					id: htmlName,
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: false
					}
				});
}
