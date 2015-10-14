
class Api::SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def create
    @snippet = Snippet.new(snippet_params)
    snippet = Snippet.create!(snippet_params)
    render json: snippet
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :title,
      :body
    )
  end
end
