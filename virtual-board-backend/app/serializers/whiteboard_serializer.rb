class WhiteboardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :to_dos
  # has_one :user
end