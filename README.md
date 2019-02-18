# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## group_usersテーブル
<!-- membersテーブルから変更して中間テーブルにしました -->
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :messeages

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- belongs_to :group
- has_many :messeages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_names|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :messeages
- has_many :users
- has_many :members

## messeagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|timestamps|datetime|null: false, foreign_key: true|
|image|text|null: false, foreign_key: true|

### Association
- belongs_to :group_user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
