'use strict'
$(document).ready(function(){
    var URL = 'https://hemta2t1r2.execute-api.us-west-2.amazonaws.com/beta/predict'
    //https://hemta2t1r2.execute-api.us-west-2.amazonaws.com/beta/predict

 
$('#form1').submit(function (event) {
  event.preventDefault()
 
  var data = {
    cap_shape: $('#cap_shape').val(),
    cap_surface: $('#cap_shape').val(),
    cap_color: $('#cap_color').val(),
    bruises: $('#bruises').val(),
    odor: $('#odor').val(),
    gill_attachment: $('#gill_attachment').val(),
    gill_spacing: $('#gill_spacing').val(),
    gill_size: $('#gill_size').val(),
    gill_color: $('#gill_color').val(),
    stalk_shape:  $('#stalk_shape').val(),
    stalk_root: $('#stalk_root').val(),
    stalk_surface_above_ring: $('#stalk_surface_above_ring').val(),
    stalk_surface_below_ring: $('#stalk_surface_below_ring').val(),
    stalk_color_above_ring: $('#stalk-color-above-ring').val(),
    stalk_color_below_ring: $('#stalk-color-below-ring').val(), 
    veil_type: $('#veil_type').val(), 
    veil_color: $('#veil_color').val(),
    ring_number: $('#ring_number').val(),
    ring_type: $('#ring_type').val(),
    spore_print_color: $('#spore_print_color').val(), 
    population: $('#population').val(), 
    habitat: $('#habitat').val()
  }
 
  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
  })
      .then(
      function(data){
          $('#reserveModal').modal('hide');
          var pred = data.predictedLabel;
          var score = data.predictedScores[pred];
          score = Math.floor(score*100);
          $("#output").empty();
          $("#prob").empty();
          $("#Text").empty();
          
          if (pred == 1){
            $("html, body").animate({scrollTop: $('#output').offset().top-100},1000);
            //$("html, body").scrollTop($("#output").offset().top);

            $("#output").append("<img id='edible' src='img/002-food.png'/>");
            $("#prob").html("<h1>" + score  + "%</h1>");
            $("#prob").css({'color':'blue','font-size':'20px'});
            $("#Text").html("<h1>There is a " + score + "% of probability that this mushroom is edible. Please proceed with a caution.</h1>").css({'color':'blue','font-size':'20px'})
            }else{
            $("html, body").animate({scrollTop: $('#output').offset().top-100},1000);
            //$("html, body").scrollTop($("#output").offset().top);

            $("#output").append("<img id='edible' src='img/002-poison.png'/>");
            $("#prob").html("<h1>" + score  + "%</h1>");
            $("#prob").css({'color':'red','font-size':'20px'});
            $("#Text").html("<h1>There is a " + score + "% of probability that this mushroom is edible. We recommend not to eat this mushroom.</h1>").css({'color':'red','font-size':'20px'});

                
          }
          
      },
      function(){
          alert('error')
    });
});
    
});
