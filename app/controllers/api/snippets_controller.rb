
class Api::SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def create
    if current_user
      @snippet = Snippet.new(snippet_params)
      @snippet.author_id = current_user.id
      if @snippet.save
        render json: @snippet
      else
        render json: "title or body were empty"
      end
    else
      render json: "not logged in"
    end
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :title,
      :body
    )
  end
end
