var money = x.currencies;
var copper = money.cp;
var silver = money.sp;
var gold = money.gp;
var platnium = money.pp;
var electrum = money.ep;
var spellSlot = x.spellslots;

$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>----</td><td>'+ '----' + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>Copper</td><td>'+ copper + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>Silver</td><td>'+ silver + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>Gold</td><td>'+ gold + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>Platnium</td><td>'+ platnium + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>Electrum</td><td>'+ electrum + '</td></tr>');
$('#character-details-'+character.name.replace(/[^0-9a-zA-Z]+/g, '')+' > tbody:last-child').append('<tr><td>----</td><td>'+ '----' + '</td></tr>');
