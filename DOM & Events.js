var arr = document.

  getElementsByTagName(" p ");
for(var x=0; x<arr.length; x++) 
{
   arr[ x].innerHTML="SoloLearn";
}



What is the output of this code?
<div id="test">
<p>some text</p>
</div>
<script>
var el=document.getElementById("test");
alert(el.hasChildNodes());
</script>


<script>
var d = document.
getElementById (" p2 ");
d.style.color.="red";
</script>


<button onclick ="msg()">Click me
</button>
<script>
function msg() {
	alert("Hi!");
}
</script>


<div onmouseover="alert('Hi!');">
  put the mouse pointer over me
</div>