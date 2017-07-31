
/* global */
 $(function () {
    'use strict';
    $ ('.info-list li').click( function () {
      $(this).addClass('selected').siblings('li').removeClass('selected');
      $('.info-cont div').hide();
      $('.'+$(this).data('class')).fadeIn();
    });
 });
