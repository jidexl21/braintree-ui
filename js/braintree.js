(function () {
  'use strict'

    $('.owl-carousel').each(function(){
      var showNum = $(this).data().items; 
    
      var setting = $(this).data();
      var keys = Object.keys(setting);
      ["autoplayHoverPause",
       "autoplayTimeout"
      ].map(x=>{
        if(keys.indexOf(x.toLowerCase()) != -1){
          setting[x] = setting[x.toLowerCase()];
          delete setting[x.toLowerCase()];
        }
      })
      if(setting.responsive){ setting.responsive = {
          0: { items: 1 }, 600: {   items: 3 },1000: {  items: 5 }
        }
      }
      
      console.log(setting);
      // var cfg = (showNum)?{
      //   0: { items: 1 }, 600: {   items: 3 },1000: {  items: 5 }
      // }: 
      // {
      //   0: { items: showNum }, 600: {   items: showNum },1000: {  items: showNum }
      // };
      $(this).owlCarousel(setting)
    })

})()
