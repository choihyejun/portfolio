/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){
    /**************************** visual 팝업 (시작) ************************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade",
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        //effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            /* type: 'fraction',  type fraction을 주면 paging이 숫자로 표시됨 */
        },
        
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },
    
    });
    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */
        
        
    /**************************** visual 팝업 (종료) ************************************/
    
    /**************************** esg on (시작) ************************************/

    $('.esg .list > ul > li').on('mouseenter', function(){
        $('.esg .list > ul > li').removeClass('on')
		$(this).addClass('on');	
	});
    $('.esg .list > ul').on('mouseleave', function(){
        $('.esg .list > ul > li').removeClass('on')
	});

    /**************************** esg on (종료) ************************************/

})//$(document).ready