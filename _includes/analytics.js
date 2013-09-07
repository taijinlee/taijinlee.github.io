var today = new Date('{{ page.date }}');
var todayString = [today.getFullYear(), Util.leftZeroPad(today.getMonth()+1, 2), Util.leftZeroPad(today.getDate(), 2)].join('');

document.getElementById('content').addEventListener('play', function(event) {
  ga('set', 'metric1', Number(todayString));
}, true);
