<?php

class AAPP_Mixpanel extends ACMS_APP
{
    public $version     = '1.0.0';
    public $name        = 'Mixpanel';
    public $author      = 'com.appleple';
    public $module      = true;
    public $menu        = 'mixpanel_index';
    public $desc        = 'mixpanelと連携するためのモジュールを提供します。';

    var $installTable = array(
        'mixpanel',
    );

    /**
     * インストールする前の環境チェック処理
     *
     * @return bool
     */
    public function checkRequirements()
    {
        return true;
    }

    /**
     * インストールするときの処理
     * データベーステーブルの初期化など
     *
     * @return void
     */
    public function install()
    {
        $DB = DB();

        //------------
        // テーブル削除
        dbDropTables($this->installTable);
        
        //---------------------
        // テーブルデータ読み込み
        $yamlTable  = preg_replace('/%{PREFIX}/', DB_PREFIX, file_get_contents(dirname(__FILE__).'/Mixpanel/lib/schema.yaml'));
        $tablesData = Spyc::YAMLLoad($yamlTable);
        if ( !is_array($tablesData) ) $tablesData = array();
        if ( !empty($tablesData[0]) ) unset($tablesData[0]);
        $tableList  = array_merge(array_diff(array_keys($tablesData), array('')));
        
        $yamlIndex  = preg_replace('/%{PREFIX}/', DB_PREFIX, file_get_contents(dirname(__FILE__).'/Mixpanel/lib/index.yaml'));
        $indexData  = Spyc::YAMLLoad($yamlIndex);
        if ( !is_array($indexData) ) $indexData = array();
        if ( !empty($indexData[0]) ) unset($indexData[0]);

        //---------------
        // テーブル作成
        foreach ( $tableList as $tb ) {
            $index = isset($indexData[$tb]) ? $indexData[$tb] : null;
            dbCreateTables($tb, $tablesData[$tb], $index);
        }
    }

    /**
     * アンインストールするときの処理
     * データベーステーブルの始末など
     *
     * @return void
     */
    public function uninstall()
    {
        dbDropTables($this->installTable);
    }

    /**
     * アップデートするときの処理
     *
     * @return bool
     */
    public function update()
    {
        return true;
    }

    /**
     * 有効化するときの処理
     *
     * @return bool
     */
    public function activate()
    {
        return true;
    }

    /**
     * 無効化するときの処理
     *
     * @return bool
     */
    public function deactivate()
    {
        return true;
    }
}
