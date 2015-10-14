json.array!(@snippets) do |snippet|
  json.partial!('snippets', snippet: snippet)
end
