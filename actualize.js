
var oldDomains = ["miradres2.com"],
	newDomains = ["cadmist.com"],
		delay = 2000;

//oldDomains = oldDomains.split(","),
//newDomains = newDomains.split(","),

replace();
console.log(oldDomains, newDomains);

function replace() {
	setTimeout(replace, delay);
	
	Array.prototype.find.call(document.body.getElementsByTagName("iframe"), function (elem) {
		var src = elem.src;
		
		oldDomains.forEach((item) => {
			if (src.includes(item)) {
				var newDomain = newDomains[Math.floor(Math.random() * newDomains.length)];
				
				elem.src = src.replace(item, newDomain);
				console.log(elem.src);
			}
		});
	});
}