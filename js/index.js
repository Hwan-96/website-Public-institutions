$(document).ready(function () {
  /* Header------------------------------------------------- */
  $(".gnb").hover(function(){
    $(this).find(".gnb-main .gnb-subAll").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".gnb-main .gnb-subAll").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  $(window).scroll(function(){
    let pos = $(window).scrollTop();

    if(pos>100){
      $(".utill-menu").stop().slideUp(300);
    }else{
      $(".utill-menu").stop().slideDown(300);
    };

    if(pos>500){
      $(".aside").addClass('active');
    }else{
      $(".aside").removeClass('active');
    };
  });

  bb = true;
  $(".trigger_btn").click(function(){
    $(this).toggleClass("on");
    if(bb){
      $(".quick_icon .icon6").stop(true,true).animate({"bottom":"60px"},500,"easeOutBack");
      $(".quick_icon .icon5").stop(true,true).animate({"bottom":"110px"},500,"easeOutBack");
      $(".quick_icon .icon4").stop(true,true).animate({"bottom":"160px"},500,"easeOutBack");
      $(".quick_icon .icon3").stop(true,true).animate({"bottom":"210px"},500,"easeOutBack");
      $(".quick_icon .icon2").stop(true,true).animate({"bottom":"260px"},500,"easeOutBack");
      $(".quick_icon .icon1").stop(true,true).animate({"bottom":"310px"},500,"easeOutBack");
      $(".quick_icon .icon7").stop(true,true).animate({"bottom":"360px"},500,"easeOutBack");
      bb = false;
    }else{
      $(".quick_icon li").stop(true,true).animate({"bottom":"0px"},200);
      bb = true;
    };
  });


  /* tab--------------------------------------------------- */
  $(".tabBtn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");

    $(".tabContents .tab").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  /* 2번쨰 탭메뉴 ------------------------------ */
  $(".tabBtn2 li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result2 = $(this).attr("data-alt");

    $(".tabContents2 .Btab").removeClass("active");
    $("#"+result2).addClass("active").hide().fadeIn();
  });

  /* Bannner----------------------------------------------- */
  function bannerAuto(){
    $(".banS1 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS1 ul li:first").appendTo(".banS1 ul");
      $(this).css({"marginLeft":"0px"})
    });
    $(".banS2 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS2 ul li:first").appendTo(".banS2 ul");
      $(this).css({"marginLeft":"0px"})
    });
    $(".banS3 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS3 ul li:first").appendTo(".banS3 ul");
      $(this).css({"marginLeft":"0px"})
    });
    $(".banS4 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS4 ul li:first").appendTo(".banS4 ul");
      $(this).css({"marginLeft":"0px"})
    });
    $(".banS5 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS5 ul li:first").appendTo(".banS5 ul");
      $(this).css({"marginLeft":"0px"})
    });
  };
  bauto = setInterval(bannerAuto,3000);


  /* BanS Click ------------------------------------- */
  $(".ban_btn .ban_right").click(function(){
    $(".banS1 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS1 ul li:first-child").appendTo(".banS1 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS2 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS2 ul li:first-child").appendTo(".banS2 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS3 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS3 ul li:first-child").appendTo(".banS3 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS4 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS4 ul li:first-child").appendTo(".banS4 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS5 ul").stop(true,true).animate({"marginLeft":"-=310px"},400,function(){
      $(".banS5 ul li:first-child").appendTo(".banS5 ul");
      $(this).css({"marginLeft":"0px"});
    })
  });

  $(".ban_btn .ban_left").click(function(){
    $(".banS1 ul").stop(true,true).animate({"marginLeft":"+=310px"},400,function(){
      $(".banS1 ul li:last-child").prependTo(".banS1 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS2 ul").stop(true,true).animate({"marginLeft":"+=310px"},400,function(){
      $(".banS2 ul li:last-child").prependTo(".banS2 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS3 ul").stop(true,true).animate({"marginLeft":"+=310px"},400,function(){
      $(".banS3 ul li:last-child").prependTo(".banS3 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS4 ul").stop(true,true).animate({"marginLeft":"+=310px"},400,function(){
      $(".banS4 ul li:last-child").prependTo(".banS4 ul");
      $(this).css({"marginLeft":"0px"});
    })
    $(".banS5 ul").stop(true,true).animate({"marginLeft":"+=310px"},400,function(){
      $(".banS5 ul li:last-child").prependTo(".banS5 ul");
      $(this).css({"marginLeft":"0px"});
    })
  });

  $(".ban").hover(function(){
    clearInterval(bauto);
  },function(){
    bauto = setInterval(bannerAuto,3000);
  });


  /* news tab------------------------------------ */
  $(".tabBtn3 li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result3 = $(this).attr("data-alt");

    $(".tabContents3 .Tabs-3rd").removeClass("active");
    $("#"+result3).addClass("active").hide().fadeIn();
  });

  $(".tabBtn4 li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result4 = $(this).attr("data-alt");

    $(".tabContents4 .newsTap").removeClass("active");
    $("#"+result4).addClass("active").hide().fadeIn();
  });

  /* SNS btn -----------------------------------------*/
  let nold=0;
  $(".nright").click(function(){
    nnew=nold+1;
    nnum=$(".ban_list li").length;
    if(nnew<nnum){
      $(".ban_list li").eq(nold).hide();
      $(".ban_list li").eq(nnew).show();
      nold=nnew;
    }
  });
  $(".nleft").click(function(){
    nnew=nold-1;
    if(nnew>=0){
      $(".ban_list li").eq(nold).hide();
      $(".ban_list li").eq(nnew).show();
      nold=nnew;
    }
  });

  /* 서브배너 버튼 */
  
  let bnum=0;

  $(".subban_btn .subban_right").click(function(){

    if(bnum<4){
      $(".sub-Banner-inner ul").stop(true,true).animate({marginLeft:"-=215px"},500);
      bnum++;
      if(bnum==0){
        $(".subban_btn .subban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subban_btn .subban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum==4){
        $(".subban_btn .subban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subban_btn .subban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }
  });
  $(".subban_btn .subban_left").click(function(){
    if(bnum>0){
      $(".sub-Banner-inner ul").stop(true,true).animate({marginLeft:"+=215px"},500);
      bnum--;
    
      if(bnum==0){
        $(".subban_btn .subban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subban_btn .subban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum==4){
        $(".subban_btn .subban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subban_btn .subban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    };
  });


/* 서브배너 버튼 2 ------------------ */
  let bnum2=0;

  $(".subB2 .subban_R_Btn2").click(function(){

    if(bnum2<1){
      $(".subB2-inner ul").stop(true,true).animate({marginLeft:"-=215px"},500);
      bnum2++;
      if(bnum2==0){
        $(".subB2 .subban_L_Btn2").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subB2 .subban_L_Btn2").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum2==1){
        $(".subB2 .subban_R_Btn2").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subB2 .subban_R_Btn2").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }
  });
  $(".subB2 .subban_L_Btn2").click(function(){
    if(bnum2>0){
      $(".subB2-inner ul").stop(true,true).animate({marginLeft:"+=215px"},500);
      bnum2--;
    
      if(bnum2==0){
        $(".subB2 .subban_L_Btn2").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subB2 .subban_L_Btn2").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum2==1){
        $(".subB2 .subban_R_Btn2").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".subB2 .subban_R_Btn2").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    };
  });
  
  /* Footer 유관사이트 SelectBox */
  $(".selectBox-main").click(function(){
    $(this).find(".selectBox-sub").stop().slideToggle();
  });


});