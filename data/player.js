var listRadio = [
    ["Хит ФМ", "http://online-hitfm.tavrmedia.ua/HitFM"],
    ["Наше радио", "http://cast.radiogroup.com.ua:8000/nashe"],
    ["BestFM", "http://radio.bestfm.fm:8080/bestfm64"],
    ["KissFm", "http://online-kissfm.tavrmedia.ua/KissFM"],
    ["ХитФМ", "http://online-hitfm2.tavrmedia.ua/HitFM"],
    ["Europa Plus", "http://cast.radiogroup.com.ua:8000/europaplus"],
    ["Радиомелодия", "http://online-radiomelodia.tavrmedia.ua/RadioMelodia"],
    ["DJFM", "http://media.brg.ua:8010/;stream.nsv"],
    ["RadioROKS", "http://online-radioroks.tavrmedia.ua/RadioROKS"],
    ["RadioROKS Ballads", "http://online-radioroks.tavrmedia.ua/RadioROKS_Ballads"],
    ["Русское радио", "http://online-rusradio.tavrmedia.ua:8000/RusRadio"],
    ["Авторадио", "http://cast.radiogroup.com.ua:8000/avtoradio"],
    ["ЛюксFM", "http://icecastlv.luxnet.ua/lux"],
    ["RadioMIX Днепр", "http://media.fregat.com:8000/RadioMIX"],
    ["UAFM", "http://live.uafm.org:9001/uafm"],
    ["Детские песни", "http://music.myradio.com.ua:8000/kids-songs128.mp3"],
    ["SUN FM", "http://radio.sunfm.com.ua:8000/live"],
    ["Radio Metal", "http://s3.radioheart.ru:8015/radio-metal"],
    ["Яскраве Радiо", "http://vobu.com.ua:8000/yaskrave-128"],
    ["Lounge FM", "http://cast.loungefm.com.ua/loungefm?1383955394702.mp3"],
    ["Rock FM", "http://212.90.40.9:8000/rockfm"],
    ["Радио правильного репа", "http://rpr-stream.pp.ua:8005/rpr"],
    ["Radiomatch", "http://168.144.82.139:8000/;stream/1"],
    ["Родинне радiо", "http://radio.ukraudio.com:8000/rodynne-radio"],
    ["Азовская столица", "http://s02.radio-tochka.com:5270/radio"],
    ["Big radio", "http://s02.radio-tochka.com:6840/radio"],
    ["TrancEuphoria", "http://31.184.236.6:8000/tcr128"],
    ["Lumix FM", "http://relay-de-1.host.fm/229-684.mp3"],
    ["HappyRadio", "http://stream.itshappyradio.com:8000/;stream.nsv&type=mp3"],
    ["iDISCO Internet Radio", "http://37.229.124.110:8000/iDISCO"],
    ["LisFm", "http://93.189.40.67:8158/stream"],
    ["Retro Romantic Ballads", "http://cast.loungefm.com.ua/retro_dance"],
    ["SuperRadio", "http://cast.loungefm.com.ua/terrace128"]
];

var savedItem;
const COLOR_MARK = "gray";
const COLOR_NOT_MARK = "white";

function createPlayList() {
    for (var i = 1; i < listRadio.length + 1; i++) {
        var el = document.createElement('li');
        if (i == 1) {
            el.style.backgroundColor = "gray";
        }
        el.innerHTML = i + '.  '+ listRadio[i][0] + '<audio><source src ="' + listRadio[i][1] + '"></audio>';
        document.getElementById('list').appendChild(el);
    }
}

function getNumberItem(key) {
    var li = document.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var liItem = li.item(i);
        if (liItem.style.backgroundColor == COLOR_MARK) {
            if (key == 1) {
                savedItem = i;
            }
            return i;
        }
    }
}

function play() {
    stop();
    var audio = document.getElementsByTagName('audio').item(getNumberItem(1));
    audio.load();
    audio.play();
    volume();
}

function stop() {
    var playingAudio = document.getElementsByTagName('audio').item(savedItem);
    playingAudio.pause();
}

function markItem(key) {
    var numberItem = savedItem;
    var li = document.getElementsByTagName('li');
    if (key == 1) {
        if (numberItem == listRadio.length - 2) {
            li.item(numberItem).style.backgroundColor = 'gray';
        } else {
            li.item(numberItem).style.backgroundColor = 'white';
            li.item(numberItem + 1).style.backgroundColor = 'gray';
        }
    } else if (key == 2) {
        if (numberItem == 0) {
            li.item(numberItem).style.backgroundColor = 'gray';
        } else {
            li.item(numberItem).style.backgroundColor = 'white';
            li.item(numberItem - 1).style.backgroundColor = 'gray';
        }
    } else {
        li.item(getNumberItem()).style.backgroundColor = 'white';
    }
}

function clickForward() {
    markItem(1);
    play();
}

function clickReverse() {
    markItem(2);
    play();
}

function clickPlaylist(event) {
    markItem();
    event.target.style.backgroundColor = "gray";
}

function volume() {
    var vol = document.getElementsByClassName('volume_range').item(0);
    var audio = document.getElementsByTagName('audio').item(getNumberItem());
    audio.volume = parseFloat(vol.value/10);
}