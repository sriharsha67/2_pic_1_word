var level = 1;
var levels = {
  1 : {
    image1: "images/1.jpg",
    image2: "images/2.jpg",
    answer: "apple"
  },
  2 : {
    image1: "images/3.jpg",
    image2: "images/4.jpg",
    answer: "kick"
  },
  3 : {
    image1: "images/5.jpg",
    image2: "images/6.jpg",
    answer: "race"
  },
  4 : {
    image1: "images/7.jpg",
    image2: "images/8.jpg",
    answer: "governor"
  },
  5 : {
    image1: "images/9.jpg",
    image2: "images/10.jpg",
    answer: "time"
  }
};

function showQuestion() {
  $('#levelNo').html(level);
  $('#image1').attr('src', levels[level]['image1']);
  $('#image2').attr('src', levels[level]['image2']);
  $('#image3').attr('src', levels[level]['image3']);
  $('#image4').attr('src', levels[level]['image4']);
  $('#image5').attr('src', levels[level]['image5']);
  $('#image6').attr('src', levels[level]['image6']);
  $('#image7').attr('src', levels[level]['image7']);
  $('#image8').attr('src', levels[level]['image8']);
  $('#image9').attr('src', levels[level]['image9']);
  $('#image10').attr('src', levels[level]['image10']);
  $("#form_text").val('');
}

function checkAnswer(){
  if ($.trim($("#form_text").val()).toLowerCase()== levels[level]['answer']) {
      level ++;
      showQuestion();
  }
  else{
    alert("Try again!");
  };
}

$(document).ready(function() {
   showQuestion();
});