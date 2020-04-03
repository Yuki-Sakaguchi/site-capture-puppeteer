# Puppeteerでサイトのスクリーンショットを取る

# 実行
```
npm run capture
```

# 読み方
ぱぺてぃあ

# Seleniumとの違い
* Puppeteerはヘッドレスブラウザを使うことができるので高速に動作させることができる
* ブラウザはChromeしか使えない
* 開発環境構築が爆速

# 参考
* 基礎
  * https://qiita.com/kanoe/items/9043a81d28a1b733b2e2
  * https://techracho.bpsinc.jp/wingdoor/2019_05_31/75240
* basin認証を突破する
  * https://bake0937.hatenablog.com/entry/2019/12/29/181001
* puppeteerでよく使うであろう処理の書き方
  * https://qiita.com/rh_taro/items/32bb6851303cbc613124
* JSONの操作
  * https://qiita.com/usayuki/items/130c9cab7766d2997a7b

# jsonの設定
複数設定できます。  
サイズとかはPC/SPとかで定数を用意しておいた方が後々楽かもå

```
[
  {
    "name": "スクリーンショットのファイル名",
    "url": "https://example.com/",
    "width": 1280,
    "height": 720,
    "auth": {
      "username": "basic認証のID",
      "password": "basic認証のパスワード"
    },
    "waitTime": 5000
  },
  
  ...

]
```