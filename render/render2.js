var arr = ['http://www.google.com', 'http://www.yahoo.com'];

casper.test.begin(arr[0], function (test, url) {
  casper.start(arr[0])

  test.on('fail', function() {
    casper.echo('foo');
  })
  test.assert(false);

  casper.run(function() {
    this.exit()
  })
})

casper.test.begin(arr[1], function (test, url) {
  casper.start(arr[1])
  test.on('fail', function(e) {
    test.renderResults()
    casper.echo(JSON.stringify(e));
  })
  test.assert(false);

  casper.run(function() {
    this.exit()
  })
})