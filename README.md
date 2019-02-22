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
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
<!-- throughオプションによりgroup_users経由でgroupsにアクセス -->
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messeages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
<!-- throughオプションによりgroup_users経由でusersにアクセス -->
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messeages

## messeagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|timestamps|datetime|null: false, foreign_key: true|
|image|text|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
