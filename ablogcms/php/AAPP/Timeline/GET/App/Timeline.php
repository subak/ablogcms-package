<?php

class AAPP_Timeline_GET_App_Timeline extends ACMS_GET
{
    var $_axis = array(
        'bid'   => 'self',
    );

    var $_scope = array(
        'uid'       => 'global',
        'date'      => 'global',
        'start'     => 'global',
        'end'       => 'global',
    );

    public function get()
    {
        if ( !appStatus('Timeline') ) return '';
        
        $vars   = array();

        $order  = config('timeline_list_order', 'desc');
        $limit  = config('timeline_list_limit', 20);
        $from   = (PAGE - 1) * $limit;

        $DB     = DB::singleton(dsn());
        $Tpl    = new Template($this->tpl, new ACMS_Corrector());

        $SQL    = SQL::newSelect('timeline');
        $SQL->addWhereOpr('timeline_bid', $this->bid);
        $SQL->setOrder('timeline_datetime', $order);

        $Amount = new SQL_Select($SQL);
        $Amount->setSelect('*', 'timeline_amount', null, 'count');
        $itemsAmount = intval($DB->query($Amount->get(dsn()), 'one'));

        if ( $itemsAmount < 1 ) {
            $Tpl->add('notFound');
            return $Tpl->get();
        }

        if ( ($from + $limit) < $itemsAmount ) {
            $vars['nextPage'] = intval(PAGE) + 1;
        }

        $limit  = ((($from + $limit) > $itemsAmount) ? ($itemsAmount - $from) : $limit);
        $SQL->setLimit($limit, $from);
        $q  = $SQL->get(dsn());
        $DB->query($q, 'fetch');

        while ( $row = $DB->fetch($q) ) {

            $uid    = $row['timeline_uid'];
            $feed   = array(
                'uid'           => $uid,
                'user_name'     => ACMS_RAM::userName($uid),
                'text'          => $row['timeline_text'],
            );

            if ( !empty($row['timeline_image']) ) {
                $normal = ARCHIVES_DIR.$row['timeline_image'];
                if ( $xy = @getimagesize($normal) ) {
                    $feed['path']   = $normal;
                    $feed['x']  = $xy[0];
                    $feed['y']  = $xy[1];
                }

                $tiny   = otherSizeImagePath($normal, 'tiny');
                if ( $xy = @getimagesize($tiny) ) {
                    $feed['tinyPath']   = $tiny;
                    $feed['tinyX']      = $xy[0];
                    $feed['tinyY']      = $xy[1];
                }

                $large  = otherSizeImagePath($normal, 'large');
                if ( $xy = @getimagesize($large) ) {
                    $feed['largePath']   = $large;
                    $feed['largeX']      = $xy[0];
                    $feed['largeY']      = $xy[1];
                }

                $square = otherSizeImagePath($normal, 'square');
                if ( $xy = @getimagesize($square) ) {
                    $feed['squarePath']   = $square;
                    $feed['squareX']      = $xy[0];
                    $feed['squareY']      = $xy[1];
                }
            }

            $User = loadUser($uid);
            $User->overload(loadUserField($uid));
            $Tpl->add(array('userField', 'feed:loop'), $this->buildField($User, $Tpl));

            $feed += $this->buildDate($row['timeline_datetime'], $Tpl, 'feed:loop');
            $Tpl->add('feed:loop', $feed);
        }
        $Tpl->add(null, $vars);

        return $Tpl->get();
    }
}
