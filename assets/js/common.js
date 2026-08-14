// 共通スクリプト: ナビゲーション・コピー機能・広告スロット・アナリティクス
(function () {
  "use strict";

  // ツール一覧（ナビゲーション表示用）
  var TOOLS = [
    { url: "tool-wordcount.html", label: "文字数カウンター", emoji: "🔤" },
    { url: "tool-password.html", label: "パスワード生成", emoji: "🔑" },
    { url: "tool-uuid.html", label: "UUID生成", emoji: "🆔" },
    { url: "tool-base64.html", label: "Base64変換", emoji: "🔐" },
    { url: "tool-hash.html", label: "ハッシュ生成", emoji: "🧮" },
    { url: "tool-unix.html", label: "Unix時間変換", emoji: "⏰" },
    { url: "tool-random.html", label: "乱数生成", emoji: "🎲" },
    { url: "tool-json.html", label: "JSON整形", emoji: "🧩" },
    { url: "tool-diff.html", label: "テキスト差分", emoji: "📑" },
    { url: "tool-stopwatch.html", label: "ストップウォッチ", emoji: "⏱️" },
    { url: "tool-url.html", label: "URL変換", emoji: "🔗" },
    { url: "tool-percent.html", label: "パーセント計算", emoji: "➗" },
    { url: "tool-date.html", label: "日付計算", emoji: "📅" },
    { url: "tool-age.html", label: "年齢計算", emoji: "🎂" },
    { url: "tool-unit.html", label: "単位変換", emoji: "📏" },
    { url: "tool-qr.html", label: "QRコード", emoji: "📱" },
    { url: "tool-timer.html", label: "タイマー", emoji: "⏳" },
    { url: "tool-replace.html", label: "テキスト置換", emoji: "🔁" },
    { url: "tool-case.html", label: "大小文字変換", emoji: "🔠" },
    { url: "tool-calc.html", label: "電卓", emoji: "🧮" },
    { url: "tool-list.html", label: "リスト整理", emoji: "🗂️" },
    { url: "tool-pick.html", label: "抽選ツール", emoji: "🎯" },
    { url: "tool-tz.html", label: "タイムゾーン", emoji: "🌍" },
    { url: "tool-bmi.html", label: "BMI計算", emoji: "⚖️" },
    { url: "tool-color.html", label: "カラー変換", emoji: "🎨" },
    { url: "tool-lorem.html", label: "ダミー文章", emoji: "📝" },
    { url: "tool-roman.html", label: "ローマ数字", emoji: "🏛️" },
    { url: "tool-escape.html", label: "HTMLエスケープ", emoji: "🛡️" },
    { url: "tool-csv.html", label: "CSV⇔JSON", emoji: "🧾" },
    { url: "tool-luhn.html", label: "カード検証", emoji: "💳" },
    { url: "tool-emoji.html", label: "絵文字", emoji: "😊" },
    { url: "tool-whitespace.html", label: "空白除去", emoji: "🧹" },
    { url: "tool-base.html", label: "進数変換", emoji: "🔢" },
    { url: "tool-morse.html", label: "モールス信号", emoji: "📡" },
    { url: "tool-caesar.html", label: "シーザー暗号", emoji: "🔐" },
    { url: "tool-tts.html", label: "読み上げ", emoji: "🗣️" },
    { url: "tool-notes.html", label: "メモ帳", emoji: "📓" },
    { url: "tool-tax.html", label: "消費税計算", emoji: "🧾" },
    { url: "tool-tip.html", label: "チップ計算", emoji: "💵" },
    { url: "tool-dice.html", label: "サイコロ", emoji: "🎲" },
    { url: "tool-imgconv.html", label: "画像変換", emoji: "🖼️" },
    { url: "tool-pomodoro.html", label: "ポモドーロ", emoji: "🍅" },
    { url: "tool-omikuji.html", label: "おみくじ", emoji: "🎋" },
    { url: "tool-zodiac.html", label: "星座占い", emoji: "🌠" },
    { url: "tool-palindrome.html", label: "回文チェッカー", emoji: "🔄" },
    { url: "tool-currency.html", label: "為替換算", emoji: "💱" },
    { url: "tool-typing.html", label: "タイピング", emoji: "⌨️" },
    { url: "tool-calorie.html", label: "カロリー計算", emoji: "🔥" },
    { url: "tool-textstats.html", label: "テキスト統計", emoji: "📊" },
    { url: "tool-anagram.html", label: "アナグラム", emoji: "🔀" },
    { url: "tool-holiday.html", label: "祝日計算", emoji: "📅" },
    { url: "tool-shopping.html", label: "買い物リスト", emoji: "🛒" },
    { url: "tool-ruler.html", label: "オンライン定規", emoji: "📏" },
    { url: "tool-furigana.html", label: "ふりがな変換", emoji: "🔤" },
    { url: "tool-bulk.html", label: "文字列一括変換", emoji: "🔧" },
    { url: "tool-weekday.html", label: "曜日計算", emoji: "📆" },
    { url: "tool-goro.html", label: "語呂合わせ", emoji: "🎵" },
    { url: "tool-pwcheck.html", label: "パスワード強度", emoji: "🛡️" },
    { url: "tool-group.html", label: "グループ分け", emoji: "👥" },
    { url: "tool-foodcal.html", label: "カロリー目安", emoji: "🍚" },
    { url: "tool-anniversary.html", label: "記念日計算", emoji: "💝" },
    { url: "tool-kanji.html", label: "漢字チェッカー", emoji: "漢" },
  ];

  function renderHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var current = window.location.pathname.split("/").pop();
    var nav = "";
    for (var i = 0; i < TOOLS.length; i++) {
      var active = TOOLS[i].url === current ? ' style="color:var(--primary);background:#eff6ff;"' : "";
      nav += '<a href="' + TOOLS[i].url + '"' + active + '>' + TOOLS[i].emoji + " " + TOOLS[i].label + "</a>";
    }
    header.innerHTML =
      '<a class="logo" href="index.html">🛠️ FreeTools</a>' +
      '<nav>' + nav + "</nav>";
  }

  function renderFooter() {
    var footer = document.getElementById("site-footer");
    if (!footer) return;
    var year = new Date().getFullYear();
    footer.innerHTML =
      '<p>FreeTools — 無料で使える便利なオンラインツール集</p>' +
      '<p style="margin-top:4px;"><a href="privacy.html">プライバシーポリシー</a></p>' +
      '<p style="margin-top:4px;">© ' + year + ' FreeTools. All rights reserved.</p>';
  }

  // コピー機能
  window.copyText = function (elId) {
    var el = document.getElementById(elId);
    if (!el) return;
    var text = el.value !== undefined ? el.value : el.innerText;
    var done = function () {
      var btn = document.activeElement;
      if (btn) {
        var old = btn.innerText;
        btn.innerText = "✓ コピーしました";
        setTimeout(function () { btn.innerText = old; }, 1500);
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  };

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    if (window.SITE_CONFIG) {
      if (window.initAnalytics) window.initAnalytics();
      // 全広告スロットを初期化
      var slots = document.querySelectorAll(".ad-slot");
      for (var i = 0; i < slots.length; i++) {
        if (window.renderAdSlot) window.renderAdSlot(slots[i].id);
      }
    }
  });
})();
