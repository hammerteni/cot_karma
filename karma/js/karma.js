function karma_jqm(url, karmaclass) {    console.log(url);    if($('#confirmBoxKarma').length < 1){ $('body').prepend('<div id="confirmBoxKarma" class="jqmWindowKarma ' + karmaclass +'" >Wait..</div>');}      $('#confirmBoxKarma').jqm({ajax:url,modal:true,     onShow: function(hash) { hash.w.css('opacity',1.0).fadeIn(500); },    onHide: function(hash) { hash.w.fadeOut('2000',function(){ hash.o.remove(); });    clearTimeout(karmatime);    },    onLoad:function(){    $('#confirmBoxKarma').css('margin-left', '-'+($('#confirmBoxKarma').width()/2)+'px');    $('#confirmBoxKarma').css('margin-top', '-'+($('#confirmBoxKarma').height()/2)+'px');        }    });    $('#confirmBoxKarma').jqmShow();        return false;   }$(document).on('ready ajaxSuccess', function() {    $('#confirmBoxKarma').jqmAddClose('.closekarma');     $('.jqmOverlay').on('click', function() {$('#confirmBoxKarma').jqmHide();});});