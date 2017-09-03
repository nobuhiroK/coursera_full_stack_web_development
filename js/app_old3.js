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

            $("#output").append("<img id='edible' src='img/002-food.png' class='img-responsive center-block'>");
            $("#prob").html("<h1>" + score  + "%</h1>");
            $("#prob").css({'color':'blue','font-size':'20px'});
            $("#Text").html("<h1>There is a " + score + "% of probability that this mushroom is edible. Please proceed with a caution.</h1>").css({'color':'blue','font-size':'20px'})
            ;
              $("#cap_shape").val($("#cap_shape").data("default-value"));
              $("#cap_surface").val($("#cap_surface").data("default-value"));
              $("#cap_color").val($("#cap_color").data("default-value"));
              $("#bruises").val($("#bruises").data("default-value"));
              $("#odor").val($("#odor").data("default-value"));
              $("#odor").val($("#odor").data("default-value"));
              $("#gill_attachment").val($("#gill_attachment").data("default-value"));
              $("#gill_spacing").val($("#gill_spacing").data("default-value"));
              $("#gill_size").val($("#gill_size").data("default-value"));
              $("#gill_color").val($("#gill_color").data("default-value"));
              $("#stalk_shape").val($("#stalk_shape").data("default-value"));
              $("#stalk_root").val($("#stalk_root").data("default-value"));
              $("#stalk_surface_above_ring").val($("#stalk_surface_above_ring").data("default-value"));
              $("#stalk_surface_below_ring").val($("#stalk_surface_below_ring").data("default-value"));
              $("#stalk_color_below_ring").val($("#stalk_color_below_ring").data("default-value"));
              $("#veil_type").val($("#veil_type").data("default-value"));
              $("#veil_color").val($("#veil_color").data("default-value"));
              $("#ring_number").val($("#ring_number").data("default-value"));
              $("#ring_type").val($("#ring_type").data("default-value"));
              $("spore_print_color").val($("#spore_print_color").data("default-value"));
              $("#population").val($("#population").data("default-value"));
              $("#habitat").val($("#habitat").data("default-value"));
            }else{
            $("html, body").animate({scrollTop: $('#output').offset().top-100},1000);
            //$("html, body").scrollTop($("#output").offset().top);

            $("#output").append("<img id='edible' src='img/002-poison.png' class='img-responsive center-block'>");
            $("#prob").html("<h1>" + score  + "%</h1>");
            $("#prob").css({'color':'red','font-size':'20px'});
            $("#Text").html("<h1>There is a " + score + "% of probability that this mushroom is edible. We recommend not to eat this mushroom.</h1>").css({'color':'red','font-size':'20px'});
            $("#cap_shape").val($("#cap_shape").data("default-value"));
            $("#cap_surface").val($("#cap_surface").data("default-value"));
            $("#cap_color").val($("#cap_color").data("default-value"));
            $("#bruises").val($("#bruises").data("default-value"));
            $("#odor").val($("#odor").data("default-value"));  
            $("#odor").val($("#odor").data("default-value"));
            $("#gill_attachment").val($("#gill_attachment").data("default-value"));
            $("#gill_spacing").val($("#gill_spacing").data("default-value"));
            $("#gill_size").val($("#gill_size").data("default-value"));
            $("#gill_color").val($("#gill_color").data("default-value"));
            $("#stalk_shape").val($("#stalk_shape").data("default-value"));
            $("#stalk_root").val($("#stalk_root").data("default-value"));
            $("#stalk_surface_above_ring").val($("#stalk_surface_above_ring").data("default-value"));
            $("#stalk_surface_below_ring").val($("#stalk_surface_below_ring").data("default-value"));
            $("#stalk_color_above_ring").val($("#stalk_color_above_ring").data("default-value"));
            $("#stalk_color_below_ring").val($("#stalk_color_below_ring").data("default-value"));
            $("#veil_type").val($("#veil_type").data("default-value"));
            $("#veil_color").val($("#veil_color").data("default-value"));
            $("#ring_number").val($("#ring_number").data("default-value")); 
            $("#ring_type").val($("#ring_type").data("default-value"));
            $("#spore_print_color").val($("#spore_print_color").data("default-value"));
            $("#population").val($("#population").data("default-value"));
            $("#habitat").val($("#habitat").data("default-value"));
            }

          
      },
      function(){
          alert('error')
    });
});
    
});
