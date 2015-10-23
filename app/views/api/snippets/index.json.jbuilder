
json.array! @snippets do |snippet|

  json.body snippet.body
  json.title snippet.title
  json.author snippet.author.username
  json.id snippet.id
  json.likes snippet.likes.count
  if signed_in? && snippet.likes.any?{|s| s.user_id == current_user.id}
    json.likeid (snippet.likes.detect{|s| s.user_id == current_user.id}).id
  else
    json.likeid false
  end
end
