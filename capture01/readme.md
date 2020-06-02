# Puppeteerでサイトのスクリーンショットを取る

# 実行
```
npm run capture01
```

# jsonの設定
対象のサイトをjsonで詳細に設定する。   
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
