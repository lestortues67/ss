function DisplayCommande() {
	alert("DisplayCommande()");
	// Find a <table> element with id="tablecmde":
	var table = document.getElementById("tablecmde1");
	var macommande = [{'lineId':0,'nom':"pizza reine",'prixt':"9€95",'prix':9.95,'slien':'s100','linenum':'0'},
	{'lineId':1,'nom':"pizza king",'prixt':"9€95",'prix':9.95,'slien':'s200','linenum':'1'},
	{'lineId':2,'nom':"pizza mexicaine",'prixt':"10€95",'prix':10.95,'slien':'s300','linenum':'2'},
	{'lineId':3,'nom':"pizza saumon",'prixt':"12€95",'prix':12.95,'slien':'s400','linenum':'3'}];




	
	for(var i = 0; i < macommande.length; i++) 
		{var cmdlength=macommande.length;
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = macommande[i].nom; 
		var cell2 = row.insertCell(1);
		cell2.innerHTML = macommande[i].prixt;
		var cell3 = row.insertCell(2);
		var s = document.createElement("button"); // Create a <script> element
		s.class = 'btn kiki';
		// s.data-ref= macommande[i].slien;
		s.onclick='ShowAlert();';
		var im = document.createElement("img");
		im.src='static/YellowEmpty.ico';
		im.alt='FileNotFound' ;
		im.height='42';
		im.width='42';
		s.appendChild(im);
		cell3.appendChild(s);

// <a href="#" class="btn btn-primary kiki" data-ref='AAA' id="btn2" onclick="ShowAlert();" >NewButton </a>
		cell3.innerHTML="<button class='btn kiki' data-ref='' onclick='ShowAlert();'> <img src='static/YellowEmpty.ico' alt='FileNotFound' height='42' width='42'> </button>";
		var vcell = document.getElementsByClassName("kiki");
		vcell[1].dataset.ref=macommande[i].slien

		
}	
	}

function ShowAlert() {
	alert("ShowAlert()");
}