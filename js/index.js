

  var x=window.innerWidth;


  $(document).ready(function(){
    //   if( x>=1000){
        $('.card-slick').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            rtl:true,
            nextArrow: '.fa-chevron-right',
            prevArrow: '.fa-chevron-left'
        });
    // }
    // else if(x<=1001){
    //       $('.card-slick').slick({
    //           infinite: true,
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           rtl:true,
    //           nextArrow: '.fa-chevron-right',
    //           prevArrow: '.fa-chevron-left'
    //       });
    // }
 });
