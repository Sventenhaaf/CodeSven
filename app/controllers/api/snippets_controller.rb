
class Api::BenchesController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def create
    @snippet = Snippet.new(snippet_params)
    bench = Bench.create!(bench_params)
    render json: bench
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :title,
      :body
    )
  end
end
