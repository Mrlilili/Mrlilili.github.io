var app={imgLoad:function(){function c(i){var g=new Image;g.src=i[t],t==i.length-1?(console.log("yes"),$("#imgs").html(n),$("#music")[0].play(),o.init()):g.onload=function(){t++,c(i)}}var i=["http://7xsdec.com5.z0.glb.qiniucdn.com/arrow.png","http://7xsdec.com5.z0.glb.qiniucdn.com/btn-back.png","http://7xsdec.com5.z0.glb.qiniucdn.com/car-light.png","http://7xsdec.com5.z0.glb.qiniucdn.com/car.png","http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p1-1.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p1-2.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p1-3.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p2-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p2-font.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p3-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p3-font1.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p3-font2.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p3-img.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p4-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p4-font.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p5-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p5-car1.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p5-car2.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p6-applybg.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p6-bg.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p7-bg.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p8-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p8-font.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p9-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p9-font.png","http://7xsdec.com5.z0.glb.qiniucdn.com/p10-bg.jpg","http://7xsdec.com5.z0.glb.qiniucdn.com/p10-font.png"],n='<div id="page1"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img class="carBg" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p1-1.png" alt=""><img class="font"                                                                                                 src="http://7xsdec.com5.z0.glb.qiniucdn.com/p1-3.png"                                                                                                 alt=""><div class="carBox"><img class="carLight" src="http://7xsdec.com5.z0.glb.qiniucdn.com/car-light.png" alt=""><img                    class="car" src="http://7xsdec.com5.z0.glb.qiniucdn.com/car.png" alt=""></div></div><div id="page2"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img class="bg" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p2-bg.jpg" alt=""><img                class="animated slideInLeft" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p2-font.png" alt=""></div><div id="page3"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p3-bg.jpg" alt=""><img class="animated fadeIn"                                                                                    src="http://7xsdec.com5.z0.glb.qiniucdn.com/p3-img.png"                                                                                    alt=""><img                class="animated slideInLeft" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p3-font1.png" alt=""><img                class="animated slideInRight" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p3-font2.png" alt=""></div><div id="page4"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p4-bg.jpg" alt=""><img class="animated slideInRight"                                                                                    src="http://7xsdec.com5.z0.glb.qiniucdn.com/p4-font.png"                                                                                    alt=""></div><div id="page8"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p8-bg.jpg" alt=""><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p8-font.png" class="animated slideInLeft" alt=""></div><div id="page9"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p9-bg.jpg" alt=""><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p9-font.png" class="animated slideInRight" alt=""></div><div id="page10"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p10-bg.jpg" alt=""><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p10-font.png" class="animated slideInRight" alt=""></div><div id="page5"><div class="logo"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img class="animated fadeIn" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p5-bg.jpg" alt=""><img                class="animated fadeInLeft" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p5-car1.png" alt=""><img                class="animated fadeInRight" src="http://7xsdec.com5.z0.glb.qiniucdn.com/p5-car2.png" alt=""></div><div id="page6"><div class="log"><img class="logo" src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><div class="applyBox"><input type="text"><input style="top:49px" type="text"><select style="bottom: 179px;"                                                                                                 name="" id=""><option value="">1</option><option value="">1</option><option value="">1</option></select><select style="bottom: 130px;" name="" id=""><option value="">1</option><option value="">1</option><option value="">1</option></select><select style="bottom: 81px;" name="" id=""><option value="">1</option><option value="">1</option><option value="">1</option></select><div class="btn"></div></div></div><div id="page7"><div class="log"><img class="logo" src="http://7xsdec.com5.z0.glb.qiniucdn.com/logo.png" alt=""></div><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/p7-bg.png" alt=""><div class="btn"></div><div class="mask"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/arrow.png" alt=""><div class="btn back"><img src="http://7xsdec.com5.z0.glb.qiniucdn.com/btn-back.png" alt=""></div></div></div>',t=0,o=this;c(i)},init:function(){var c=new pageSwitch("imgs",{duration:1e3,start:0,direction:1,loop:!1,transition:"scroll",mouse:!0,mousewheel:!0,arrowkey:!0}),i="animated";$("#page1").find(".font").addClass("zoomInDown "+i),$("#page1").find(".carBg").addClass(i+" slideInRight"),$("#page1").find(".car").addClass(i+" zoomInRight"),$("#page1").find(".carLight").addClass(i+" fadeIn"),$("#page7>.btn").click(function(){$("#page7 .mask").show(),$(".btn.back").click(function(){$("#page7 .mask").hide(),c.slide(0)})})}};