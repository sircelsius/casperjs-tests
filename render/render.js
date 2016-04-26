function globalFailListener(url, failure){
  casper.echo('Testing ' + url + ' failed with failure: ' + JSON.stringify(failure));
  casper.page.render(url + '.png');
}

casper.each(['google', 'yahoo'], function(self, url){
  var localFailListener = globalFailListener.bind(this, url);
  casper.test.begin(url, function(test) {
    casper.test.on('fail', localFailListener);

    casper.start('http://www.' + url + '.com', function() {});

    casper.then(function() {
      test.assert(false);
    })

    casper.run(function() {
      casper.test.removeListener('fail', localFailListener);
      test.done();
    })
  })
})