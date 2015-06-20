$(document).ready(function(){
	function getParameterByName(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
	
	$('.deckname').html(getParameterByName('name'));
	
	$.get('decks/'+getParameterByName('deck'), function(data, status){
		var deck = JSON.stringify(data);
		console.log(deck);
		$('#deckjson').html(deck);
		
		$('#decka').attr('href', 'decks/'+getParameterByName('deck'));
		$('#decka').attr('download', getParameterByName('name')+'.json');
		
		//$('#save').click(function(){
		//	var blob = new Blob([deck], {type: 'text/plain;charset=utf-8'});
		//	saveAs(blob, getParameterByName('deck'));
		//});
	});
});
