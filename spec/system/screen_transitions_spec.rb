require 'rails_helper'

RSpec.describe "ScreenTransitions", type: :system do
  before do
    driven_by(:rack_test)
  end
  context 'ホーム画面から遊び方を確認する時' do 
    it '遊び方ボタンを押すと遷移する' do
      # トップページに移動する
      visit root_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('遊び方')
      #遊び方のボタンをクリックする
      click_on "遊び方"
      # 遊び方ページへ移動したか確認する
      expect(current_path).to eq(explanation_path)
      # ルールという文言が存在するか確認する
      expect(page).to have_content 'ルール'
      # 遊び方ページにタイトルページへ遷移するボタンがあることを確認する
      expect(page).to have_content('タイトルに戻る')
      #タイトルへ戻るのボタンをクリックする
      click_on 'タイトルに戻る', match: :first
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(root_path)
    end
  end

  context 'ホーム画面から設定画面を確認する時' do 
    it '設定ボタンを押すと遷移する' do
      # トップページに移動する
      visit root_path
      # トップページに設定ページへ遷移するボタンがあることを確認する
      expect(page).to have_content('設定')
      #設定のボタンをクリックする
      click_on "設定"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(setting_path)
      # 設定という文言が存在するか確認する
      expect(page).to have_content '設定'
      # 設定ページにタイトルページへ遷移するボタンがあることを確認する
      expect(page).to have_content('タイトルに戻る')
      #タイトルへ戻るのボタンをクリックする
      click_on 'タイトルに戻る', match: :first
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(root_path)
    end
  end

  # context 'ホーム画面からツイッター共有が可能か確認する時' do 
  #   it 'ツイッターアイコンを押すと遷移する' do
  #     # トップページに移動する
  #     visit root_path
  #     # トップページにツイッター共有画面へ遷移するボタンがあることを確認する
  #     expect(page).to have_content('Twitter')
  #     #設定のボタンをクリックする
  #     click_on "Twitter"
  #     # 共有の文言が存在するか確認する
  #     expect(page).to have_content 'ハンター打でハンター文字を覚えよう！'
  #   end
  # end

  # context 'ホーム画面からLINE共有が可能か確認する時' do 
  #   it 'ツイッターアイコンを押すと遷移する' do
  #     # トップページに移動する
  #     visit root_path
  #     #設定のボタンをクリックする
  #     find(".line-it-button").click
  #     # 共有の文言が存在するか確認する
  #     expect(page).to have_content 'LINE'
  #   end
  # end

  context 'ヘッダーロゴからホーム画面に帰れるか確認する時' do 
    it 'ヘッダーロゴを押すとホーム画面に遷移する' do
      # modeページに移動する
      visit mode_path
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにヘッダーロゴがあることを確認する
      expect(page).to have_content('ハンターだ')
      #ヘッダーロゴをクリックする
      click_on "ハンターだ"
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(root_path)
    end
  end

  context 'ヘッダーのランキングボタンからランキング一覧に遷移するか確認する時' do 
    it 'ヘッダーのランキングボタンを押すとランキング一覧画面に遷移する' do
      # タイトルページに移動する
      visit root_path
      #ランキングボタンをクリックする
      click_on "ランキング"
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(scores_path)
      # 順位という文言が存在するか確認する
      expect(page).to have_content '順位'
      # 名前という文言が存在するか確認する
      expect(page).to have_content '名前'
      # 点数という文言が存在するか確認する
      expect(page).to have_content '点数'
    end
  end

  context 'ホーム画面からmode選択画面に移動しそれぞれの難易度のスタート画面に移動できる' do 
    it 'mode画面からnomal_easyのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにnomal_easy_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('EASY')
      #nomal_easy_pathへ遷移するボタンをクリックする
      click_on 'EASY', match: :first
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(nomal_easy_path)
    end

    it 'mode画面からnomal_mediumのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにnomal_medium_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('NOMAL')
      #nomal_medium_pathへ遷移するボタンをクリックする
      click_on 'NOMAL', match: :first
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(nomal_medium_path)
    end

    it 'mode画面からnomal_hardのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにnomal_hard_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('HARD')
      #nomal_hard_pathへ遷移するボタンをクリックする
      click_on 'HARD', match: :first
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(nomal_hard_path)
    end

    it 'mode画面からrank_easyのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにrank_easy_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('EASY')
      #rank_easy_pathへ遷移するボタンをクリックする
      find(".rank_easy").click
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(rank_easy_path)
    end

    it 'mode画面からrank_mediumのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにrank_medium_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('NOMAL')
      #rank_medium_pathへ遷移するボタンをクリックする
      find(".rank_medium").click
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(rank_medium_path)
    end

    it 'mode画面からrank_hardのスタート画面に移動' do
      # トップページに移動する
      visit root_path
      # トップページにmodeページへ遷移するボタンがあることを確認する
      expect(page).to have_content('プレイ')
      #設定のボタンをクリックする
      click_on "プレイ"
      # 設定ページへ移動したか確認する
      expect(current_path).to eq(mode_path)
      # モード選択という文言が存在するか確認する
      expect(page).to have_content 'モード選択'
      # modeページにrank_hard_pathへ遷移するボタンがあることを確認する
      expect(page).to have_content('HARD')
      #rank_easy_pathへ遷移するボタンをクリックする
      find(".rank_hard").click
      # タイトルページへ移動したか確認する
      expect(current_path).to eq(rank_hard_path)
    end
  end
end

