//ひらがなからローマ字へ変換
var kanaToRoman = function(targetStr, type, options) {
  /**
  * 変換マップ
  */
  var romanMap = {
    'あ' : 'a',
    'い' : 'i',
    'う' : 'u',
    'え' : 'e',
    'お' : 'o',
    'か' : 'ka',
    'き' : 'ki',
    'く' : 'ku',
    'け' : 'ke',
    'こ' : 'ko',
    'さ' : 'sa',
    'し' : { hepburn : 'shi', kunrei : 'si' },
    'す' : 'su',
    'せ' : 'se',
    'そ' : 'so',
    'た' : 'ta',
    'ち' : { hepburn : 'chi', kunrei : 'ti' },
    'つ' : { hepburn : 'tsu', kunrei : 'tu' },
    'て' : 'te',
    'と' : 'to',
    'な' : 'na',
    'に' : 'ni',
    'ぬ' : 'nu',
    'ね' : 'ne',
    'の' : 'no',
    'は' : 'ha',
    'ひ' : 'hi',
    'ふ' : { hepburn : 'fu', kunrei : 'hu' },
    'へ' : 'he',
    'ほ' : 'ho',
    'ま' : 'ma',
    'み' : 'mi',
    'む' : 'mu',
    'め' : 'me',
    'も' : 'mo',
    'や' : 'ya',
    'ゆ' : 'yu',
    'よ' : 'yo',
    'ら' : 'ra',
    'り' : 'ri',
    'る' : 'ru',
    'れ' : 're',
    'ろ' : 'ro',
    'わ' : 'wa',
    'ゐ' : 'wi',
    'ゑ' : 'we',
    'を' : { hepburn : 'o', kunrei : 'wo' },
    'ん' : 'nn',
    'が' : 'ga',
    'ぎ' : 'gi',
    'ぐ' : 'gu',
    'げ' : 'ge',
    'ご' : 'go',
    'ざ' : 'za',
    'じ' : { hepburn : 'ji', kunrei : 'zi' },
    'ず' : 'zu',
    'ぜ' : 'ze',
    'ぞ' : 'zo',
    'だ' : 'da',
    'ぢ' : { hepburn : 'ji', kunrei : 'di' },
    'づ' : { hepburn : 'zu', kunrei : 'du' },
    'で' : 'de',
    'ど' : 'do',
    'ば' : 'ba',
    'び' : 'bi',
    'ぶ' : 'bu',
    'べ' : 'be',
    'ぼ' : 'bo',
    'ぱ' : 'pa',
    'ぴ' : 'pi',
    'ぷ' : 'pu',
    'ぺ' : 'pe',
    'ぽ' : 'po',
    'きゃ' : 'kya',
    'きぃ' : 'kyi',
    'きゅ' : 'kyu',
    'きぇ' : 'kye',
    'きょ' : 'kyo',
    'くぁ' : 'qa',
    'くぃ' : 'qi',
    'くぇ' : 'qe',
    'くぉ' : 'qo',
    'くゃ' : 'qya',
    'くゅ' : 'qyu',
    'くょ' : 'qyo',
    'しゃ' : { hepburn : 'sha', kunrei : 'sya' },
    'しぃ' : 'syi',
    'しゅ' : { hepburn : 'shu', kunrei : 'syu' },
    'しぇ' : 'sye',
    'しょ' : { hepburn : 'sho', kunrei : 'syo' },
    'ちゃ' : { hepburn : 'cha', kunrei : 'tya' },
    'ちぃ' : ['tyi'],
    'ちゅ' : { hepburn : 'chu', kunrei : 'tyu' },
    'ちぇ' : ['tye'],
    'ちょ' : { hepburn : 'cho', kunrei : 'tyo' },
    'つぇ' : 'tuxe',
    'てゃ' : 'tha',
    'てぃ' : 'thi',
    'てゅ' : 'thu',
    'てぇ' : 'the',
    'てょ' : 'tho',
    'ひゃ' : 'hya',
    'ひぃ' : 'hyi',
    'ひゅ' : 'hyu',
    'ひぇ' : 'hye',
    'ひょ' : 'hyo',
    'ふぁ' : 'fa',
    'ふぃ' : 'fi',
    'ふぇ' : 'fe',
    'ふぉ' : 'fo',
    'みゃ' : 'mya',
    'みぃ' : 'myi',
    'みゅ' : 'myu',
    'みぇ' : 'mye',
    'みょ' : 'myo',
    'ヴぁ' : 'va',
    'ヴぃ' : 'vi',
    'ヴぇ' : 've',
    'ヴぉ' : 'vo',
    'ぎゃ' : 'gya',
    'ぎぃ' : 'gyi',
    'ぎゅ' : 'gyu',
    'ぎぇ' : 'gye',
    'ぎょ' : 'gyo',
    'じゃ' : { hepburn : 'ja', kunrei : 'zya' },
    'じぃ' : 'zyi',
    'じゅ' : { hepburn : 'ju', kunrei : 'zyu' },
    'じぇ' : 'zye',
    'じょ' : { hepburn : 'jo', kunrei : 'zyo' },
    'ぢゃ' : { hepburn : 'dya', kunrei : 'zya' },
    'ぢぃ' : 'dyi',
    'ぢゅ' : { hepburn : 'dyu', kunrei : 'zya' },
    'ぢぇ' : 'dye',
    'ぢょ' : { hepburn : 'dyo', kunrei : 'zya' },
    'びゃ' : 'bya',
    'びぃ' : 'byi',
    'びゅ' : 'byu',
    'びぇ' : 'bye',
    'びょ' : 'byo',
    'ぴゃ' : 'pya',
    'ぴぃ' : 'pyi',
    'ぴゅ' : 'pyu',
    'ぴぇ' : 'pye',
    'ぴょ' : 'pyo',
    'ぁ' : 'xa',
    'ぃ' : 'xi',
    'ぅ' : 'xu',
    'ぇ' : 'xe',
    'ぉ' : 'xo',
    'ゃ' : 'xya',
    'ゅ' : 'xyu',
    'ょ' : 'xyo',
    'っ' : 'xtu',
    'ヴ' : 'vu',
    'ー' : '-',
    '、' : ', ',
    '，' : ', ',
    '。' : '.'
  };

  /**
  * 長音のラテン文字
  */
  var latins = {
    hepburn : {
      'a' : 257,
      'i' : 299,
      'u' : 363,
      'e' : 275,
      'o' : 333
    },
    kunrei : {
      'a' : 226,
      'i' : 238,
      'u' : 251,
      'e' : 234,
      'o' : 244
    }
  };

  if (typeof targetStr !== 'string' && typeof targetStr !== 'number') {
    throw '変換する対象が文字列ではありません。';
  }

  if (typeof type !== 'string' || !type.match(/^(hepburn|kunrei)$/)) type = 'hepburn';

  if (!options) options = {};
  if (typeof options.kana !== 'string') options.kana = 'all';
  if (!options.kana.match(/^(all|hiragana|katakana)$/)) options.kana = 'all';
  if (typeof options.bmp !== 'boolean') options.bmp = true;
  if (typeof options.longSound !== 'string') options.longSound = 'latin';
  if (!options.longSound.match(/^(latin|hyphen)$/)) options.longSound = 'latin';

  var remStr = String(targetStr), result = '', slStr, roman, lastStr;

  /**
  * 残りの文字列から1文字を切り抜く
  * @return {string} 切り抜いた1つの文字列を返す
  */
  var splice = function() {
    var oneChar = remStr.slice(0, 1);
    remStr = remStr.slice(1);
    return oneChar;
  };

  /**
  * 残りの文字列の最初が小文字か判定
  * @return {boolean} 小文字の場合はtrue、そうでない場合はfalseを返す
  */
  var isSmallChar = function() {
    return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょァィゥェォャュョ]$/);
  };

  /**
  * カタカナからひらがなへ変換
  * @param {string} kana 元とおなるカタカナ
  * @return {string} ひらがなへ変換された文字列
  */
  var toHiragana = function(kana) {
    return kana.replace(/[\u30a1-\u30f6]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  };

  /**
  * ひらがなから対応するローマ字を取得
  * @param {string} kana 元となるひらがな
  * @return {string} 見つかった場合は対応するローマ字、見つからなかったら元のひらがなを返す
  */
  var getRoman = function(kana) {
    var roman = romanMap[toHiragana(kana)];
    if (roman) {
      if (typeof roman === 'string') {
        return roman;
      } else if (type === 'hepburn') {
        return roman.hepburn;
      } else if (type === 'kunrei') {
        return roman.kunrei;
      }
    } else {
      return kana;
    }
  };

  while (remStr) {
    slStr = splice();

    if (slStr.match(/^(っ|ッ)$/)) {
      slStr = splice();
      if (isSmallChar()) slStr += splice();

      roman = getRoman(slStr);
      roman = (roman !== slStr ? roman.slice(0, 1) : '') + roman;
    } else {
      if (isSmallChar()) slStr += splice();

      roman = getRoman(slStr);
    }

    var nextRoman = kanaToRoman(remStr.slice(0, 1));
    if (roman === 'n') {
      if (nextRoman.match(/^[aiueo]$/)) {
        roman += type === 'hepburn' ? '-': '\'';
      } else if (options.bmp && nextRoman.match(/^[bmp]/) && type === 'hepburn') {
        roman = 'm';
      }
    } else if (roman === '-') {
      lastStr = result.match(/[aiueo]$/);
      if (lastStr && options.longSound === 'latin') {
        result = result.slice(0, -1);
        roman = String.fromCharCode(latins[type][lastStr[0]]);
      }
    }

    result += roman;
  }

  return result;
};

//ローマ字からひらがなへ変換

var roman2hiragana = {
  'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お',
  'ka':'か', 'ki':'き', 'ku':'く', 'ke':'け', 'ko':'こ',
  'sa':'さ', 'si':'し', 'su':'す', 'se':'せ', 'so':'そ',
  'ta':'た', 'ti':'ち', 'tu':'つ', 'te':'て', 'to':'と', 'chi':'ち', 'tsu':'つ',
  'na':'な', 'ni':'に', 'nu':'ぬ', 'ne':'ね', 'no':'の',
  'ha':'は', 'hi':'ひ', 'hu':'ふ', 'he':'へ', 'ho':'ほ', 'fu':'ふ',
  'ma':'ま', 'mi':'み', 'mu':'む', 'me':'め', 'mo':'も',
  'ya':'や', 'yi':'い', 'yu':'ゆ', 'ye':'いぇ', 'yo':'よ',
  'ra':'ら', 'ri':'り', 'ru':'る', 're':'れ', 'ro':'ろ',
  'wa':'わ', 'wyi':'ゐ', 'wu':'う', 'wye':'ゑ', 'wo':'を',
  'nn':'ん',
  'ga':'が', 'gi':'ぎ', 'gu':'ぐ', 'ge':'げ', 'go':'ご',
  'za':'ざ', 'zi':'じ', 'zu':'ず', 'ze':'ぜ', 'zo':'ぞ', 'ji':'じ',
  'da':'だ', 'di':'ぢ', 'du':'づ', 'de':'で', 'do':'ど',
  'ba':'ば', 'bi':'び', 'bu':'ぶ', 'be':'べ', 'bo':'ぼ',
  'pa':'ぱ', 'pi':'ぴ', 'pu':'ぷ', 'pe':'ぺ', 'po':'ぽ',
  'kya':'きゃ', 'kyu':'きゅ', 'kyo':'きょ',
  'sya':'しゃ', 'syu':'しゅ', 'syo':'しょ',
  'tya':'ちゃ', 'tyi':'ちぃ', 'tyu':'ちゅ', 'tye':'ちぇ', 'tyo':'ちょ', 'cha':'ちゃ', 'chu':'ちゅ', 'che':'ちぇ', 'cho':'ちょ',
  'nya':'にゃ', 'nyi':'にぃ', 'nyu':'にゅ', 'nye':'にぇ', 'nyo':'にょ',
  'hya':'ひゃ', 'hyi':'ひぃ', 'hyu':'ひゅ', 'hye':'ひぇ', 'hyo':'ひょ',
  'mya':'みゃ', 'myi':'みぃ', 'myu':'みゅ', 'mye':'みぇ', 'myo':'みょ',
  'rya':'りゃ', 'ryi':'りぃ', 'ryu':'りゅ', 'rye':'りぇ', 'ryo':'りょ',
  'gya':'ぎゃ', 'gyi':'ぎぃ', 'gyu':'ぎゅ', 'gye':'ぎぇ', 'gyo':'ぎょ',
  'zya':'じゃ', 'zyi':'じぃ', 'zyu':'じゅ', 'zye':'じぇ', 'zyo':'じょ',
  'ja':'じゃ', 'ju':'じゅ', 'je':'じぇ', 'jo':'じょ', 'jya':'じゃ', 'jyi':'じぃ', 'jyu':'じゅ', 'jye':'じぇ', 'jyo':'じょ',
  'dya':'ぢゃ', 'dyi':'ぢぃ', 'dyu':'ぢゅ', 'dye':'ぢぇ', 'dyo':'ぢょ',
  'bya':'びゃ', 'byi':'びぃ', 'byu':'びゅ', 'bye':'びぇ', 'byo':'びょ',
  'pya':'ぴゃ', 'pyi':'ぴぃ', 'pyu':'ぴゅ', 'pye':'ぴぇ', 'pyo':'ぴょ',
  'fa':'ふぁ', 'fi':'ふぃ', 'fe':'ふぇ', 'fo':'ふぉ',
  'fya':'ふゃ', 'fyu':'ふゅ', 'fyo':'ふょ',
  'xa':'ぁ', 'xi':'ぃ', 'xu':'ぅ', 'xe':'ぇ', 'xo':'ぉ', 'la':'ぁ', 'li':'ぃ', 'lu':'ぅ', 'le':'ぇ', 'lo':'ぉ',
  'xya':'ゃ', 'xyu':'ゅ', 'xyo':'ょ',
  'xtu':'っ', 'xtsu':'っ',
  'wi':'うぃ', 'we':'うぇ',
  'va':'ヴぁ', 'vi':'ヴぃ', 'vu':'ヴ', 've':'ヴぇ', 'vo':'ヴぉ'
};

/*
* roman -> hiragana
*
* @param (String) roman:
* @return (String): hiragana
*/
function r2h(roman) {
  var i, iz, match, regex,
      hiragana = '', table = roman2hiragana;

  regex = new RegExp((function(table){
    var key,
        s = '^(?:';

    for (key in table) if (table.hasOwnProperty(key)) {
      s += key + '|';
    }
    return s + '(?:n(?![aiueo]|y[aiueo]|$))|' + '([^aiueon])\\1)';
  })(table));
  for (i = 0, iz = roman.length; i < iz; ++i) {
    if (match = roman.slice(i).match(regex)) {
      if (match[0] === 'n') {
        hiragana += 'ん';
      } else if (/^([^n])\1$/.test(match[0])) {
        hiragana += 'っ';
        --i;
      } else {
        hiragana += table[match[0]];
      }
      i += match[0].length - 1;
    } else {
      hiragana += roman[i];
    }
  }
  return hiragana;
};



//let question = ["gonn","reorio","kirua","kuroro","goreinu","kurapika","mitosann","togasiyosihiro","kumo","annkokutairiku","kurutazoku","kujiratou","yanngasu"];
//let jan_question = ["ごん","れおりお","きるあ","くろろ","ごれいぬ","くらぴか","みとさん","とがしよしひろ","くも","あんこくたいりく","くるたぞく","くじらとう","やんがす"];
let q_no = Math.floor( Math.random() * question.length);
let jan_q_no = q_no;
let q_i = 0;
let jan_q_i = 0;
let q_len = question[q_no].length;
let jan_q_len = jan_question[q_no].length;
let typing_characters = [];

// 効果音
const ok_sounds_url = "<%=audio_path('/ok.mp3')%>"
const ok = new Audio(ok_sounds_url);
const bad_sounds_url = "<%=audio_path('/bad.mp3')%>"
const bad = new Audio(bad_sounds_url);
const good_sounds_url = "<%=audio_path('/good.mp3')%>"
const good = new Audio(good_sounds_url);

// カウントダウン
var timer_ID;
var time = 60;

// 得点
let score = 0;
let state = true;
function dispScore() {
  document.getElementById("totalScore").textContent = score;
}

window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){

  let keyCode = event.key;
  //スタート時に問題を表示する
  if (q_i == 0){
    document.getElementById("rome").innerHTML = question[q_no].substring(q_i, q_len);
    document.getElementById("jan").innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
    document.getElementsByClassName("hunter")[0].innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
  }

  //正解の入力をされた場合
  if (question[q_no].charAt(q_i) == keyCode) {
    good.currentTime = 0;
    good.play();
    //keycodeをtyping_character配列に入れる
    typing_characters.push(keyCode);
    q_i++;
    document.getElementById("rome").innerHTML = question[q_no].substring(q_i, q_len);

    //typing_characters配列の要素がひらがなになっているならば
    good.play();
    var Linking = typing_characters.join("");
    console.log(Linking);
    console.log(jan_question[jan_q_no].substring(jan_q_i, jan_q_i+1));

    if (r2h(Linking) == jan_question[jan_q_no].substring(jan_q_i, jan_q_i+1)){
      // jan_question配列の一文字目の表示を消す
      jan_q_i++;
      document.getElementById("jan").innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
      document.getElementsByClassName("hunter")[0].innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
      //typing_charactersを空っぽにする
      typing_characters = [];
    }

    //最後まで打ち終わった場合
    if (q_len == q_i){
      ok.play();
      score++;
      dispScore();
      q_no = Math.floor( Math.random() * question.length);
      jan_q_no = q_no;
      q_i = 0;
      jan_q_i = 0;
      q_len = question[q_no].length;
      jan_q_len = jan_question[q_no].length;
      document.getElementById("rome").innerHTML = question[q_no].substring(q_i, q_len);
      document.getElementById("jan").innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
      document.getElementsByClassName("hunter")[0].innerHTML = jan_question[jan_q_no].substring(jan_q_i, jan_q_len);
    }
  }else{
    bad.currentTime = 0;
    bad.play();
  }
}

// カウントダウンの設定
function minusTime() {
  time--;
  dispTime();
  if (time==0) {
    clearInterval(timer_ID);
  }
}

function dispTime() {
  document.getElementsByTagName("output")[0].innerHTML = time;
}

// キー入力するとカウントダウンが開始
window.addEventListener('keypress',function(e) {
  dispTime();
  timer_ID = setInterval("minusTime()", 1000);
  }, {
  once: true
});

// 表示切り替えボタン
function janSwitching() {
  if (document.all.jan.style.display == "none") {
    document.all.jan.style.display = "block"
  } else {
    document.all.jan.style.display = "none"
  }
}

function romeSwitching() {
  if (document.all.rome.style.display == "none") {
    document.all.rome.style.display = "block"
  } else {
    document.all.rome.style.display = "none"
  }
}
