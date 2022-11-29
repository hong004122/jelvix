
$(document).ready(function(){
    // jelvixReponsive();
    scrollMotion();
    slideAuchanActive();
    slideClientActive();
    mobileNav();
    // scrollLock();
});

// function scrollLock(){
//     $('.allWrap').off('scroll touchmove mousewheel');
// }

function mobileNav(){
    $('header .mobileBtn').click(function(){
        let btnText = $('header .mobileBtn').text();
        $('header').toggleClass('mobNavBg');
        $('header nav').toggleClass('active');
        if(btnText == 'menu'){
            $('header .mobileBtn').text('menu');
        }else{
            $('header .mobileBtn').text('menu_open');
        }
    });
}
// function jelvixReponsive(){
//     let jelvixScreen = $(window).width();

//     if(jelvixScreen >= 1005){
//         jelvixDesktopScrollEvent();
//     }else if(jelvixScreen < 767){
//         jelvixMobileScrollEvent();
//     }else{
//         jelvixTabletScrollEvent();
//     }
// }

function scrollEvent() {
    let aniElem = document.querySelectorAll('.aniElem');
    let count = 0;

    while (aniElem[count].offsetTop <= (window.pageYOffset) + 500) {
        aniElem[count].classList.add('active');
        count++;
        if (count == 36) {
            return;
        }
    }

}

function scrollMotion() {
    $(window).scroll(function(){
        let scrollPosition = parseInt(document.documentElement.scrollTop);
        if(scrollPosition == 0){
            $('header').removeClass('fixed');
        }else if(scrollPosition > 0){
            $('header').addClass('fixed');
        }  
        requestAnimationFrame(scrollEvent);
    });
}


// function scrollAnimation(){
//     $(window).scroll(function(){
//         let scrollPosition = parseInt(document.documentElement.scrollTop);
//         let fullHeight = parseInt(document.body.scrollHeight);
//         let scrollLocation = parseInt((scrollPosition) / fullHeight * 100); 

//         // if(scrollLocation >= 2){
//         //     $('section.setupArea').addClass('active');
//         // }
//         // if(scrollLocation >= 4){
//         //     $('section.weWorkArea').addClass('active');
//         // }
//         // if(scrollLocation >= 8){
//         //     $('section.weWorkArea ul').addClass('active');
//         // }
//         // if(scrollLocation >= 14){
//         //     $('section.howWorkArea').addClass('active');
//         // }
//         // if(scrollLocation >= 16){
//         //     $('section.howWorkArea div ul').addClass('active');
//         // }
//         // if(scrollLocation >= 19){
//         //     $('section.takeCareArea').addClass('active');
//         // }
//         // if(scrollLocation >= 22){
//         //     $('section.takeCareArea div ul li span:last-child').addClass('active');
//         // }
//         // if(scrollLocation >= 27){
//         //     $('section.advantageArea').addClass('active');
//         // }
//         // if(scrollLocation >= 29){
//         //     $('section.benefitsArea h2').addClass('active');
//         // }
//         // if(scrollLocation >= 31){
//         //     $('section.benefitsArea ul li:nth-child(1)').addClass('active');
//         // }
//         // if(scrollLocation >= 33){
//         //     $('section.benefitsArea ul li:nth-child(2)').addClass('active');
//         // }
//         // if(scrollLocation >= 35){
//         //     $('section.benefitsArea ul li:nth-child(3)').addClass('active');
//         // }
//         // if(scrollLocation >= 37){
//         //     $('section.benefitsArea ul li:nth-child(4)').addClass('active');
//         // }
//         // if(scrollLocation >= 39){
//         //     $('section.benefitsArea ul li:nth-child(5)').addClass('active');
//         // }
//         // if(scrollLocation >= 43){
//         //     $('.awardArea').addClass('active');
//         // }
//         // if(scrollLocation >= 48){
//         //     $('section.ddtCaseArea').addClass('active');
//         // }
//         // if(scrollLocation >= 50){
//         //     $('section.auchanArea').addClass('active');
//         // }
//         // if(scrollLocation >= 55){
//         //     $('section.clientArea h2').addClass('active');
//         // }
//         // if(scrollLocation >= 60){
//         //     $('section.formArea .wrap ul li').addClass('active');
//         // }
//         // if(scrollLocation >= 70){
//         //     $('section.contactArea').addClass('active');
//         //     $('section.contactArea h2').addClass('active');
//         // }
//         // if(scrollLocation >= 72){
//         //     $('section.contactArea ul').addClass('active');
//         // }
//     });

// }


function slideAuchanActive(){
    $('section.auchanArea .slideBtn > button').click(function(){
        let slideNumb = Number($('section.auchanArea .slideBtn > span:nth-of-type(1)').text());
        console.log(slideNumb);
        let slideBtn = $(this).attr("class");
        if(slideBtn == 'btnRight'){
            slideNumb++
            $('section.auchanArea .slideBtn > span:nth-of-type(1)').text(slideNumb);
            if(slideNumb > 4){
                slideNumb = 1;
                $('section.auchanArea .slideBtn > span:nth-of-type(1)').text(slideNumb);
            }
        }else if(slideBtn == 'btnLeft'){
            slideNumb--
            $('section.auchanArea .slideBtn > span:nth-of-type(1)').text(slideNumb);
            if(slideNumb < 1){
                slideNumb = 4
                $('section.auchanArea .slideBtn > span:nth-of-type(1)').text(slideNumb);
            }
        }
        let slideTextPage = $('section.auchanArea ul li:last-child div').eq(slideNumb-1);
        let slideImgPage = $('section.auchanArea ul li:first-child div').eq(slideNumb-1);
        $('section.auchanArea ul li div').removeClass('active');
        slideImgPage.addClass('active');
        slideTextPage.addClass('active');
    });
}

function slideClientActive(){
    $('section.clientArea .slideBtn > button').click(function(){
        let slideClientNumb = Number($('section.clientArea .slideBtn > span:nth-of-type(1)').text());
        console.log(slideClientNumb);
        let slideBtn = $(this).attr("class");
        if(slideBtn == 'btnRight'){
            slideClientNumb++
            $('section.clientArea .slideBtn > span:nth-of-type(1)').text(slideClientNumb);
            if(slideClientNumb > 4){
                slideClientNumb = 1;
                $('section.clientArea .slideBtn > span:nth-of-type(1)').text(slideClientNumb);
            }
        }else if(slideBtn == 'btnLeft'){
            slideClientNumb--
            $('section.clientArea .slideBtn > span:nth-of-type(1)').text(slideClientNumb);
            if(slideClientNumb < 1){
                slideClientNumb = 4
                $('section.clientArea .slideBtn > span:nth-of-type(1)').text(slideClientNumb);
            }
        }
        let slideClientPage = $('section.clientArea .slideBox ul li').eq(slideClientNumb-1);
        $('section.clientArea .slideBox ul li').removeClass('active');
        slideClientPage.addClass('active');
    });
}



// function slideActive(){
//     let slideImgPage = $('section.auchanArea ul li:first-child div');
//     let slideTextPage = $('section.auchanArea ul li:last-child div');
//     $('section.auchanArea .slideBtn > button').click(function(){
//         let slideImgPageLength = slideImgPage.length;
//         let slideTextPageLength = slideTextPage.length;
        
//     });
//     console.log(slideNumb)
// }

// function tabletScrollAnimation(){
//     if(documentWidth == 1004){
//         window.onresize = function(){
//             document.location.reload();
//         }
//     }
//     if(767 < documentWidth > 1005){
//         console.log(documentWidth);
//         $(window).scroll(function(){
//             let tabletScrollPosition = parseInt(document.documentElement.scrollTop);
//             let fullHeight = parseInt(document.body.scrollHeight);
//             let scrollYpos = (tabletScrollPosition / fullHeight) * 100;
//             if(tabletScrollPosition == 0){
//                 $('header').removeClass('fixed');
//             }else if(tabletScrollPosition > 0){
//                 $('header').addClass('fixed');
//             }
//             console.log(tabletScrollPosition);
//             console.log(fullHeight);
//             console.log(scrollYpos);
//             if(tabletScrollPosition >= 400){
//                 $('section.setupArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 700){
//                 $('section.weWorkArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 900){
//                 $('section.weWorkArea ul').addClass('active');
//             }
//             if(tabletScrollPosition >= 1300){
//                 $('section.howWorkArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 1400){
//                 $('section.howWorkArea div ul').addClass('active');
//             }
//             if(tabletScrollPosition >= 1700){
//                 $('section.takeCareArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 1700){
//                 $('section.takeCareArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 1800){
//                 $('section.takeCareArea div ul li:nth-child(-n+3) span:last-child').addClass('active');
//             }
//             if(tabletScrollPosition >= 2000){
//                 $('section.takeCareArea div ul li:nth-child(n+4):nth-child(-n+6) span:last-child').addClass('active');
//             }
//             if(tabletScrollPosition >= 2200){
//                 $('section.takeCareArea div ul li:nth-child(n+7):nth-child(-n+9) span:last-child').addClass('active');
//             }
//             if(tabletScrollPosition >= 2600){
//                 $('section.advantageArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 2900){
//                 $('section.benefitsArea h2').addClass('active');
//             }
//             if(tabletScrollPosition >= 3200){
//                 $('section.benefitsArea ul li:nth-child(1)').addClass('active');
//             }
//             if(tabletScrollPosition >= 3500){
//                 $('section.benefitsArea ul li:nth-child(2)').addClass('active');
//             }
//             if(tabletScrollPosition >= 3800){
//                 $('section.benefitsArea ul li:nth-child(3)').addClass('active');
//             }
//             if(tabletScrollPosition >= 4100){
//                 $('section.benefitsArea ul li:nth-child(4)').addClass('active');
//             }
//             if(tabletScrollPosition >= 4500){
//                 $('section.benefitsArea ul li:nth-child(5)').addClass('active');
//             }
//             if(tabletScrollPosition >= 4700){
//                 $('.awardArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 5000){
//                 $('section.ddtCaseArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 5500){
//                 $('section.auchanArea').addClass('active');
//             }
//             if(tabletScrollPosition >= 6300){
//                 $('section.clientArea h2').addClass('active');
//             }
//             if(tabletScrollPosition >= 6600){
//                 $('section.formArea .wrap ul li:nth-child(1)').addClass('active');
//                 $('section.formArea .wrap ul li:nth-child(4)').addClass('active');
//             }
//             if(tabletScrollPosition >= 6700){
//                 $('section.formArea .wrap ul li:nth-child(2)').addClass('active');
//                 $('section.formArea .wrap ul li:nth-child(5)').addClass('active');
//             }
//             if(tabletScrollPosition >= 6800){
//                 $('section.formArea .wrap ul li:nth-child(3)').addClass('active');
//                 $('section.formArea .wrap ul li:nth-child(6)').addClass('active');
//             }
//             if(tabletScrollPosition >= 7200){
//                 $('section.contactArea').addClass('active');
//                 $('section.contactArea h2').addClass('active');
//             }
//             if(tabletScrollPosition >= 7400){
//                 $('section.contactArea ul').addClass('active');
//             }
//         });
//     }
// }

