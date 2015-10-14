json.array!(@snippets) do |snippet|
  json.partial!('snippet', snippet: snippet, show_toys: false)
end
