<?php

class AAPP_Timeline_POST_App_Timeline_Index_Create extends ACMS_POST_Entry
{
    function post()
    {
        $this->Post->reset(true);
        $this->Post->setMethod('entry', 'operative', sessionWithContribution());
        $this->Post->setMethod('checks', 'required');
        $this->Post->validate(new ACMS_Validator());

        if ( $this->Post->isValidAll() ) {
            @set_time_limit(0);
            $DB     = DB::singleton(dsn());
            $Column = array();
            $sort   = 1;

            foreach ( $this->Post->getArray('checks') as $tid ) {
                $id     = preg_split('@:@', $tid, null, PREG_SPLIT_NO_EMPTY);
                $tbid   = $id[0];
                $tid    = $id[1];
                if ( !( 1
                    and !!($tid = intval($tid))
                    and !!($tbid = intval($tbid))
                    and ACMS_RAM::blogLeft(SBID) <= ACMS_RAM::blogLeft($tbid)
                    and ACMS_RAM::blogRight(SBID) >= ACMS_RAM::blogRight($tbid)
                    and ( 0
                        or sessionWithCompilation()
                    )
                ) ) continue;

                $SQL    = SQL::newSelect('timeline');
                $SQL->addWhereOpr('timeline_id', $tid);
                $SQL->addWhereOpr('timeline_bid', $tbid);
                $SQL->setOrder('timeline_datetime', 'ASC');
                $feed   = $DB->query($SQL->get(dsn()), 'row');

                //--------
                // text
                $Column[] = array(
                    'id'        => uniqueString(),
                    'clid'      => '',
                    'type'      => 'text',
                    'align'     => 'auto',
                    'sort'      => $sort,
                    'attr'      => '',
                    'group'     => '',
                    'size'      => '',
                    'tag'       => config('column_def_add_text_field_2'),
                    'extend_tag'=> '',
                    'text'      => $feed['timeline_text'],
                );

                //--------
                // image
                if ( !empty($feed['timeline_image']) ) {
                    $sort++;
                    
                    $old    = $feed['timeline_image'];
                    $info   = pathinfo($old);
                    $dirname= empty($info['dirname']) ? '' : $info['dirname'].'/';
                    $ext    = empty($info['extension']) ? '' : '.'.$info['extension'];
                    $newOld = $dirname.uniqid('').$ext;

                    $path   = ARCHIVES_DIR.$old;
                    $large  = otherSizeImagePath($path, 'large');
                    $tiny   = otherSizeImagePath($path, 'tiny');
                    $square = otherSizeImagePath($path, 'square');

                    $newPath    = ARCHIVES_DIR.$newOld;
                    $newLarge   = otherSizeImagePath($newPath, 'large');
                    $newTiny    = otherSizeImagePath($newPath, 'tiny');
                    $newSquare  = otherSizeImagePath($newPath, 'square');

                    copyFile($path, $newPath);
                    copyFile($large, $newLarge);
                    copyFile($tiny, $newTiny);
                    copyFile($square, $newSquare);

                    $Column[] = array(
                        'id'        => uniqid(''),
                        'clid'      => '',
                        'type'      => 'image',
                        'align'     => 'auto',
                        'sort'      => $sort,
                        'attr'      => '',
                        'group'     => '',
                        'size'      => '',
                        'path'      => $newOld,
                        'caption'   => '',
                        'link'      => '',
                        'alt'       => '',
                        'size'      => config('column_def_add_image_size'),
                    );
                }
                $sort++;
            }
            if ( !empty($Column) ) {
                $eid = $this->create($Column);

                $this->redirect(acmsLink(array(
                    'bid'   => BID,
                    'eid'   => $eid,
                )));
            }
        }
        return $this->Post;
    }

    function create($Column)
    {
        $DB     = DB::singleton(dsn());

        //------------
        // eid, title
        $title = 'timeline_'.date('Y-m-d H:i:s', REQUEST_TIME);
        $eid    = $DB->query(SQL::nextval('entry_id', dsn()), 'seq');

        //--------
        // column
        $this->saveColumn($Column, $eid, BID);
        $primaryImageId = null;

        //--------
        // entry
        $SQL    = SQL::newSelect('entry');
        $SQL->setSelect('entry_sort');
        $SQL->addWhereOpr('entry_blog_id', BID);
        $SQL->setOrder('entry_sort', 'DESC');
        $SQL->setLimit(1);
        $esort  = intval($DB->query($SQL->get(dsn()), 'one')) + 1;

        $SQL    = SQL::newSelect('entry');
        $SQL->setSelect('entry_user_sort');
        $SQL->addWhereOpr('entry_user_id', SUID);
        $SQL->addWhereOpr('entry_blog_id', BID);
        $SQL->setOrder('entry_user_sort', 'DESC');
        $SQL->setLimit(1);
        $usort  = intval($DB->query($SQL->get(dsn()), 'one')) + 1;

        $SQL    = SQL::newSelect('entry');
        $SQL->setSelect('entry_category_sort');
        $SQL->addWhereOpr('entry_category_id', null);
        $SQL->addWhereOpr('entry_blog_id', BID);
        $SQL->setOrder('entry_category_sort', 'DESC');
        $SQL->setLimit(1);
        $csort  = intval($DB->query($SQL->get(dsn()), 'one')) + 1;

        $SQL    = SQL::newInsert('entry');
        $row    = array(
            'entry_id'              => $eid, 
            'entry_posted_datetime' => date('Y-m-d H:i:s', REQUEST_TIME), 
            'entry_updated_datetime'=> date('Y-m-d H:i:s', REQUEST_TIME), 
            'entry_category_id'     => null,
            'entry_user_id'         => SUID,
            'entry_blog_id'         => BID,
            'entry_code'            => config('entry_code_prefix').$eid.'.'.config('entry_code_extension'),
            'entry_summary_range'   => null,
            'entry_sort'            => $esort,
            'entry_user_sort'       => $usort,
            'entry_category_sort'   => $csort,
            'entry_status'          => 'draft',
            'entry_title'           => $title,
            'entry_link'            => '', 
            'entry_datetime'        => date('Y-m-d H:i:s', REQUEST_TIME),
            'entry_start_datetime'  => '1000-01-01 00:00:00',
            'entry_end_datetime'    => '9999-12-31 23:59:59',
            'entry_indexing'        => 'on',
            'entry_primary_image'   => null, // $primaryImageId,
            'entry_hash'            => md5(SYSTEM_GENERATED_DATETIME.date('Y-m-d H:i:s', REQUEST_TIME)),
            'entry_current_rev_id'  => enableApproval() ? 0 : 1,
            'entry_last_update_user_id' => SUID,
        );

        foreach ( $row as $key => $val ) $SQL->addInsert($key, $val);
        $DB->query($SQL->get(dsn()), 'exec');
        ACMS_RAM::entry($eid, $row);

        //----------
        // fulltext
        $this->saveFulltext('eid', $eid, $this->loadEntryFulltext($eid));

        return $eid;
    }
}
