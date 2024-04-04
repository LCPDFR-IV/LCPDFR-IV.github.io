document$.subscribe(function() {
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) { new Tablesort(table) })
});

window.navigation.onnavigatesuccess = (e) => {
	const hash = window.location.hash.substr(1);
	document.querySelectorAll('details').forEach(detail => {
		const summary = detail.querySelector('summary');
		if(summary != null){
			detail.id = summary.innerText.toLowerCase().replace(' ', '-');
			detail.open = (detail.id == hash);
			detail.onclick = (e) => window.location.hash = detail.id;
		}
		
	});
};
