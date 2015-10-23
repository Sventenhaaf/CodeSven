# == Schema Information
#
# Table name: snippets
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Snippet < ActiveRecord::Base
  validates :title, :author_id, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :likes,
    class_name: "Like",
    foreign_key: :snippet_id,
    primary_key: :id
end
