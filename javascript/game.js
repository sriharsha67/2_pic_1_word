var answer="apple";

function checkAnswer(){
  if ($.trim($("#form_text").val()).toLowerCase()== answer) {
      alert("congratulations!");
  }
  else{
    alert("Try again!");
  };
}