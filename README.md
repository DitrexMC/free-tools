# 🛠️ FreeTools — 無料オンラインツール集

収益化可能な Web サービスです。インストール不要・完全無料のオンラインツールを提供するサイトで、すべての処理がブラウザ内で完結します（プライバシー安全）。

**ライブ URL**: `https://ditrexmc.github.io/free-tools/`

## 📁 構成

```
index.html          トップページ（ツール一覧）
tool-*.html         各ツールのページ（全202種類）
assets/css/style.css  共通デザイン
assets/js/common.js   共通スクリプト（ナビ・広告・アナリティクス）
assets/js/config.js   収益化設定ファイル ⭐
```

## 💰 収益化の始め方（3ステップ）

現状、サイトは**ライブ稼働中**ですが、広告等の本人確認（KYC）が必要な収益化はあなたのアカウントがないと有効化できません。以下の手順で簡単に収益を開始できます。

### ステップ1: Google AdSense（広告収入・王道）

1. https://adsense.google.com にアクセスしてアカウント作成（GoogleアカウントでOK）
2. サイトURL `https://ditrexmc.github.io/free-tools/` を登録して審査申請
3. 審査通過後、`ca-pub-XXXXXXXXXXXX` 形式の ID が発行される
4. `assets/js/config.js` の `adsenseClient` にそのIDを入力するだけ
   ```js
   adsenseClient: "ca-pub-XXXXXXXXXXXXXXXX",
   ```
5. 保存してプッシュすれば、全ページの広告スロット（`ad-top` / `ad-bottom`）が自動表示されます

### ステップ2: 暗号通貨寄付（本人確認不要）

`assets/js/config.js` の `donation` に、ご自身のウォレットアドレスを入力してください。表示用の寄付リンクが有効になります。

### ステップ3: アフィリエイト

`affiliates` 配列に宣伝したい商品リンク（Amazonアソシエイト等）を追加してください。

### オプション: アクセス解析

`analyticsId` に Google Analytics の測定ID（`G-XXXX`）を入れるとアクセス解析が始まります。

## 📈 収入のイメージ（参考）

| 収益源 | 月間PV | 想定収益/月 |
|---|---|---|
| AdSense | 1万PV | 約$15〜$50 |
| AdSense | 10万PV | 約$150〜$500 |
| 寄付・アフィリエイト | — | 運次第 |

→ 上位表示されるキーワード（文字数カウンター、パスワード生成 等）は検索流入が安定しています。

## 🔄 自動運用

- `.github/workflows/uptime.yml`: 6時間毎にサイト稼働確認を自動実行（GitHub Actions）
- サイトは GitHub Pages 上でホストされているため、**無料で24時間365日稼働**し続けます

## 🔒 注意

- プッシュする前に `assets/js/config.js` に**シークレットやAPIキーを入れない**こと
- AdSense 審査時はプライバシーポリシー等が求められる場合があります。必要に応じて `privacy.html` を追加してください。
