
json.array! @snippets do |snippet|

  json.body snippet.body
  json.title snippet.title
  json.author snippet.author.username
  json.likes snippet.likes.count
end
