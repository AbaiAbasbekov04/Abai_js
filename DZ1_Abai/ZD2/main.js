var end = prompt('Выберибе ENG или RUS!')

var ru = ['пн','вт','ср','чт','пт','сб','вс']
var en = ['mn','ts','wd','th','fr','st','sn']

if (end === 'RUS') {
    console.log(ru);
}else if (end === "ENG") {
    console.log(en);
}else {
    alert('ERROR');
}