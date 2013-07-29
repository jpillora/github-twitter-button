(function() {
  console.log('run');

  $(function() {
    var baseUrl, update;
    baseUrl = 'https://twitter.com/intent/tweet?';
    update = function() {
      var code, data, link;
      data = {
        hashtags: $('#hashtags').val(),
        original_referer: 'http://github.com/',
        text: $('#text').val(),
        tw_p: 'tweetbutton',
        url: $('#url').val()
      };
      console.log(data);
      link = "" + baseUrl + ($.param(data));
      code = "<a href=\"" + link + "\" target=\"_blank\">\n  <img src=\"http://jpillora.com/github-twitter-button/img/tweet.png\"></img>\n</a>";
      $('pre.code').text(code);
      return $('.preview').html(code);
    };
    $(document).on('keyup', 'input', update);
    return update();
  });

}).call(this);
