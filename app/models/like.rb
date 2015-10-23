# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  snippet_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
  validates :user_id, :snippet_id, presence: true
  validates_uniqueness_of :snippet_id, :scope => :user_id

  belongs_to :snippet,
    class_name: "Snippet",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
