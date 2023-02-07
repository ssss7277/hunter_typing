class ScoresController < ApplicationController
  def level_1
    @sort = Score.where(level: 1)
    @score = @sort.order(score: :desc)
    @number = 1
  end
  
  def level_2
    @sort = Score.where(level: 2)
    @score = @sort.order(score: :desc)
    @number = 1
  end

  def level_3
    @sort = Score.where(level: 3)
    @score = @sort.order(score: :desc)
    @number = 1
  end

  def index
    @sort1 = Score.where(level: 1)
    @score1 = @sort1.order(score: :desc)
    @sort2 = Score.where(level: 2)
    @score2 = @sort2.order(score: :desc)
    @sort3 = Score.where(level: 3)
    @score3 = @sort3.order(score: :desc)
    @number = 1
  end
  
  def new
  end

  def create
    @score = Score.new(score_params)
    if @score.name.present?
      @score.save!
      if @score.level == 1
        redirect_to level_1_path
      elsif @score.level == 2
        redirect_to level_2_path
      elsif @score.level == 3
        redirect_to level_3_path
      end
    else
      flash[:alert] = "名前を入力してください"
      redirect_to request.referer
    end
  end

private
  def score_params
    params.require(:score).permit(:name,:score,:level)
  end
end
