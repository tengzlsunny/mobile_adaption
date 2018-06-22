  
  //移动端适配
    (function(){
    	var num = 1/window.devicePixelRatio;
			var meta = document.createElement('meta');
			meta.name = 'viewport';
			meta.content='width=device-width, user-scalable=no,initial-scale='+num;
			document.documentElement.appendChild(meta);
			var fontSize = document.documentElement.clientWidth/7.5;
			document.documentElement.style.fontSize = fontSize+'px';
    })()
	   