var the_first;
var the_second;
var the_third;
	$(document).ready(function(){
		var template=
				`
					<div class="chattrans">
						<div class="float_window">
							<div class="inner_window">
								<div class="demo_window">
									<a class="Email" href=${the_first} title="" target="_blank"></a> 
									<div class="blank6"></div>
									<a class="Email" href=${the_second} title="" target="_blank"></a> 
									<div class="blank6"></div>
									<a class="Skype" href=${the_third} title="" target="_blank"></a>
									<div class="blank6"></div> 
								</div>
							</div>
							<a href="#" class="go_top" >TOP</a>
						</div>
					</div>
	
					<div class="contact_btn" ></div>
					`
		$('body').html(template);

		var go_top=$('.go_top');
		var btn=$('.contact_btn');
		var chattrans=$('.chattrans');
         btn.click(function(){
         	btn.css("display","none");

         	chattrans.animate({right:0},200);
         })
         chattrans.mouseleave(function(){
         	chattrans.animate({right:'-92px'},200);
         	btn.css("display","block");
         })
           go_top.click(function(){
         	$(body,html).animate(function(){
         		scrollTop:0
         	},1000);
         	return false;
         })

	})
