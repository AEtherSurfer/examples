define(function(require, exports, module) {
  var example = 'views/Scrollview/example';
  if(window.location.hash) {
    example = window.location.hash.replace(/^#/, '');
  }
  console.log(example);
  var url = 'src/examples/' + example + '.js';
  require([url]);
});
