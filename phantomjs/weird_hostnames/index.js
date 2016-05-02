var page  = require('webpage');
var url = 'http://www.goeuro.es.localhost/trenes_desde_brujas_a_amsterdam';

page.open(url, function(status) {
  console.log('Page loaded with status ' + status);
  phantom.exist();
});
