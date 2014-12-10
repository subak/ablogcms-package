<?php

class AAPP_Timeline_GET_Admin_App_Timeline_Index extends ACMS_GET_Entry
{
    function get()
    {
        if ( 'app_timeline_index' <> ADMIN ) return '';
        if ( !sessionWithAdministration() ) return '';
        if ( !appStatus('Timeline') ) return '';

        $order  = ORDER ? ORDER : 'desc';
        $limits = configArray('admin_limit_option');
        $limit  = LIMIT ? LIMIT : 20;

        $Tpl    = new Template($this->tpl, new ACMS_Corrector());
        $vars   = array();

        //---------
        // refresh
        if ( !$this->Post->isNull() ) {
            $Tpl->add('refresh');
            $vars['notice_mess'] = 'show';
            $notice = true;
        }

        //----------
        // init SQL
        $DB     = DB::singleton(dsn());
        $SQL    = SQL::newSelect('timeline');

        //-----
        // bid
        $target_bid = $this->Get->get('_bid', BID);

        //------
        // axis
        $axis   = $this->Get->get('axis', 'self');
        if ( 1 < ACMS_RAM::blogRight($target_bid) - ACMS_RAM::blogLeft($target_bid) ) {
            $Tpl->add('axis', array(
                'axis:checked#'.$axis => config('attr_checked')
            ));
        } else {
            $axis   = 'self';
        }

        //-------
        // order
        $vars['order:selected#'.$order]  = config('attr_selected');

        //-------
        // limit
        foreach ( $limits as $val ) {
            $_vars  = array('limit' => $val);
            if ( $limit == $val ) $_vars['selected'] = config('attr_selected');
            $Tpl->add('limit:loop', $_vars);
        }

        $SQL->addLeftJoin('blog', 'blog_id', 'timeline_bid');
        ACMS_Filter::blogTree($SQL, $target_bid, $axis);
        ACMS_Filter::blogStatus($SQL);

        $Pager  = new SQL_Select($SQL);
        $Pager->setSelect('*', 'timeline_amount', null, 'count');
        if ( !$pageAmount = intval($DB->query($Pager->get(dsn()), 'one')) ) {
            $Tpl->add('index#notFound');
            $vars['notice_mess'] = 'show';
            $Tpl->add(null, $vars);
            return $Tpl->get();
        }

        $vars   += $this->buildPager(PAGE, $limit, $pageAmount
            , config('admin_pager_delta'), config('admin_pager_cur_attr'), $Tpl, array(), array('admin' => ADMIN)
        );

        $SQL->setLimit($limit, (PAGE - 1) * $limit);
        $SQL->setOrder('timeline_datetime', $order);

        $q  = $SQL->get(dsn());
        $DB->query($q, 'fetch');

        while ( $row = $DB->fetch($q) ) {
            $tid        = $row['timeline_id'];
            $text       = $row['timeline_text'];
            $path       = $row['timeline_image'];
            $datetime   = $row['timeline_datetime'];
            $uid        = $row['timeline_uid'];
            $bid        = $row['timeline_bid'];

            $feed = array(
                'tid'       => $tid,
                'bid'       => $bid,
                'datetime'  => $datetime,
                'text'      => $text,
            );
            if ( !empty($path) ) {
                $feed['path']   = $path;
            }
            $Tpl->add('feed:loop', $feed);
        }

        $Tpl->add(null, $vars);
        return $Tpl->get();
    }
}
