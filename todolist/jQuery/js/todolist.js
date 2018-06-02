$("ul").on("click", "li>span.close", function(){
    $(this).parent().fadeOut("slow");
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

$("input[name=myInput]").keypress(function(event) {
    if (event.which == 13) {
      addNewElement();
    }
});

$(".addBtn").click(function() {
    addNewElement();
}); 

function addNewElement() {
  var myUL = $("#myUL");
  var input = $("#myInput");
  if (input.val() == "") {
    alert("You must write something!");
  } else {
    // myUL.append("<li>"+ input.val() +"<span class=\"close\">\u00D7</span></li>");
    var li = $("<li></li>").text(input.val());
    var span = $("<span></span>").text("\u00D7");
    li.append(span);
    myUL.append(li);

    span.addClass("close");
    input.val("");
  }
}