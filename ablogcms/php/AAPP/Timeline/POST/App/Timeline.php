<?php

class AAPP_Timeline_POST_App_Timeline extends ACMS_POST
{
    public function post()
    {
        //---------------------
        // アプリが有効かチェック
        if ( !appStatus('Timeline') ) die('error');

        $text = $this->Post->get('timeline_text');
        if ( empty($text) ) die('error');

        //---------
        // 画像保存
        $imgData = createImages(array(
            'normal'    => config('column_def_add_image_size'),
            'tiny'      => config('image_size_tiny'),
            'large'     => config('image_size_large'),
            'square'    => config('image_size_square'),
        ), ARCHIVES_DIR, 'timeline_image');
        $path   = isset($imgData['path']) ? $imgData['path'] : '';

        //----------
        // DBに保存
        $DB     = DB::singleton(dsn());
        $tid    = $DB->query(SQL::nextval('timeline_id', dsn(), true), 'seq');

        $row    = array(
            'timeline_id'       => $tid,
            'timeline_text'     => $this->Post->get('timeline_text'),
            'timeline_image'    => $path,
            'timeline_geo'      => '',
            'timeline_datetime' => date('Y-m-d H:i:s', REQUEST_TIME),
            'timeline_uid'      => SUID,
            'timeline_bid'      => BID,
        );

        $SQL    = SQL::newInsert('timeline');
        foreach ( $row as $key => $val ) $SQL->addInsert($key, $val);
        $DB->query($SQL->get(dsn()), 'exec');

        //-------
        // cache
        if ( $this->isCacheDelete ) {
            ACMS_POST_Cache::clear();
            ACMS_POST_Cache::refresh();
            ACMS_POST_Log_Access_Delete::refresh();
        }
        
        die('success');
    }
}