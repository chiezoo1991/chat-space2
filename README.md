# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## group_userテーブル
<!-- membersテーブルから変更して中間テーブルにしました -->
<!-- referencesで定義し直しました -->
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
<!-- 外部キーを定義していたので削除 -->
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false|
|password|string|null: false|

### Association
<!-- throughオプションによりgroup_users経由でgroupsにアクセス -->
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messeages

## groupsテーブル
<!-- group name→nameに変更、user_idカラムを削除 -->
<!-- 無駄な外部キーを削除 -->
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
<!-- throughオプションによりgroup_users経由でusersにアクセス -->
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messeages

## messeagesテーブル
<!-- null:falseを削除 -->
<!-- timestampsを削除 -->
|Column|Type|Options|
|------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|
|body|text||
|image|text||

### Association
- belongs_to :user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
