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
    ["Стильное радио", "http://radio.urg.com.ua/radio-stilnoe"],
    ["RadioMIX Днепр", "http://media.fregat.com:8000/RadioMIX"],
    ["Радио Вести", "http://212.26.132.60:8000/vesti_mp3"],
    ["Radio Velykyh Dorig", "http://195.200.251.29:8000/live"],
    ["Громадське", "http://193.105.70.76:8000/stream?97"],
    ["UR-3", "http://nrcu.gov.ua:8000/ur3-mp3"],
    ["UAFM", "http://live.uafm.org:9001/uafm"],
    ["Детские песни", "http://music.myradio.com.ua:8000/kids-songs128.mp3"],
    ["SUN FM", "http://radio.sunfm.com.ua:8000/live"],
    ["Radio Metal", "http://s3.radioheart.ru:8015/radio-metal"],
    ["Яскраве Радiо", "http://vobu.com.ua:8000/yaskrave-128"],
    ["Radio Aristocrats", "http://144.76.79.38:8000/live2"],
    ["Lounge FM", "http://cast.loungefm.com.ua/loungefm?1383955394702.mp3"],
    ["Rock FM", "http://212.90.40.9:8000/rockfm"],
    ["New day", "http://online.1019.kr.ua:8000/radio"],
    ["Радио правильного репа", "http://rpr-stream.pp.ua:8005/rpr"],
    ["Radiomatch", "http://168.144.82.139:8000/;stream/1"],
    ["Родинне радiо", "http://radio.ukraudio.com:8000/rodynne-radio"],
    ["Feel (Одесса)", "http://62.80.190.246:8000/Feel"],
    ["Chernigiv Wave", "http://46.149.84.42:8000/live.ogg"],
    ["UH Radio (Тернополь)", "http://online.uhradio.com.ua:8001/efir"],
    ["Рiвне FM", "http://rivne.fm:8000/live"],
    ["Blacksea wave", "http://85.238.105.86:7052/72,92_FM.mp3"],
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
            el.style.backgroundColor = COLOR_MARK;
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
            li.item(numberItem).style.backgroundColor = COLOR_MARK;
        } else {
            li.item(numberItem).style.backgroundColor = COLOR_NOT_MARK;
            li.item(numberItem + 1).style.backgroundColor = COLOR_MARK;
        }
    } else if (key == 2) {
        if (numberItem == 0) {
            li.item(numberItem).style.backgroundColor = COLOR_MARK;
        } else {
            li.item(numberItem).style.backgroundColor = COLOR_NOT_MARK;
            li.item(numberItem - 1).style.backgroundColor = COLOR_MARK;
        }
    } else {
        li.item(getNumberItem()).style.backgroundColor = COLOR_NOT_MARK;
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
    event.target.style.backgroundColor = COLOR_MARK;
    play();
}

function volume() {
    var vol = document.getElementsByClassName('volume_range').item(0);
    var audio = document.getElementsByTagName('audio').item(getNumberItem());
    audio.volume = parseFloat(vol.value/10);
}