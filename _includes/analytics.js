console.log('{{ page.date }}');
var today = new Date('{{ page.date }}');
var todayString = [today.getFullYear(), (today.getMonth()+1), today.getDate()].join('');
console.log(todayString);

document.getElementById('content').addEventListener('play', function(event) {
  console.log(event);
  console.log(new Date('{{ page.date }}'));
  ga('set', 'metric1', '{{ page.date }}');
}, true);
