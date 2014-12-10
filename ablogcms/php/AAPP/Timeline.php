<?php

class AAPP_Timeline extends ACMS_APP
{
    public $version     = '1.0.0';
    public $name        = 'タイムライン';
    public $author      = 'com.appleple';
    public $module      = true;
    public $menu        = 'timeline_index';
    public $desc        = 'iOSの専用投稿アプリより、つぶやきを一覧で表示できるようになります。';

    var $installTable = array(
        'timeline',
    );
        
    var $sequence_key = array(
        'sequence_timeline_id',
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
        $yamlTable  = preg_replace('/%{PREFIX}/', DB_PREFIX, file_get_contents(dirname(__FILE__).'/Timeline/lib/schema.yaml'));
        $tablesData = Spyc::YAMLLoad($yamlTable);
        if ( !is_array($tablesData) ) $tablesData = array();
        if ( !empty($tablesData[0]) ) unset($tablesData[0]);
        $tableList  = array_merge(array_diff(array_keys($tablesData), array('')));
        
        $yamlIndex  = preg_replace('/%{PREFIX}/', DB_PREFIX, file_get_contents(dirname(__FILE__).'/Timeline/lib/index.yaml'));
        $indexData  = Spyc::YAMLLoad($yamlIndex);
        if ( !is_array($indexData) ) $indexData = array();
        if ( !empty($indexData[0]) ) unset($indexData[0]);

        //---------------
        // テーブル作成
        foreach ( $tableList as $tb ) {
            $index = isset($indexData[$tb]) ? $indexData[$tb] : null;
            dbCreateTables($tb, $tablesData[$tb], $index);
        }

        //---------------
        // 初期データ生成
        foreach ( $this->sequence_key as $key ) {
            $SQL    = SQL::newInsert('sequence_plugin');
            $SQL->addInsert('sequence_plugin_key', $key);
            $SQL->addInsert('sequence_plugin_value', 1);
            $DB->query($SQL->get(dsn()), 'exec');
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

        $DB = DB();
        foreach ( $this->sequence_key as $key ) {
            $SQL    = SQL::newDelete('sequence_plugin');
            $SQL->addWhereOpr('sequence_plugin_key', $key);
            $DB->query($SQL->get(dsn()), 'exec');
        }
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
