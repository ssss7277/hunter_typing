require 'rails_helper'
require 'spec_helper'

RSpec.describe "Games", type: :feature do
  feature 'nomal_easyのゲーム機能を確認する時' do
    it 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # nomal_easy_pathに移動する
      visit nomal_easy_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('練習モード:easy')
      # nomal_easy_pathへ移動したか確認する
      expect(current_path).to eq(nomal_easy_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q").text.chars
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(5)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'
    end
  end

  feature 'nomal_mediumのゲーム機能を確認する時' do
    it 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # nomal_easy_pathに移動する
      visit nomal_medium_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('練習モード:nomal')
      # nomal_medium_pathへ移動したか確認する
      expect(current_path).to eq(nomal_medium_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q").text.chars
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(10)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'
    end
  end

  feature 'nomal_hardのゲーム機能を確認する時' do
    it 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # nomal_easy_pathに移動する
      visit nomal_hard_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('練習モード:hard')
      # nomal_hard_pathへ移動したか確認する
      expect(current_path).to eq(nomal_hard_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q").text.chars
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(15)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'
    end
  end

  feature 'rank_easyのゲーム機能を確認する時' do
    fit 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # rank_easy_pathに移動する
      visit rank_easy_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('ランキングモード:easy')
      # rank_easy_pathへ移動したか確認する
      expect(current_path).to eq(rank_easy_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q", visible: false).text.chars
      # byebug
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(5)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'

      find('input[type="text"]').set("testdesu")
      click_on 'ランキングに登録'
      expect(current_path).to eq(level_1_path)
      expect(page).to have_content('testdesu')
    end
  end

  feature 'rank_easyのゲーム機能を確認する時' do
    fit 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # rank_medium_pathに移動する
      visit rank_medium_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('ランキングモード:nomal')
      # rank_easy_pathへ移動したか確認する
      expect(current_path).to eq(rank_medium_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q", visible: false).text.chars
      # byebug
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(10)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'

      find('input[type="text"]').set("testdesu")
      click_on 'ランキングに登録'
      expect(current_path).to eq(level_2_path)
      expect(page).to have_content('testdesu')
    end
  end

  feature 'rank_easyのゲーム機能を確認する時' do
    fit 'スペースキーを押すとゲームが開始され、スコアページに遷移する', js: true do
      # rank_hard_pathに移動する
      visit rank_hard_path
      # トップページに遊びかたページへ遷移するボタンがあることを確認する
      expect(page).to have_content('ランキングモード:hard')
      # rank_easy_pathへ移動したか確認する
      expect(current_path).to eq(rank_hard_path)
      #スペースキーを入力する
      page.driver.browser.action.send_keys(:space).perform
      #正解のキーを入力する
      test_q = find(".rome_q", visible: false).text.chars
      # byebug
      test_q.each do |c|
        page.driver.browser.action.send_keys(c).perform
      end
      sleep(15)
      #result画面に遷移しスコアが表示される
      expect(current_path).to eq(result_path)
      expect(page).to have_content '1点'

      find('input[type="text"]').set("testdesu")
      click_on 'ランキングに登録'
      expect(current_path).to eq(level_3_path)
      expect(page).to have_content('testdesu')
    end
  end
end
