var sear = "Wireshark";





function search(){
	
	var input = document.getElementsByName('search');
	sear = input[0].value;
	console.log(sear);
window.open("https://skara12.github.io/yt-tuts/search.html","_self");
	
}


function listlinks(){
	
	var path = "blog/";
	var links = ["Convert-Rubber-Ducky-to-Digispark-Script-for-different-Keyboard-Layouts.html",
	"Decoding-Wireshark-Keylogs-with-Python.html",
	"Get-Clipboard-from-ADB-Shell.html",
	"How-to-find-XY-Coordinates-for-ADB-shell-input-tap-Command.html",
	"Send-SMS-from-Adb-Shell.html",	
    "macrodroid-app-example-1.html",
    "macrodroid-app-example-2.html",
	"macrodroid-app-example-3.html"];
	
	var main = document.getElementById('main');
    var section = document.createElement('section');
	var h2 = document.createElement('h2');
	var a = document.createElement('a');
	var hr = document.createElement('hr');
	
	
	links.forEach(link => {
		
		
		
		console.log(link.indexOf(sear));
		
		if(link.indexOf(sear) > 0){
			
			
			var title = link.split('.');
			
			a.textContent = title[0].replaceAll("-", " ");
			
			a.setAttribute("href",path + link);
			
			h2.appendChild(a);
			
			section.appendChild(h2);
			main.appendChild(section);
			main.appendChild(hr);
			
		}
		
		
	});
	
	




	
	
	
}
