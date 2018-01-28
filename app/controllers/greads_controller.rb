class GreadsController < ApplicationController

  def show
    key = Rails.application.secrets.goodreads_api_key
    puts 'our key'
    puts key
    # @greads = HTTParty.get("https://www.goodreads.com/api/author_url/Orson%20Scott%20Card?key=#{key}")
    # @greads = HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=End%Game&page=1")
    @greads = HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=Ender%27s+Game")

     # HTTParty.get("https://www.goodreads.com/search.xml?key=#{key}&q=Ender%27s+Game")
    # @greads = HTTParty.get("https://www.goodreads.com/search.xml?key=#{key}")
    @greads = @greads['GoodreadsResponse']['search']['results']['work']
    # puts @greads.to_json
    render json: @greads, status: :ok
    # render json: @greads.to_json, status: :ok
  end

end
