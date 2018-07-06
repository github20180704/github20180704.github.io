// JavaScript Document
$(function(){
	//顶部窗帘效果
	$(".header_ads").slideDown(1200);
	$(".header_adsClose").click(
		function(){
			$(".header_ads").slideUp(1000);
		}
	)
	//城市选单隐现效果
	$(".city_btn,.city_index").hover(
		function(){
			$(".city_index").css("display","block");
		},
		function(){
			$(".city_index").css("display","none");
		}
	)
	//城市选单选择效果
	$(".city_province>a").click(
		function(){
			var a = $(this).html();
			$(".city_btn>a").html(a);
		}
	)
	//选择框文字重置效果
	$(".search_input").focus(
		function sch_f(){
			if($(this).val()=="不限量套餐")
				$(this).val("");
		}
	)
	$(".search_input").blur(
		function sch_b(){
			if($(this).val()=="")
				$(this).val("不限量套餐");
		}
	)
	//选择框按键换区效果
	 var searchText1 = "";
	 var searchText2 = "";
	function btn1(){
			searchText2 = $(".search_input").val();
			$(".search_btn1").unbind("click");
			$(".search_btn2").bind("click",btn2);
			$(".search_btn1").css({background:"#ff8201",color:"white"});
			$(".search_btn2").css({background:"white",color:"#777777"});
			if(searchText1 == "")
			$(".search_input").val("不限量套餐");
			else
			$(".search_input").val(searchText1);
			
	}
	function btn2(){
			searchText1 = $(".search_input").val();
			$(".search_btn2").unbind("click");
			$(".search_btn1").bind("click",btn1);
			$(".search_btn2").css({background:"#ff8201",color:"white"});
			$(".search_btn1").css({background:"white",color:"#777777"});
			if(searchText2 == "")
			$(".search_input").val("");
			else
			$(".search_input").val(searchText2);
	}

	$(".search_btn2").click(btn2)
	
	//选择框下方	文字窗帘广告效果
	function adsMarquee(){
		$(".search_marquee_menu").animate({marginTop:"-20px"},500,
			function(){
				$(".search_marquee_menu>div").last().after($(".search_marquee_menu>div").first());
				$(".search_marquee_menu").css("margin-top","0px");
			}
		)
	}
	var timer1 = setInterval(adsMarquee,5000);
	$(".search_marquee").hover(
		function(){
        	clearInterval(timer1);
		},
		function(){
			timer1 = setInterval(adsMarquee,5000);
		}
	);
	//右侧上下滑动广告效果
	function adsMarquee2(){
	$(".ads_list").animate({marginTop:"-76px"},300)
		.delay(5000)
		.animate({marginTop:"0"},300)
		.delay(5000)
	}
	adsMarquee2();
	var timer2 = setInterval(adsMarquee2,10600);
	$(".ads_marquee").hover(
		function(){
        	clearInterval(timer2);
			$(".ads_list").clearQueue();
		},
		function(){
			timer2 = setInterval(adsMarquee2,10600);
		}
	);
	
	//中部大广告更换效果
	var i = 1;
	var banner_img = ["img/97f012d9-d1b2-41e9-a933-6bb175607928.jpg","img/647c581e-2332-41da-8712-302ce7b26744.jpg","img/f28abeb1-38f5-4f78-b9a6-8538546428a9.jpg","img/217663a6-70de-48f3-b22a-b055715fb57b.jpg","img/4c4f5a4c-c012-4a72-b56b-409e3e1d7a74.png","img/3ad82b97-bfd8-4c67-a5c8-6ef23453c8d5.jpg"]
	function banImg(){
		$(".banner_div").animate({opacity:"0"},0,
			function(){
				$(".banner_div img").attr("src",banner_img[i]);
				$(".banner_div").animate({opacity:"1"},500);
				$(".banner_menu>li").css("background-position","-246px -117px");
				$(".banner_menu>li").eq(i).css("background-position","-229px -117px");
				i++;
				if(i==6)
				i=0;
			}
		)
	}
	banImg();
	var timer3 = setInterval(banImg,5000)
	$(".banner_div").hover(
		function(){
			clearInterval(timer3)
		},
		function(){
			timer3 =setInterval(banImg,5000)
		}
	)
	//中部广告	点击更换效果
	$(".banner_menu>li").click(
		function(){
			i = $(this).index();
			banImg();
		}
	)
	//更换图标效果
	$(".menu_topic").click(
		function(){
			$(this).css("background-position","-223px -659px")
		}
	)
	//左侧菜单栏	悬浮隐现效果
	var down = [".menu_down1",".menu_down2",".menu_down3",".menu_down4",".menu_down5",".menu_down6",".menu_down7"];
	$(".menu_cell").hover(
		function(){
			$(down[$(this).index()]).css("display","block");
		},
		function(){
			$(down[$(this).index()]).css("display","none");	
		}
	)
	//菜单更换效果
	$(".banner_serve_tab1").hover(
		function(){
			$(".banner_serve_tab1").css("background-position","-216px -217px");
			$(".banner_serve_tab1>span").css("color","#ff8201");
			$(".banner_serve_tab2").css("background-position","-216px -288px");
			$(".banner_serve_tab2>span").css("color","#777777");
			$(".searve_display:nth-child(2)").css("display","block");
			$(".searve_display:nth-child(3)").css("display","none");
			
		}
	)
	$(".banner_serve_tab2").hover(
		function(){
			$(".banner_serve_tab1").css("background-position","-216px -253px");
			$(".banner_serve_tab1>span").css("color","#777777");
			$(".banner_serve_tab2").css("background-position","-217px -324px");
			$(".banner_serve_tab2>span").css("color","#ff8201");
			$(".searve_display:nth-child(3)").css("display","block");
			$(".searve_display:nth-child(2)").css("display","none");
			$(".searve_tl,.searve_tr").css("margin-top","-85px")
		}
	)
	//图标菜单左右滚动效果
	$(".searve_tl").click(
		function(){
			$(".searve_div").animate({marginLeft:"-224px"},100,
				function(){
					$(".searve_div>.searve_menu:last").after($(".searve_div>.searve_menu:first"));
					$(".searve_div").css("margin-left","0");	
				}
			);
			$(".searve_div2").animate({marginLeft:"-224px"},100,
				function(){
					$(".searve_div2>.searve_menu:last").after($(".searve_div2>.searve_menu:first"));
					$(".searve_div2").css("margin-left","0");	
				}
			);
		}
	)
	$(".searve_tr").click(
		function(){
			$(".searve_div>.searve_menu:first").before($(".searve_div>.searve_menu:last"));
			$(".searve_div").css("margin-left","-224px");
			$(".searve_div").animate({marginLeft:"0"},100);
			
		
			$(".searve_div2>.searve_menu:first").before($(".searve_div2>.searve_menu:last"));
			$(".searve_div2").css("margin-left","-224px");
			$(".searve_div2").animate({marginLeft:"0"},100);
		}
	)
	//价格表单滑动效果
	$(".form_option").hover(
		function(){
			$(".form_optionlist,.form_optionlist1").slideDown(500)
		},
		function(){
			$(".form_optionlist,.form_optionlist1").slideUp(500)
		}
	)
	//彩色
	function color(){
		var r = parseInt(256*Math.random());
		var g = parseInt(256*Math.random());
		var b = parseInt(256*Math.random());
		$(".form_colorful").css("color","rgb("+r+","+g+","+b+")")
	}
	setInterval(color,1)
	//价格表单选定效果
	$(".form_optionlist>li,.form_optionlist1>li").click(
		function(){
			$(".form_option>input").val($(this).html());	
		}
	)
	//表单更换
	$(".form_checkbox>label").click(
		function(){
			$(".form_checkbox>label").css("color","#777777");
			$(this).css("color","#ff8201");
		}
	)
	$(".form_type>li").click(
		function(){
			var a = $(this).index();
			$(".form_type>li").css("color","#777777");
			$(this).css("color","#ff8201");
			$(".form1").css("display","none");
			$(".form1").eq(a).css("display","block");
		}	
	)
	//拼图轮播
	function recMarquee(){
		$(".recommand_rightDiv").animate({marginLeft:"-1010px"},300,
			function(){
				$(".recommand_page:last").after($(".recommand_page:first"));
				$(".recommand_rightDiv").css("margin-left","0px");
			}
		)
	}
	var timer4 = setInterval(recMarquee,10000);
	//拼图轮播左右键
	$(".recommand_tl").click(
		function(){
			clearInterval(timer4);
			$(".recommand_rightDiv").animate({marginLeft:"-1010px"},300,
				function(){
					$(".recommand_page:last").after($(".recommand_page:first"));
					$(".recommand_rightDiv").css("margin-left","0");	
				}
			);
			timer4 = setInterval(recMarquee,10000);
		}
	)
	$(".recommand_tr").click(
		function(){
			clearInterval(timer4);
			$(".recommand_page:first").before($(".recommand_page:last"));
			$(".recommand_rightDiv").css("margin-left","-1010px");
			$(".recommand_rightDiv").animate({marginLeft:"0"},300);
			timer4 = setInterval(recMarquee,10000);
		}
	)
	//小图轮播及隐藏图标
	$(".main_ctL").click(
		function(){
			$(".main_ctDiv").animate({marginLeft:"-403px"},300,
				function(){
					$(".main_ctDiv>a:last").after($(".main_ctDiv>a:first"));
					$(".main_ctDiv").css("margin-left","0");	
				}
			);
		}
	)
	$(".main_ctR").click(
		function(){
			$(".main_ctDiv>a:first").before($(".main_ctDiv>a:last"));
			$(".main_ctDiv").css("margin-left","-403px");
			$(".main_ctDiv").animate({marginLeft:"0"},300);
		}
	)
	
	$(".companion_td").click(
		function td(){
			$(this).css("transform","rotate(0)");
			$(".companion_list").css({"height":"auto","overflow":"auto"});
			$(this).unbind("click");
			$(this).click(
				function(){
					$(this).css("transform","rotate(180deg)");
					$(".companion_list").css({"height":"70px","overflow":"hidden"});
					$(this).unbind("click");
					$(this).click(td);
				}
			)		
		}
	)
	$(".companion_choice").eq(0).click(
		function(){
			$(".companion_choice").eq(0).css("font-weight","bold");
			$(".companion_choice").eq(1).css("font-weight","normal");
			$(".companion_menu").css("display","none");
			$(".companion_menu").eq(0).css("display","block");
		}
	)
	$(".companion_choice").eq(1).click(
		function(){
			$(".companion_choice").eq(1).css("font-weight","bold");
			$(".companion_choice").eq(0).css("font-weight","normal");
			$(".companion_menu").css("display","none");
			$(".companion_menu").eq(1).css("display","block");
		}
	)
	$(".sideAd_close").click(
		function(){
			$(".sideAd").css("display","none");
		}
	)
})