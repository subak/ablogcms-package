■ Lessファイルの使い方

■■ フォルダ構成
■■■ Lessファイルを読み込んでいる大元のLessファイル
・acms.less
・acms-admin.less

■■■ 管理画面用のLessファイル
・acms-system.less

■■■ mixin、変数をまとめたLessファイル
・variable.less
・system-variables.less
・mixins.less

■■■ パーツ用のLessファイル
・acms-fonts.less
・alert.less
・animation.less
・badge.less
・button.less
・code.less
・dropdown.less
・edit-page.less
・form.less
・grid.less
・label.less
・list-group.less
・navbar.less
・pager.less
・panel.less
・progress-bar.less
・sidebar.less
・summary.less
・tab-select.less
・table.less
・tabs.less
・title.less
・thumbnails.less
・tooltips.less
・topicpath.less
・type.less
・unit.less
・utilities.less

サイト制作の場合によっては必要ないCSSがacms.cssに入っているため、不必要なCSSを読みたくないということであればacms.lessから該当するパーツの「@import "○○.less";」の記述を削除してご利用ください。

■■ 使用方法
以下、LESSをCSSに変換してスタイルを適応する方法を簡単に3つご紹介しています。
ご参考にしてください。

■■■ less.jsを読み込んで使う方法
less.jsを読み込んで使うには、システムフォルダにある「/themes/system/js/less-1.4.1.min.js」 をHTMLに読み込んでご利用ください。

■■■ GUIツールを使う方法
LessをCSSにコンパイルするにはGUIツールを使って対応することもできます。
有名なものでは、以下のツールが挙げられます。
Koala … 無料 /Windows/Linux/Mac対応 （ http://koala-app.com/ ）
CodeKit … 有料 Mac対応（ http://incident57.com/codekit/index.html ）

■■■ gulpを使う方法
omakeフォルダに同梱している、gulpfile.jsとpackage.jsonの設定をお使いください。
