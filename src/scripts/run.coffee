
console.log 'run'

$ ->

  baseUrl = 'https://twitter.com/intent/tweet?'
  update = ->
    data =
      hashtags: $('#hashtags').val()
      original_referer: 'http://github.com/'
      text: $('#text').val()
      tw_p: 'tweetbutton'
      url: $('#url').val()

    console.log data

    link = "#{baseUrl}#{$.param data}"

    code = """
      <a href="#{link}" target="_blank">
        <img src="http://jpillora.com/github-twitter-button/img/tweet.png"></img>
      </a>
    """

    $('pre.code').text code
    $('.preview').html code

  $(document).on 'keyup', 'input', update
  update()