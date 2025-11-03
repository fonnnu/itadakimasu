itadakimasu
============

日本語 / English

—

日本語 (JP)
------------

itadakimasu は、未踏的女子発掘プロジェクト 2023 に参加した際に制作した個人プロジェクトです。農業者とファンをつなぐことを目的とした、シンプルなフロントエンド試作アプリです。

- 公開ページ: https://fonnnu.github.io/itadakimasu/
- リポジトリ: https://github.com/fonnnu/itadakimasu

### 概要

トップ画面で「農業者」「農業者以外（ファン）」を選択し、それぞれの流れでプロフィール入力や日程調整、応援（メッセージ・ギフト）や連絡（簡易チャット）へ進みます。すべて静的ファイルで構成されたプロトタイプで、サーバやデータベースは使用していません。

### 主な画面とフロー

- `index.html`: 役割選択（農業者 / 農業者以外）

農業者フロー:
- `farm_profile.html`: プロフィール入力（農業者）
- `veg.html`: 栽培している野菜の選択
- `occup.html`: 業務種類の選択（例: 収穫、種まき 等）
- `schedule.html`: お手伝いが必要な日程の登録 → `confirm.html`

ファン（農業者以外）フロー:
- `fan_profile.html`: プロフィール入力（ファン）
- `fan_schedule.html`: 参加・訪問の都合の良い日を選択
- 連絡する → `chatting.html`（簡易チャット）
- 応援する → `fan_cheer.html`（メッセージと任意ギフト）→ `fan_confirm.html`

補助ページ:
- `confirm.html`: 登録完了（農業者）
- `fan_confirm.html`: 送信完了（ファン）

スタイル / スクリプト:
- `style.css`: 全体のスタイル
- `script.js`: 一部ボタン動作や画面間の簡易遷移補助

### 使い方（ローカル）

1. このリポジトリをクローンまたはダウンロードします。
2. `index.html` をブラウザで開きます。
   - もしくは簡易サーバを起動してアクセスします（例: Python 3 使用）。
     - `python3 -m http.server 3000` を起動 → `http://localhost:3000/index.html`

### 技術スタック

- HTML / CSS / JavaScript（プレーン）
- 画像等のアセットは一部外部 CDN を参照
- バックエンドや DB なし（プロトタイプ）

### ライセンス

MIT License（`LICENSE` を参照）

—

English (EN)
------------

itadakimasu is a personal prototype created during the Mitou-teki Joshi Discovery Project 2023. It’s a simple front-end app that explores connecting farmers with fans/supporters.

- Live site: https://fonnnu.github.io/itadakimasu/
- Repository: https://github.com/fonnnu/itadakimasu

### Overview

From the landing page, users choose a role: Farmer or Fan (non-farmer). Each flow proceeds through profile input and lightweight scheduling; fans can send supportive messages (and optional gifts) or reach out via a simple chat mock. This is a static prototype—no server or database.

### Key screens and flows

- `index.html`: Role selection (Farmer / Fan)

Farmer flow:
- `farm_profile.html`: Farmer profile input
- `veg.html`: Select vegetables grown
- `occup.html`: Select task type (e.g., harvesting, sowing)
- `schedule.html`: Choose days when help is needed → `confirm.html`

Fan flow:
- `fan_profile.html`: Fan profile input
- `fan_schedule.html`: Choose available days to visit/help
- Contact → `chatting.html` (simple chat mock)
- Cheer → `fan_cheer.html` (message + optional gift) → `fan_confirm.html`

Supporting pages:
- `confirm.html`: Completion (farmer)
- `fan_confirm.html`: Submission completed (fan)

Style / Scripts:
- `style.css`: Global styles
- `script.js`: Small interactions and page transitions

### Local usage

1. Clone or download this repository.
2. Open `index.html` in your browser.
   - Or run a simple static server (e.g., Python 3):
     - `python3 -m http.server 3000` then visit `http://localhost:3000/index.html`

### Tech stack

- Plain HTML / CSS / JavaScript
- Some assets hosted on external CDNs
- No backend or database (prototype)

### License

MIT License (see `LICENSE`)
