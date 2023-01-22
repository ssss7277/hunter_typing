class GameController < ApplicationController
  def play
  end

  def home
  end

  def explanation
  end

  def setting
  end

  def mode
  end

  def nomal_easy
  end

  def nomal_medium
  end

  def nomal_hard
  end

  def rank_easy
  end

  def rank_medium
  end

  def rank_hard
  end

  def result
    @result = params[:score]
    @level = params[:level]
    @score = Score.new
  end
end
