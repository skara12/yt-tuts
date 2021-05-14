//var sear;





function search(){
	
	//var input = document.getElementsByName('search');
	//sear = input[0].value;
	//console.log();
//window.open("https://skara12.github.io/yt-tuts/search.html","_self");
	
}


function listlinks(){
	
  
	//window.open("https://skara12.github.io/yt-tuts/search.html","_self");
	var path = "blog/";
	var links = ["Convert-Rubber-Ducky-to-Digispark-Script-for-different-Keyboard-Layouts.html",
	"Decoding-Wireshark-Keylogs-with-Python.html",
	"Get-Clipboard-from-ADB-Shell.html",
	"How-to-find-XY-Coordinates-for-ADB-shell-input-tap-Command.html",
	"Send-SMS-from-Adb-Shell.html",	
    "macrodroid-app-example-1.html",
    "macrodroid-app-example-2.html",
	"macrodroid-app-example-3.html"];
	var input = document.getElementsByName('search');
	var sear = input[0].value;
	//console.log(sear);


	var main = document.getElementById('main');
       main.innerHTML = "";
	
	
	for (i = 0; i < links.length; i++) {
		
		
		console.log(links[i].includes(sear));
		
		if(links[i].includes(sear)){
			
			
				// var section = document.createElement('section');
	///var h2 = document.createElement('h2');
	//var a = document.createElement('a');
	//var hr = document.createElement('hr');
	
			
			
			var title = links[i].split('.');
			
			main.innerHTML +=  '<section>  <h2><a href="'+ path + links[i] + '">' + title[0].replaceAll("-", " ") + '</a></h2></section><hr>'; 
			
			//myobj.remove();
			//textContent = "title";//.replaceAll("-", " ");
			
			//a.setAttribute("href",path + link);
			
			//h2.appendChild(a);
			
			//section.appendChild(h2);
			//main.appendChild(section)
			//main.appendChild(hr);
		
		}
		
		

		
	}
	
	




	
	
	
}
