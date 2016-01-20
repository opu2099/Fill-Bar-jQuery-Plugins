/* this is the jQuery you need to add */

  var count_div=jQuery(".skills").length;
      for(var i=1;i<=count_div;i++){
          var a=".skill"+i;
          var x= jQuery(a+" .count").text();
          var y= parseInt(x,10);
      jQuery(a).animate({
          width: y+"%"
      },5000);
  }
