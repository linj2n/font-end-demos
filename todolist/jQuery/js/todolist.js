$("ul").on("click", "li>span.close", function(){
    $(this).parent().fadeOut("slow");
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

$("input[name=myInput]").keypress(function(event) {
    if(event.which == 13) {
      addNewElement();
    }
});

$(".addBtn").click(function(){
    var input = $("#myInput");
    if (input.val() == "") {
      alert("You must write something!");
    } else {
      addNewElement();
    }
}); 

function addNewElement() {
  console.log("addNewElement");
  var myUL = $("#myUL");
  var input = $("#myInput");

  // 增加一个 li
  myUL.append("<li>"+ input.val() +"<span class=\"close\">\u00D7</span></li>");

  // 清空输入框
  input.val("");
}