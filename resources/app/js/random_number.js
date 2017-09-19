function random_number() {
	var x = document.getElementById("star_number");
	var y = document.getElementById("end_number");
	if( x != undefined && y != undefined) {
		var con_x = parseInt(x.value);
		var con_y = parseInt(y.value);
		var output= Math.floor((Math.random() * con_y) + con_x);
		var kq = "Output = ";
		var str = document.getElementById("out");
		str.innerText = kq + output ;
	}
}