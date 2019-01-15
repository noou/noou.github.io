$(document).ready(function(){

	console.log($('.navlist li'));

/************************ to highlight on which section you are ****************/

	$(".navlist li").click(function(){
		$(this).addClass("iamselected");
		$(".navlist li").not(this).removeClass("iamselected");  
	});

/********************* highlight active link when scrolled **************************/

	$(window).scroll(function(){
		console.log( $(this).scrollTop());
		$('.page').each(function(){
			var sectionoffset = $(this.hash).offset().top;   // saves dist of that hash trom top
			if(sectionoffset <= $(this).scrollTop()){
				$(this).addClass('iamselected');
			}			

		});
	});


/**************** to change from trans to black when scrolled *************/

	console.log( $(document).scrollTop() );

	$(document).scroll(function(){
		if( $(document).scrollTop() > 95 )
		{
			$('.navwrapper').addClass("notonhomepage");
			$('.logo').addClass("hideme");
		}
		else{
			$('.navwrapper').removeClass("notonhomepage");
			$('.logo').removeClass("hideme");
		}

	});
/******************** hide n show nav *************************/

	$('.toggleMenu').click(function(){
		$('.sidemenu').addClass("showmenu");
		$('.toggleMenu').addClass("changeopacity");
	});

	$('.cross').click(function(){
		$('.sidemenu').removeClass("showmenu");
		$('.toggleMenu').removeClass("changeopacity");
	});

/************************* menu scales when scrolled ****************************/
	$(document).scroll(function(){
		if( $(document).scrollTop() > 250 )
		{
			$('.mobilelogo').addClass("hideme");
			$('.toggleMenu').css('padding','9px 12px 9px 9px');
		}
		else{
			$('.mobilelogo').removeClass("hideme");
			$('.toggleMenu').css('padding','15px 20px 15px 15px');
		}

	});
});