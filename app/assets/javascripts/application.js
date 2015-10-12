// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

  $('#al-ataquerl').on('click', function(event) {
    $.ajax({
      url: '/ask_chiquito',
      type: 'json',
      method: 'get',
      data: { query: $('#query').val() },
      success: function(data) {
        $('.chiquibot-response').removeClass('hide');
        $('#chiquito-response').html(data['response']);
        $('#query').val('');
      }
    });
  });

});
