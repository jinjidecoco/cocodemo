/**
 * Created by Administrator on 2016/5/22.
 */
$(document).ready(function() {

   /* 登陆部分*/

    $(".login").find(".log_in").click(function(){
        $(".login_box").css("display","block");

    })
    $(".username").focus(function(){
       $(this).val("");
    });
    $(".username").blur(function(){
        var parents_use=$(this).parent();
       if(this.value=="" || this.value.length<6){
          var str_msg="请输入正确的邮箱和手机号";
         $(".login_content .error_1").html("请输入正确的邮箱和手机号");
       }else{
           var okMsg="输入正确";
         $(".login_content .error_1").html("输入正确");
       }
    })

    $(".pass").blur(function(){
        if(this.value==""||this.value.length<8){
            $(".login_content .error_2").html("密码错误");
        }else{

            $(".login_content .error_2").html("密码正确");
        }
    })

    $("#login_btn").click(function(){

        $(".login_box").css("display","none");

    })

    $(".nav ul li:lt(7)").mousemove(function(){
        $("#" + $(this).attr("class")).show();
       
        $("#container").show();
        $("#nav_meau").css("border-top", "1px solid #ccc");
        $("#nav_meau").css("border-bottom", "1px solid #ccc");
    })
    
     $("#container").mouseleave(function () {
        $("#container").hide();
    });

    /*, function () {
        $("#" + $(this).attr("class")).hide();
        $("#nav_meau").css("border-top", "1px solid #fff");
        $("#nav_meau").css("border-bottom", "1px solid #fff");

    }*/
   /* $("#container").mousemove(function () {

        $("#xiaomi").show();
    })
    $("#container").mouseleave(function () {
        $("#container").hide();
    })

    $("#serve").hover(function () {
        $("#container").hide();
    })
    $("#community").hover(function () {
        $("#container").hide();
    })
*/
    /*左边导航部分 */

    $(".category_item").hover(function () {
            $("#" + ( $(this).find(".category_content").attr("id"))).show();
            $("#" + ( $(this).find(".category_content").attr("id"))).css("border", "1px solid #ccc");
        },
        function () {
            $("#" + ( $(this).find(".category_content").attr("id"))).hide();
        }
    )
    /*轮播滚动部分*/
    var prevBtn = $(".prev");
    var nextBtn = $(".next");
    var i = 0;
    var photoList=$(".banner_ad .banner_photo li");
    var clone = photoList.first().clone();
        $(".banner_ad .banner_photo").append(clone);
    var count =$(".banner_ad .banner_photo li").length; /*图片数量 为什么用photoList获取length为5？*/
    var circleList=$(".page_guide .page_item li");
        circleList.first().addClass("current");
    var boxContainer=$("#main_banner").find(".content")
    var boxWidth=boxContainer.width();

    /* 封装函数图片盒子向左运动*/
        function moveLeft(){
                 i++;
             if (i==count) {
               $(".banner_photo").css("left","0")
                i=1;
           }
         $(".banner_photo").stop(true).animate({left:-i*boxWidth},20);
           /* 清除一个bug,小圆点不能在第一显示*/
            if(i==count-1) {
                circleList.eq(0).addClass("current").siblings().removeClass("current");
            }else{
                circleList.eq(i).addClass("current").siblings().removeClass("current");
            }
       }
    /* 按钮控制下一页*/
        nextBtn.bind("click",moveLeft);
    /*按钮控制上一页*/
        prevBtn.bind("click", function moveRight(){
                 i--;
             if(i==-1){
             $(".banner_photo").css("left",-(count-1)*boxWidth);
                 i=count-2;
             }
           $(".banner_photo").stop(true).animate({left:-i*boxWidth},20);
          circleList.eq(i).addClass("current").siblings().removeClass("current");
       })
    /* 给小圆圈按钮添加点击事件*/
          circleList.click(function () {
            var index = $(this).index();
              i=index;
            $(".banner_photo").stop(true).animate({left: -index*boxWidth},20);
            $(this).addClass("current").siblings().removeClass("current");
        })
            /*添加自动轮播*/
        var autoPlayer = setInterval(moveLeft, 3000);
        /*当鼠标移入盒子时，关闭自动轮播 移出时继续自动轮播*/

        boxContainer.hover(function () {
            clearInterval(autoPlayer);
         },function(){
            autoPlayer = setInterval(moveLeft, 3000);/* ???? 注意没有var*/
        })
   /* 给商品展示部分图片添加左右移动*/
   /* 向左移动*/
 $(".move_left").click(function(){

     $("#goods_show").find(".content").stop().animate({left: -1239},500);
 })
    /*向右移动*/
 $(".move_right").click(function(){
     $("#goods_show").find(".content").stop().animate({left: 0},500);
 })
     /*给其添加自动切换部分*/
  var time=setInterval(function(){

      $("#goods_show").find(".content").stop().animate({left: -1239},500);
  },3000);
  var timer=setInterval(function(){
      $("#goods_show").find(".content").stop().animate({left: 0},500);
  },3000);

 /*搭配选项卡部分,给选项添加鼠标移入事件*/
      $(".title_2 .classify li").mousemove(function(){
          var index=$(this).index();
          $(".title_2 .classify li").eq(index).addClass("current_item").siblings()
              .removeClass("current_item");
          $(".match_section_right").find("ul").hide();
          $(".match_section_right").find("ul").eq(index).show();
      })
    /*添加鼠标移入使隐藏的div滑动显示*/
      $(".match_section_right li").mouseenter(function(){
          $(this).find(".comment"). slideDown("fast");

      })
    /*添加鼠标移入使显示的div滑动隐藏*/
      $(".match_section_right li").mouseleave(function(){
          $(this).find(".comment"). slideUp("fast");

      });
  /*   内容部分*/

  /*给小按钮添加点击事件*/
    $("#content_section .page_btn:eq(0) li").click(function(){
               var index=$(this).index();
                   page=index;
        $("#content_section").find(".inner_container:eq(0)").stop().animate({left:-298*page},100);
        $(this).addClass("current_page").siblings().removeClass("current_page");
    });
    $("#content_section .page_btn:eq(1) li").click(function(){
        var index=$(this).index();
        page=index;
        $("#content_section").find(".inner_container:eq(1)").stop().animate({left:-298*page},100);
        $(this).addClass("current_page").siblings().removeClass("current_page");
    });
    $("#content_section .page_btn:eq(2) li").click(function(){
        var index=$(this).index();
        page=index;
        $("#content_section").find(".inner_container:eq(2)").stop().animate({left:-298*page},100);
        $(this).addClass("current_page").siblings().removeClass("current_page");
    });
    $("#content_section .page_btn:eq(3) li").click(function(){
        var index=$(this).index();
        page=index;
        $("#content_section").find(".inner_container:eq(3)").stop().animate({left:-298*page},100);
        $(this).addClass("current_page").siblings().removeClass("current_page");
    });
   /* 给按钮添加切换点击事件*/
         var page=1;
    $("#content_section ul li:eq(0)").find(".next_btn").click(function(){
          if(page==4){
            $(this).css("disabled","true")
        }else{
            $("#content_section").find(".inner_container:eq(0)").stop().animate({left:"-=298"},100);
            $(".lit_btn .page_btn li").eq(page).addClass("current_page").siblings()
                .removeClass("current_page");
               page++;
        }
    });
    $("#content_section ul li:eq(0)").find(".prev_btn").click(function(){
        if(page==1){
            $(this).css("disabled","true")
        }else{
            $("#content_section").find(".inner_container:eq(0)").stop().animate({left:"+=298"},100);
            $(".lit_btn .page_btn li").eq(page-2).addClass("current_page").siblings()
                .removeClass("current_page");
                  page--;
        }
    });
    $("#content_section .out_list:eq(1)").find(".next_btn").click(function(){
        if (page == 4) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(1)").stop().animate({left: "-=298"}, 100);
            $(".lit_btn .page_btn:eq(1) li").eq(page).addClass("current_page").siblings()
                .removeClass("current_page");
            page++;
        }
    });
    $("#content_section .out_list:eq(1)").find(".prev_btn").click(function() {
        if (page == 1) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(1)").stop().animate({left: "+=298"}, 100);
            $(".lit_btn .page_btn:eq(1) li").eq(page - 2).addClass("current_page").siblings()
                .removeClass("current_page");
            page--;
        }
    })
    $("#content_section .out_list:eq(2)").find(".next_btn").click(function(){
        if (page == 4) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(2)").stop().animate({left: "-=298"}, 100);
            $(".lit_btn .page_btn:eq(2) li").eq(page).addClass("current_page").siblings()
                .removeClass("current_page");
            page++;
        }
    });
    $("#content_section .out_list:eq(2)").find(".prev_btn").click(function() {
        if (page == 1) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(2)").stop().animate({left: "+=298"}, 100);
            $(".lit_btn .page_btn:eq(2) li").eq(page - 2).addClass("current_page").siblings()
                .removeClass("current_page");
            page--;
        }
    })
    $("#content_section .out_list:eq(3)").find(".next_btn").click(function(){
        if (page == 4) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(3)").stop().animate({left: "-=298"}, 100);
            $(".lit_btn .page_btn:eq(3) li").eq(page).addClass("current_page").siblings()
                .removeClass("current_page");
            page++;
        }
    });
    $("#content_section .out_list:eq(3)").find(".prev_btn").click(function() {
        if (page == 1) {
            $(this).css("disabled", "true")
        } else {
            $("#content_section").find(".inner_container:eq(3)").stop().animate({left: "+=298"}, 100);
            $(".lit_btn .page_btn:eq(3) li").eq(page - 2).addClass("current_page").siblings()
                .removeClass("current_page");
            page--;
        }
    })

    $(".video_list .video_item").click(function(){

        $(".video_container").css("display","block");
    })
    $(".ibtn").click(function(){

        $(".video_container").css("display","none");
    })
}) /*???? end*/

