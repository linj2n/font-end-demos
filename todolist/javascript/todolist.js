
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// 点击”Close“按钮，将列表项隐藏
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// 点击表项时，增加"checked"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// 当点击 “Add” 按钮时，增加一个新的表项
function newElement() {

  // 新建一个列表项
  var li = document.createElement("li");

  // 获取输入框中的待办事项内容，并赋值给新建的列表项 li 
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    // 输入框中无内容，则弹出提示
    alert("You must write something!");
  } else {
    // 将包含新待办事项列表项 li 插入列表中
    document.getElementById("myUL").appendChild(li);
  }

  // 清空输入框
  document.getElementById("myInput").value = "";

  // 插入的 li 设置 CSS 样式
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}