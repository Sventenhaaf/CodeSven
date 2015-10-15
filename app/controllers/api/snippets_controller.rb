
class Api::SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def create

    @snippet = Snippet.new(snippet_params)
    @snippet.author_id = current_user.id
    if @snippet.save
      render json: @snippet
    else
      flash[:errors] = @snippet.errors
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
