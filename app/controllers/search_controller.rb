class SearchController < ApplicationController

  def index
    key = Rails.application.secrets.goodreads_key
    term = params[:q]
    type = params[:type]
    page = params[:page] || 1
    @response = HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=#{term}&field=#{type}&page=#{page}")
    render json: @response, status: :ok
  end

  def show
    key = Rails.application.secrets.goodreads_key
    id = params[:id]
    @response = HTTParty.get("https://www.goodreads.com/book/show.xml?key=#{key}&id=#{id}&text_only=true")
    render json: @response, status: :ok
  end

  private

end
