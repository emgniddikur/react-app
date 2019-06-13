Create React Appコマンドを実行してアプリケーションを作成。

## コンポーネント図、データフロー図 
[ここをクリック](https://www.draw.io/?state=%7B%22ids%22:%5B%221Mopynv8m9mjoLCUTw6EjmkV4LyIG_ADQ%22%5D,%22action%22:%22open%22,%22userId%22:%22100742367029514067037%22%7D#G1Mopynv8m9mjoLCUTw6EjmkV4LyIG_ADQ)

## 仕様した技術要素
- @babel/runtime: 7.4.4
- @clarketm/saga-monitor 2.0.1
- material-ui/core 4.0.1
- @material-ui/icons 4.0.1
- axios 0.18.0
- history 4.9.0
- prop-types 15.7.2
- react 16.8.6
- react-dom 16.8.6
- react-redux 5.0.4
- react-router-dom 4.2.2
- react-router-redux 5.0.0-alpha.9
- react-scripts 2.1.8
- redux 4.0.1
- redux-logger 3.0.6
- redux-saga 1.0.2

## ルーティング
| path            | summary             |
|:----------------|:--------------------|
| /auth           | authentication      |
| /items          | item list           |
| /items/new      | item creation       |
| /items/:id/edit | item edit           |
| /items/search   | item search results |
| /error          | error               |

## 開発環境のセットアップ
1.Node >= 6 及び npm >= 5.2 の環境を用意する。  
2.リポジトリのクローンする。
```
$ git clone git@bitbucket.org:teamlabengineering/kato-front-end.git
```
3.開発モードでアプリケーションを起動する。
```
$ npm start
```

## デバッグ
### Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja

### saga-monitorでredux-sagaのタスクツリーを見る
ブラウザのデベロッパーツールのコンソール画面で以下を実行
```
> $$LogSagas()
```
