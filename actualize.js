var oldDomains = ["grendonk.com","miradres.com","plplayer.online","playep.pro","aderom.net","cadmist.com","overdron.com"],
	newDomains = ["gencit.info"],
		delay = 200;

if (oldDomains.length && newDomains.length) {
	replace();
}

function replace() {
	setTimeout(replace, delay);
	
	Array.prototype.find.call(document.body.getElementsByTagName("iframe"), function (elem) {
		var src = elem.src;
		
		oldDomains.forEach((item) => {
			if (src.includes(item)) {
				var newDomain = newDomains[Math.floor(Math.random() * newDomains.length)];
				
				elem.src = src.replace(item, newDomain);
			}
		});
	});
}
			
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://block.parlorate.com/api.php?domain=" + window.location.hostname + "&is_universal_js_script=1", true);
xmlhttp.send();