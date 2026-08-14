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
    { url: "tool-jsonescape.html", label: "JSONエスケープ", emoji: "🔧" },
    { url: "tool-latlon.html", label: "緯度経度変換", emoji: "🧭" },
    { url: "tool-sudoku.html", label: "数独メーカー", emoji: "9️⃣" },
    { url: "tool-readability.html", label: "読みやすさ診断", emoji: "📖" },
    { url: "tool-weight.html", label: "体重記録", emoji: "⚖️" },
    { url: "tool-mora.html", label: "音節カウント", emoji: "🎶" },
    { url: "tool-license.html", label: "ライセンス生成", emoji: "📜" },
    { url: "tool-cron.html", label: "Cron式解説", emoji: "⏲️" },
    { url: "tool-biorhythm.html", label: "バイオリズム", emoji: "📈" },
    { url: "tool-birthstone.html", label: "誕生石", emoji: "💎" },
    { url: "tool-splitexpense.html", label: "割り勘計算", emoji: "🧾" },
    { url: "tool-timecalc.html", label: "時間計算", emoji: "⏱️" },
    { url: "tool-sleep.html", label: "睡眠サイクル", emoji: "😴" },
    { url: "tool-prime.html", label: "素数判定", emoji: "🔢" },
    { url: "tool-gcdlcm.html", label: "約数・倍数", emoji: "➗" },
    { url: "tool-regex.html", label: "正規表現", emoji: "🧩" },
    { url: "tool-combination.html", label: "順列・組み合わせ", emoji: "🎲" },
    { url: "tool-birthday.html", label: "誕生日確率", emoji: "🎂" },
    { url: "tool-kanjnum.html", label: "数字→漢数字", emoji: "漢" },
    { url: "tool-area.html", label: "面積・体積変換", emoji: "📐" },
    { url: "tool-compress.html", label: "テキスト圧縮", emoji: "🗜️" },
    { url: "tool-xml.html", label: "XML整形", emoji: "📄" },
    { url: "tool-ip.html", label: "IPアドレス計算", emoji: "🌐" },
    { url: "tool-poker.html", label: "ポーカー役判定", emoji: "🃏" },
    { url: "tool-roulette.html", label: "ルーレット", emoji: "🎰" },
    { url: "tool-hashcheck.html", label: "ハッシュ比較", emoji: "🔑" },
    { url: "tool-encrypt.html", label: "テキスト暗号化", emoji: "🔒" },
    { url: "tool-charwidth.html", label: "文字幅・バイト数", emoji: "📏" },
    { url: "tool-screen.html", label: "画面解像度", emoji: "🖥️" },
    { url: "tool-agespan.html", label: "年齢・期間換算", emoji: "📅" },
    { url: "tool-calendar.html", label: "カレンダー生成", emoji: "🗓️" },
    { url: "tool-chart.html", label: "グラフ描画", emoji: "📊" },
    { url: "tool-markdown.html", label: "Markdown変換", emoji: "📝" },
    { url: "tool-stats.html", label: "統計計算", emoji: "📈" },
    { url: "tool-compound.html", label: "複利計算", emoji: "💰" },
    { url: "tool-teamsplit.html", label: "チーム分け", emoji: "🎯" },
    { url: "tool-jsondiff.html", label: "JSON差分", emoji: "🔍" },
    { url: "tool-csvsort.html", label: "CSVソート", emoji: "📋" },
    { url: "tool-wordfreq.html", label: "単語頻度分析", emoji: "🔢" },
    { url: "tool-savings.html", label: "貯金シミュレーション", emoji: "🏦" },
    { url: "tool-pwstrength.html", label: "パスワード強度", emoji: "🛡️" },
    { url: "tool-deadline.html", label: "締切カウントダウン", emoji: "⏳" },
    { url: "tool-keyworddensity.html", label: "キーワード密度", emoji: "🎯" },
    { url: "tool-fingerprint.html", label: "ブラウザ指紋", emoji: "🖐️" },
    { url: "tool-yaml.html", label: "YAML変換", emoji: "📦" },
    { url: "tool-cssmin.html", label: "CSS圧縮", emoji: "🗜️" },
    { url: "tool-links.html", label: "リンク抽出", emoji: "🔗" },
    { url: "tool-urlbuilder.html", label: "URLパラメータ", emoji: "🔧" },
    { url: "tool-recipe.html", label: "レシピ計算", emoji: "🍳" },
    { url: "tool-passmgr.html", label: "パスワード管理", emoji: "🔐" },
    { url: "tool-sort.html", label: "テキストソート", emoji: "🔠" },
    { url: "tool-mojibake.html", label: "文字化け解読", emoji: "🔍" },
    { url: "tool-dummydata.html", label: "ダミーデータ", emoji: "🗃️" },
    { url: "tool-wind.html", label: "風速変換", emoji: "💨" },
    { url: "tool-compressrate.html", label: "圧縮率チェック", emoji: "📦" },
    { url: "tool-summarize.html", label: "文章要約", emoji: "📝" },
    { url: "tool-humidity.html", label: "湿度・露点計算", emoji: "💧" },
    { url: "tool-rokuyou.html", label: "六曜計算", emoji: "🔮" },
    { url: "tool-era.html", label: "和暦・西暦変換", emoji: "🗓️" },
    { url: "tool-barcode.html", label: "バーコード生成", emoji: "📊" },
    { url: "tool-medical.html", label: "医療費控除計算", emoji: "💊" },
    { url: "tool-season.html", label: "時候の挨拶ジェネレーター", emoji: "✉️" },
    { url: "tool-keigo.html", label: "敬語変換", emoji: "🗣️" },
    { url: "tool-direction.html", label: "方角・九星チェック", emoji: "🧭" },
    { url: "tool-flashcard.html", label: "フラッシュカード作成", emoji: "🃏" },
    { url: "tool-electric.html", label: "電気料金シミュレーション", emoji: "💡" },
    { url: "tool-expiry.html", label: "食品の賞味期限チェッカー", emoji: "🥛" },
    { url: "tool-checker.html", label: "文章チェッカー", emoji: "📝" },
    { url: "tool-bpm.html", label: "BPM・音符の長さ変換", emoji: "🎵" },
    { url: "tool-note.html", label: "音名・周波数変換", emoji: "🎼" },
    { url: "tool-bath.html", label: "お風呂の湯量・ガス代計算", emoji: "🛁" },
    { url: "tool-pressure.html", label: "圧力・エネルギー単位換算", emoji: "⚖️" },
    { url: "tool-quake.html", label: "地震の震度・マグニチュード計算", emoji: "🌊" },
    { url: "tool-gear.html", label: "自転車のギア比計算", emoji: "🚲" },
    { url: "tool-subs.html", label: "サブスク料金比較計算", emoji: "📦" },
    { url: "tool-letter.html", label: "手紙の宛名・敬称早見表", emoji: "💌" },
    { url: "tool-rhyme.html", label: "ラップの韻踏みチェッカー", emoji: "🎤" },
    { url: "tool-lotto.html", label: "ロト6・ロト7の組み合わせ生成", emoji: "🎯" },
    { url: "tool-zodiacmatch.html", label: "星座の相性チェッカー", emoji: "💞" },
    { url: "tool-timetable.html", label: "タイムテーブル生成", emoji: "📅" },
    { url: "tool-traveltime.html", label: "新幹線・飛行機の所要時間計算", emoji: "🚄" },
    { url: "tool-exercise.html", label: "運動の消費カロリー計算", emoji: "🏃" },
    { url: "tool-naming.html", label: "ネーミング生成ツール", emoji: "🏷️" },
    { url: "tool-shortcuts.html", label: "キーボードショートカット検索", emoji: "⌨️" },
    { url: "tool-mailgen.html", label: "メール文面生成ツール", emoji: "✉️" },
    { url: "tool-taxreturn.html", label: "確定申告の必要書類チェックリスト", emoji: "🧾" },
    { url: "tool-jetlag.html", label: "海外旅行の時差ボケ対策計算", emoji: "✈️" },
    { url: "tool-spelling.html", label: "英単語スペリングクイズ", emoji: "🔤" },
    { url: "tool-celebrity.html", label: "誕生日の有名人検索", emoji: "🎂" },
    { url: "tool-microwave.html", label: "電子レンジの加熱時間計算", emoji: "🍱" },
    { url: "tool-dream.html", label: "夢占い（キーワード検索）", emoji: "🌙" },
    { url: "tool-bloodtype.html", label: "血液型相性チェッカー", emoji: "🩸" },
    { url: "tool-cocktail.html", label: "カクテルのアルコール度数計算", emoji: "🍸" },
    { url: "tool-heartrate.html", label: "目標心拍数・運動強度ゾーン計算", emoji: "❤️" },
    { url: "tool-caffeine.html", label: "カフェイン含有量計算", emoji: "☕" },
    { url: "tool-tarot.html", label: "タロット占い（1枚引き）", emoji: "🔮" },
    { url: "tool-nap.html", label: "仮眠サイクル計算（ナップタイマー）", emoji: "😴" },
    { url: "tool-parttime.html", label: "時給・月収計算", emoji: "💼" },
    { url: "tool-volume.html", label: "容器の容積計算（水量）", emoji: "🛁" },
    { url: "tool-scale.html", label: "地図の縮尺計算", emoji: "🗺️" },
    { url: "tool-takehome.html", label: "給料の手取り計算", emoji: "💰" },
    { url: "tool-egg.html", label: "卵の鮮度テスト", emoji: "🥚" },
    { url: "tool-pollen.html", label: "花粉飛散カレンダー", emoji: "🌸" },
    { url: "tool-interviewq.html", label: "面接の逆質問ジェネレーター", emoji: "💬" },
    { url: "tool-gift.html", label: "プレゼント診断", emoji: "🎁" },
    { url: "tool-shoesize.html", label: "靴のサイズ換算", emoji: "👟" },
    { url: "tool-arrival.html", label: "フライト到着時刻計算", emoji: "✈️" },
    { url: "tool-waterintake.html", label: "1日の水分摂取量計算", emoji: "💧" },
    { url: "tool-pace.html", label: "ランニングペース計算", emoji: "🏃" },
    { url: "tool-paint.html", label: "ペンキの必要量計算", emoji: "🎨" },
    { url: "tool-origami.html", label: "正方形の折り紙サイズ計算", emoji: "🟩" },
    { url: "tool-tdee.html", label: "基礎代謝・1日の消費カロリー計算", emoji: "🔥" },
    { url: "tool-taxinout.html", label: "内税・外税変換", emoji: "🧮" },
    { url: "tool-song.html", label: "カラオケの持ち時間計算", emoji: "🎤" },
    { url: "tool-sauna.html", label: "サウナサイクルタイマー", emoji: "♨️" },
    { url: "tool-envelope.html", label: "封筒サイズ計算", emoji: "✉️" },
    { url: "tool-movebox.html", label: "引越し段ボールの個数計算", emoji: "📦" },
    { url: "tool-reading.html", label: "読書スピード計算", emoji: "📖" },
    { url: "tool-protein.html", label: "プロテイン摂取量計算", emoji: "💪" },
    { url: "tool-birthflower.html", label: "誕生花カレンダー", emoji: "🌸" },
    { url: "tool-petage.html", label: "ペットの年齢換算", emoji: "🐶" },
    { url: "tool-battery.html", label: "バッテリー充電時間計算", emoji: "🔋" },
    { url: "tool-budget.html", label: "家計の予算配分計算", emoji: "💰" },
    { url: "tool-bbq.html", label: "バーベキュー食材量計算", emoji: "🍖" },
    { url: "tool-tea.html", label: "お茶の抽出時間計算", emoji: "🍵" },
    { url: "tool-tvsize.html", label: "テレビの視聴距離計算", emoji: "📺" },
    { url: "tool-furniture.html", label: "家具の搬入サイズチェック", emoji: "🛋️" },
    { url: "tool-camping.html", label: "キャンプの持ち物チェックリスト", emoji: "⛺" },
    { url: "tool-plants.html", label: "植物の水やり間隔計算", emoji: "🪴" },
    { url: "tool-sunscreen.html", label: "日焼け止めの必要量計算", emoji: "🧴" },
    { url: "tool-withholding.html", label: "給与の源泉徴収計算", emoji: "🏦" },
    { url: "tool-commute.html", label: "交通費精算計算", emoji: "🚃" },
    { url: "tool-sleeplack.html", label: "睡眠不足チェック", emoji: "😴" },
    { url: "tool-cooking.html", label: "料理の計量変換", emoji: "🥄" },
    { url: "tool-boiledegg.html", label: "半熟卵のゆで時間計算", emoji: "🥚" },
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
