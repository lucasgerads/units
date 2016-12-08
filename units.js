module.exports = {
	prefix: function(number, round = 1){
		if (typeof(number)!= "number") return;
		var symbolLarge = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
		var symbolSmall = ['m', '\u00B5', 'n', 'p', 'f', 'a', 'z', 'y'];
		var n = Math.abs(number);
		var idx = 0;
		if (n >= 1){
			while (n/1000 >= 1 && idx+1 < symbolLarge.length){
				idx++;
				n = n/1000;
				number = number/1000;
			}
			return parseFloat(String(number)).toFixed(round) + " " + symbolLarge[idx];
		} else {
			while (n <= 1 && idx+1 < symbolSmall.length){
				idx++;
				n = n*1000;
				number = number*1000;
			}
			return parseFloat(String(number)).toFixed(round) + " " + symbolSmall[idx];
		}
	}
}

