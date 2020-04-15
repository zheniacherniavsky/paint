function drawTable() {
	let pixelSize = 32; // px
	document.write("<table>");
	let tableHeight = 0;
	while(tableHeight <= window.innerHeight-5) {
		document.write("<tr>");
		let trWidth = 0;
		while(trWidth <= window.innerWidth+pixelSize) {
			document.write("<td></td>");
			trWidth += pixelSize;
		}
		document.write("</tr>");
		tableHeight += pixelSize;
	}
	document.write("</table>");
}

drawTable();
let paint = false;

$(document).ready(function() {
	$("#accept").click(function() {
		$("#hello").fadeOut( "fast", function() {
			$("table").fadeIn("slow", function() {
				$("body").addClass('cursorActive');
			});
 		});
	})

	$("table").mousedown(function(){ 
	    paint = true;
	});
	$("table").mouseup(function(){ 
	    paint = false;
	});

	$("td").hover(function() {
		if(paint) {
			$(this).addClass('activeTD');
			$(this).addClass('hoverTD');
		}
	}, function() {
		$(this).removeClass('hoverTD')
	});
})