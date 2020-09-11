// load  api
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// make player array
var players = new Array();

function onYouTubeIframeAPIReady() {
    players[0] = new YT.Player('player1', {
        height: '1920',
        width: '1080',
        videoId: 'S5ezSEmKbNo',
        playerVars: { //�䌊閮����彍
            'controls': 1, //�綉����梹��0:�黸��𧶏��1:憿舐內(暺䁅��)
            'fs': 0, //�典�𤩺�厰�𤏪��0:�黸��𧶏��1:憿舐內(暺䁅��)
            'iv_load_policy': 3, //敶梁��酉��页��1:憿舐內(暺䁅��)嚗�3:銝漤＊蝷�
            'rel': 0, //憿舐內�㮾��𡏭�㚚朌嚗�0:銝漤＊蝷綽��1:憿舐內(暺䁅��)
            'modestbranding': 1, //YouTube璅嗵惜嚗�0:憿舐內(暺䁅��)嚗�1:銝漤＊蝷�    
            'playsinline': 1 //�銁iOS���偘�𦆮�膥銝剖�典�𤩺偘�𦆮嚗�0:�典��(暺䁅��)嚗�1:�批��
        },
    });
}


// �偘�𦆮敶梁��
video_fix()

function video_fix() {
    $('#video_pop').click(function() {
        $('.pop_bg').slideDown('slow');
        show_fixed_pop();
        $(players).each(function(i) {
            this.playVideo();
        });
    })
    $('#close_video').click(function() {
        $('.pop_bg').slideUp('slow');
        close_fixed_pop();
        $(players).each(function(i) {
            this.stopVideo();
        });
    })
}