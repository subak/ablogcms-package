<?php

class AAPP_Timeline_POST_App_Timeline_Delete extends ACMS_POST
{
    function delete($tid)
    {
        $DB     = DB::singleton(dsn());
        
        $SQL    = SQL::newSelect('timeline');
        $SQL->addWhereOpr('timeline_id', $tid);
        $q      = $SQL->get(dsn());
        if ( $DB->query($q, 'fetch') and ($row = $DB->fetch($q)) ) { do {
            if ( empty($row['timeline_image']) ) break;
            $path   = ARCHIVES_DIR.$row['timeline_image'];
            $large  = otherSizeImagePath($path, 'large');
            $tiny   = otherSizeImagePath($path, 'tiny');
            $square = otherSizeImagePath($path, 'square');
            deleteFile($path);
            deleteFile($large);
            deleteFile($tiny);
            deleteFile($square);
        } while ( $row = $DB->fetch($q) ); }

        $DB = DB::singleton(dsn());
        $SQL    = SQL::newDelete('timeline');
        $SQL->addWhereOpr('timeline_id', $tid);
        $DB->query($SQL->get(dsn()), 'exec');

        return true;
    }

    function post()
    {
        
    }
}
