function q(a,x,y,z){
  a.beginPath();
  a.arc(x,y,z,0,2*Math.PI);
  a.fill();
}
var c = document.getElementById("canvas-right");
c = c.getContext("2d");
c.fillStyle = "#fff";
var d = document.getElementById("canvas-left");
d = d.getContext("2d");
d.fillStyle = "#fff";
for(var i=0;i<2000;i++){
for(var j=0;j<2;j++){
  var y = Math.random()*screen.height*2;
  var z = Math.random()*screen.width*0.001;
  var r = Math.random();
  if(r>0.75){
    if(i>1500){
      r = Math.random();
      if(r<((1750-i)/500)){
        q(d,i,y,z);
      }
    }else{
      q(d,i,y,z);
    }
  }else if(r<0.25){
    if(i<500){
      r = Math.random();
      if(r<((i-250)/500)){
        q(c,i,y,z);
      }
    }else{
      q(c,i,y,z);
    }
  }
}
}