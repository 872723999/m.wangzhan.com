/*! 惰性加载 by Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible")){if(a.abovethetop(this,j)||a.leftofbegin(this,j)){}else{if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit){return !1}}else{c.trigger("appear"),b=0}}}})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAATSURBVHjaYvj//z8DAAAA//8DAAj8Av7TpXVhAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return !a.loaded});if(i=a(e),j.load){var f=i.length;
j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return !(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return !a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return !a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return !a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return !a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);$(function(){$("img").lazyload({skip_invisible:false,threshold:800,effect:"fadeIn"})});
/*! 惰性加载 by Mika Tuupola */
/*图片滑动*/
$(function(){change(0);var i=0;var count=$(".gd_pic li").length;var jsq=setInterval(function(){i++;if(i>count-1){i=0;}change(i);},3000);$(".gd_num").find("li").each(function(index){$(this).hover(function(){clearInterval(jsq);change(count-1-index);i=count-1-index;},function(){jsq=setInterval(function(){i++;if(i>count-1){i=0;}change(i);},3000);});});$(".gd_pic").find("li").hover(function(){clearInterval(jsq);},function(){jsq=setInterval(function(){i++;if(i>count-1){i=0;}change(i);},3000);});});function change(i){var count=$(".gd_pic li").length;$(".banner_box").find('li').hide();$(".banner_box").find('li').eq(i).fadeIn(1000);$(".banner_num").find("li").css('background','rgba(255,102,0,0.7)');$(".banner_num").find("li").eq(count-i-1).css('background','rgba(51,51,51,0.7)');}
/*图片滑动*/
/*导航下拉*/
$(function(){$(".nav_r_nav").hide();$(".nav").find(".nav_dt").hover(function(){$(this).find(".nav_r_nav").stop(false,true).slideDown();},function(){$(this).find(".nav_r_nav").stop(false,true).slideUp();})});
/*导航下拉*/
/*选项卡*/
function setTab(name,cursel,n){for(i=1;i<=n;i++){var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);menu.className=i==cursel?"hover":"";con.style.display=i==cursel?"block":"none";}}
/*选项卡*/

/*名师风采栏目页右侧图片轮换*/
(function ($) {
   $.fn.swBanner=function(options){
     var defaults={
	     animateTime:300,
		 delayTime:5000
	 }
   var setting=$.extend({},defaults,options);
   
   return this.each(function(){
      $obj=$(this);
	  var o=setting.animateTime;
	  var d=setting.delayTime;
	  var $oban=$obj.find(".banList li");
	  var _len=$oban.length;
	  var $nav=$obj.find(".fomW a");
	  var _index=0;
	  var timer;
	  //图片轮换
	  function showImg(n){
	     $oban.eq(n).addClass("active").siblings().removeClass("active");
		 $nav.eq(n).addClass("current").siblings().removeClass("current");
	  }
	  //自动播放
	  function player(){
	    timer=setInterval(function(){
		   var _index=$obj.find(".fomW").find("a.current").index();
		   showImg((_index+1)%_len);
		},d)
	  }
	  //
	  $nav.click(function(){
	     if(!($oban.is(":animated"))){
	     _index=$(this).index();
		 showImg(_index);
		 }
	  });
	  //
	  $oban.hover(function(){
	    clearInterval(timer);
	  
	  },function(){
	    player();
	  
	  });
	   player();
   });
   
   }
})(jQuery);
/*名师风采栏目页右侧图片轮换*/

/*图片滚动*/
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var div=$(this),ul=$("ul",div),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v;}var li=$("li",ul),itemLength=li.size(),curr=o.start;div.css("visibility","visible");li.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});div.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var liSize=o.vertical?height(li):width(li);var ulSize=liSize*itemLength;var divSize=liSize*v;li.css({width:li.width(),height:li.height()});ul.css(sizeCss,ulSize+"px").css(animCss,-(curr*liSize));div.css(sizeCss,divSize+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll);});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll);});if(o.btnGo)$.each(o.btnGo, function(i,val){$(val).click(function(){return go(o.circular?o.visible+i:i);});});if(o.mouseWheel&&div.mousewheel)div.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll);});if(o.auto)setInterval(function(){go(curr+o.scroll);},o.auto+o.speed);function vis(){return li.slice(curr).slice(0,v);};function go(to){if(!running){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular) {if(to<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*liSize)+"px");curr=to==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll;}else if(to>=itemLength-v+1){ul.css(animCss,-((v)*liSize)+"px");curr=to==itemLength-v+1?v+1:v+o.scroll;}else curr=to;}else{if(to<0||to>itemLength-v)return;else curr=to;}running=true;ul.animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());running=false;});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled");}}return false;};});};function css(el,prop){return parseInt($.css(el[0],prop))||0;};function width(el){return el[0].offsetWidth+css(el,'marginLeft')+css(el,'marginRight');};function height(el){return el[0].offsetHeight+css(el,'marginTop')+css(el,'marginBottom');};})(jQuery);
/*图片滚动*/
$(document).ready(function(){$('#bmdt').jCarouselLite({auto:1500,visible:5,vertical:true,scroll:1,});});


/*! 底部广告栏弹出 */
function bottomad(){
	$('.bottom_box').slideDown(1000);
}
$(function(){
	setTimeout(function(){bottomad()},10000);
});
$(function(){
	$('.bottom_close_btn').click(function(){$('.bottom_box').slideUp(500);$('.footer').css("padding-bottom","20px")});
});


/*! 底部广告链接 */
$(function(){
	$('#bottom_link').click(function(event){
		event.preventDefault();
		window.open("http://www.nmgxdf.com/zhuanti/2016bdqb/");
	});
});



//公告轮播
  $(window).load(function() {
  $('.flexslider').flexslider();
  });
/*
 * 
 * 公告轮播
 *
 */
(function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.container.width(((d.count+d.cloneCount)*d.width())+2000);d.newSlides=a(".slides > li",d);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left"}).show()},100);d.container.css({marginLeft:(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px"})}else{d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).filter(":first").fadeIn(400,function(){})}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var g=a('<ol class="flex-control-nav"></ol>');var k=1;for(var l=0;l<d.count;l++){g.append("<li><a>"+k+"</a></li>");k++}if(d.containerExists){a(d.controlsContainer).append(g);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(g);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var f=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(f);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(f);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){a(document).keyup(function(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){d.resume()})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var e=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(e);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(e);d.pausePlay=a(".flex-pauseplay li a",d)}var h=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(h).text(h);d.pausePlay.click(function(i){i.preventDefault();(a(this).hasClass("pause"))?d.pause():d.resume()})}if(d.vars.touchSwipe&&"ontouchstart" in document.documentElement){d.each(function(){var i,j=20;isMoving=false;function o(){this.removeEventListener("touchmove",m);i=null;isMoving=false}function m(s){if(isMoving){var p=s.touches[0].pageX,q=i-p;if(Math.abs(q)>=j){o();var r=(q>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(r)){d.flexAnimate(r,d.vars.pauseOnAction)}}}}function n(p){if(p.touches.length==1){i=p.touches[0].pageX;isMoving=true;this.addEventListener("touchmove",m,false)}}if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",n,false)}})}if(d.vars.animation.toLowerCase()=="slide"){d.sliderTimer;a(window).resize(function(){d.newSlides.width(d.width());d.container.width(((d.count+d.cloneCount)*d.width())+2000);clearTimeout(d.sliderTimer);d.sliderTimer=setTimeout(function(){d.flexAnimate(d.currentSlide)},300)})}d.vars.start(d)};d.flexAnimate=function(f,e){if(!d.animating){d.animating=true;if(e){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(f).addClass("active")}d.atEnd=(f==0||f==d.count-1)?true:false;if(!d.vars.animationLoop){if(f==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(f==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled");d.pause();d.vars.end(d)}else{d.directionNav.removeClass("disabled")}}}d.vars.before(d);if(d.vars.animation.toLowerCase()=="slide"){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop){d.slideString=(-1*(d.count+1))*d.slides.filter(":first").width()+"px"}else{d.slideString=(-1*(f+d.cloneOffset))*d.slides.filter(":first").width()+"px"}}d.container.animate({marginLeft:d.slideString},d.vars.animationDuration,function(){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop){d.container.css({marginLeft:(-1*d.count)*d.slides.filter(":first").width()+"px"})}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop){d.container.css({marginLeft:-1*d.slides.filter(":first").width()+"px"})}}d.animating=false;d.currentSlide=f;d.vars.after(d)})}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(f).fadeIn(d.vars.animationDuration,function(){d.animating=false;d.currentSlide=f;d.vars.after(d)})}}};d.animateSlides=function(){if(!d.animating){var e=(d.currentSlide==d.count-1)?0:d.currentSlide+1;d.flexAnimate(e)}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text("play")}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text("pause")}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.init()};a.flexslider.defaults={animation:"fade",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,touchSwipe:true,prevText:"Previous",nextText:"Next",pausePlay:false,randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);

/*
 * 
 * 公告划线动画
 *
 */
 $(function(){
      // 监听滚动事件
      $(window).scroll(function(){
           // 获得div的高度
           var h = $(".newslide-block").offset().top; //你要滚到位置的div
           if($(this).scrollTop()>h-700 && $(this).scrollTop() < h+200){


              // 滚动到指定位置

             $('.borderslide_1').stop(true).animate({
                height:'370px'
              },300)
              $('.borderslide_2').stop(true).delay(300).animate({
                  width:'362px'
              },300)
              $('.borderslide_3').stop(true).delay(600).animate({
                  height:'370px'
              },300)
              $('.borderslide_4').stop(true).delay(900).animate({
                  width:'362px'
              },300)

          }
      });

  })


// 其余tab切换
 $(".tab-title-1").hover(function(){
      $('.tab1 .tab-con-list').show();
      $('.tab2 .tab-con-list').hide();
      $(this).css("border","4px solid #84417a");
      $(this).parent().find(".tab-title-2").css("border","4px solid #c9c9c9");
    },function(){            
      $('.tab1 .tab-con-list').show();
      $('.tab2 .tab-con-list').hide();
    });
$(".tab-title-2").hover(function(){
      $('.tab2 .tab-con-list').show();
      $('.tab1 .tab-con-list').hide();
      $(this).css("border","4px solid #84417a");
      $(this).parent().find(".tab-title-1").css("border","4px solid #c9c9c9");
    },function(){            
      $('.tab2 .tab-con-list').show();
      $('.tab1 .tab-con-list').hide();
    });


// 师资力量
(function(){
  function G(s){
    return document.getElementById(s);
  }
  
  function getStyle(obj, attr){
    if(obj.currentStyle){
      return obj.currentStyle[attr];
    }else{
      return getComputedStyle(obj, false)[attr];
    }
  }
  
  function Animate(obj, json){
    if(obj.timer){
      clearInterval(obj.timer);
    }
    obj.timer = setInterval(function(){
      for(var attr in json){
        var iCur = parseInt(getStyle(obj, attr));
        iCur = iCur ? iCur : 0;
        var iSpeed = (json[attr] - iCur) / 4;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        obj.style[attr] = iCur + iSpeed + 'px';
        if(iCur == json[attr]){
          clearInterval(obj.timer);
        }
      }
    }, 30);
  }

  var oPic = G("picBox");
  var oList = G("listBox");
  
  var oPrev = G("prev");
  var oNext = G("next");
  var oPrevTop = G("prevTop");
  var oNextTop = G("nextTop");

  var oPicLi = oPic.getElementsByTagName("li");
  var oListLi = oList.getElementsByTagName("li");
  var len1 = oPicLi.length;
  var len2 = oListLi.length;
  
  var oPicUl = oPic.getElementsByTagName("ul")[0];
  var oListUl = oList.getElementsByTagName("ul")[0];
  var w1 = oPicLi[0].offsetWidth;
  var w2 = oListLi[0].offsetWidth;

  oPicUl.style.width = w1 * len1 + "px";
  oListUl.style.width = w2 * len2 + "px";

  var index = 0;
  
  var num = 4;
  var num2 = Math.ceil(num / 2);

  function Change(){

    Animate(oPicUl, {left: - index * w1});
    
    if(index < num2){
      Animate(oListUl, {left: 0});
    }else if(index + num2 <= len2){
      Animate(oListUl, {left: - (index - num2 + 1) * w2});
    }else{
      Animate(oListUl, {left: - (len2 - num) * w2});
    }

    for (var i = 0; i < len2; i++) {
      oListLi[i].className = "";
      if(i == index){
        oListLi[i].className = "on";
      }
    }
  }
  
  oNextTop.onclick = oNext.onclick = function(){
    index ++;
    index = index == len2 ? 0 : index;
    Change();
  }

  oPrevTop.onclick = oPrev.onclick = function(){
    index --;
    index = index == -1 ? len2 -1 : index;
    Change();
  }

  for (var i = 0; i < len2; i++) {
    oListLi[i].index = i;
    oListLi[i].onclick = function(){
      index = this.index;
      Change();
    }
  }
  
})();



// 资讯
 $(".news-tab-title h4:nth-child(2)").hover(function(){
      $(this).css("background","#333").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".news-tab-2").show();
      $(".news-tab-1").hide();
      $(".news-tab-3").hide();
	  $(".news-tab-4").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".news-tab-2").show();
      $(this).siblings().find("a").css("color","#000");
});
$(".news-tab-title h4:nth-child(1) a").css("color","#fff");
$(".news-tab-title h4:nth-child(1)").hover(function(){
      $(this).css("background","#333").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".news-tab-1").show();
      $(".news-tab-2").hide();
      $(".news-tab-3").hide();
	  $(".news-tab-4").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".news-tab-1").show();
     $(this).siblings().find("a").css("color","#000");
});

$(".news-tab-title h4:nth-child(3)").hover(function(){
      $(this).css("background","#333").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".news-tab-3").show();
      $(".news-tab-1").hide();
      $(".news-tab-2").hide();
	  $(".news-tab-4").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".news-tab-3").show();
      $(this).siblings().find("a").css("color","#000");
});

$(".news-tab-title h4:nth-child(4)").hover(function(){
      $(this).css("background","#333").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".news-tab-4").show();
      $(".news-tab-1").hide();
      $(".news-tab-2").hide();
	  $(".news-tab-4").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".news-tab-4").show();
      $(this).siblings().find("a").css("color","#000");
});


// 环境轮播

 var speed=30

  demo7.innerHTML=demo6.innerHTML
  function Marquee19(){
  if(demo7.offsetWidth-demo5.scrollLeft<=0)
  demo5.scrollLeft-=demo6.offsetWidth
  else{
  demo5.scrollLeft++
  }
  }
  var MyMar9=setInterval(Marquee19,speed)
  demo5.onmouseover=function() {clearInterval(MyMar9)}
  demo5.onmouseout=function() {MyMar9=setInterval(Marquee19,speed)}


 demo3.innerHTML=demo2.innerHTML
 function Marquee20(){
  if(demo3.offsetWidth-demo1.scrollLeft<=0)
  demo1.scrollLeft-=demo2.offsetWidth
  else{
  demo1.scrollLeft++
  }
  }
 var MyMar10=setInterval(Marquee20,speed)
  demo1.onmouseover=function() {clearInterval(MyMar10)}
  demo1.onmouseout=function() {MyMar10=setInterval(Marquee20,speed)}
  
  
  demo11.innerHTML=demo10.innerHTML
 function Marquee21(){
  if(demo11.offsetWidth-demo9.scrollLeft<=0)
  demo9.scrollLeft-=demo10.offsetWidth
  else{
  demo9.scrollLeft++
  }
  }
 var MyMar8=setInterval(Marquee21,speed)
  demo1.onmouseover=function() {clearInterval(MyMar8)}
  demo1.onmouseout=function() {MyMar10=setInterval(Marquee21,speed)}



// 教学流程切换
 $(".envt-tab-title h4:nth-child(2)").hover(function(){
      $(this).css("background","#ff283d").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".envt-tab-2").show();
      $(".envt-tab-1").hide();
	  $(".envt-tab-3").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".envt-tab-2").show();
      $(this).siblings().find("a").css("color","#000");
});
$(".envt-tab-title h4:nth-child(1) a").css("color","#fff");
$(".envt-tab-title h4:nth-child(1)").hover(function(){
      $(this).css("background","#ffbe00").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".envt-tab-1").show();
      $(".envt-tab-2").hide();
      $(".envt-tab-3").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".envt-tab-1").show();
     $(this).siblings().find("a").css("color","#000");
});
$(".envt-tab-title h4:nth-child(3)").hover(function(){
      $(this).css("background","#01aba8").find("a").css("color","#fff");
      $(this).siblings().find("a").css("color","#000");
      $(".envt-tab-3").show();
      $(".envt-tab-2").hide();
      $(".envt-tab-1").hide();
      $(this).siblings().css("background","#f0f0f0");
    },function(){            
      $(".envt-tab-3").show();
     $(this).siblings().find("a").css("color","#000");
});



function show(a){
  
  $(".taba").addClass('active');
  $($(".taba")[a]).siblings().removeClass('active');
    $(".hidden_a").hide();
    $($(".hidden_a")[a]).show();
};
