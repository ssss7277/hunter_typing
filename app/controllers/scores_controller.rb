class ScoresController < ApplicationController
  def level_1
    @sort = Score.where(level: 1)
    @score = @sort.order(score: :desc)
  end
  
  def level_2
    @sort = Score.where(level: 2)
    @score = @sort.order(score: :desc)
  end

  def level_3
    @sort = Score.where(level: 3)
    @score = @sort.order(score: :desc)
  end

  def index
  end
  
  def new
  end

  def create
    @score = Score.new(score_params)
    if @score.save!
      if @score.level == 1
        redirect_to level_1_path
      elsif @score.level == 2
        redirect_to level_2_path
      elsif @score.level == 3
        redirect_to level_3_path
      end
    end
  end

private
  def score_params
    params.require(:score).permit(:name,:score,:level)
  end
end
