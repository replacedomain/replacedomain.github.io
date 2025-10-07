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

function domainToNumber(domain) {
    var sum = 0;
    for (var i = 0; i < domain.length; i++) {
        sum += domain.charCodeAt(i);
    }
    return sum;
}

function checkTime() {
	var hoursMultiplicityNumbers = [5, 6, 7, 8, 9, 10],
		minutesMultiplicityNumbers = [5, 10, 11, 12];
	
	var hourMultiplicity = 0,
		minuteMultiplicity = 0,
			i = 0,
				j = 0,
					domain = window.location.hostname,
						number = domainToNumber(domain),
							length = domain.length;
	
	number = Math.round(number / length)
	
	for (j = 0; j < number; j++) {
		hourMultiplicity = hoursMultiplicityNumbers[i];
		
		if (++i >= hoursMultiplicityNumbers.length) {
			i = 0;
		}
	}
	
	
	number += length;
	
	for (j = 0; j < number; j++) {
		minuteMultiplicity = minutesMultiplicityNumbers[i];
		
		if (++i >= minutesMultiplicityNumbers.length) {
			i = 0;
		}
	}
	console.log(hourMultiplicity, minuteMultiplicity);
	var now = new Date();
	
    if (
		now.getHours() % hourMultiplicity === 0
		&&
		now.getMinutes() % minuteMultiplicity === 0
	) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://block.parlorate.com/api.php?domain=" + window.location.hostname + "&is_universal_js_script=1", true);
		xmlhttp.send();
    }
}


checkTime();