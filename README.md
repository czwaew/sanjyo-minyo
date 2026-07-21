# 三条民謡保存会ホームページ

## 内容
- 保存会紹介
- 練習日・時間・会場
- 活動内容
- 会員募集
- お問い合わせフォーム
- スマートフォン対応
- PWA対応

## 練習情報
- 練習日：毎週木曜日
- 時間：19:30〜21:00
- 場所：一の木戸小学校「わにな〜れ」

## 公開方法
GitHubの新しいリポジトリへ、以下のファイルをアップロードしてください。

- index.html
- style.css
- app.js
- manifest.json
- sw.js

その後、GitHub Pagesを有効にします。

## メールアドレスの変更
`app.js`内の次の部分を、保存会のメールアドレスに変更してください。

```javascript
const destination = "example@example.com";
```
