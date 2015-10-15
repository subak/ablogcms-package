<?php

/**
 * php/AAPP/GET/Mixpanel.php
 *
 * テンプレート上では、標準のGETモジュールと同様に、
 * '<!-- BEGIN_MODULE Mixpanel --><!--END_MODULE Mixpanel -->' で呼び出されます。
 */
class AAPP_Mixpanel_GET_Mixpanel extends ACMS_GET
{
    static $already = false;
    static $id      = false;

    function get()
    {
        $DB     = DB::singleton(dsn());
        $Tpl    = new Template($this->tpl, new ACMS_Corrector());
        
        if ( self::$already === 'registered' ) {
            $Tpl->add('registered', array(
                'distinct_id'   => self::$id,
            ));
        } else if ( self::$already === 'unregistered' ) {
            $Tpl->add('unregistered', array(
                'distinct_id'   => self::$id,
            ));
        }
        if ( self::$already !== false ) {
            return $Tpl->get();
        }

        $vars   = array();
        $id     = '';
        $mode   = $this->Post->get('mixpanel_mode', 'login');

        $Cookie =& Field::singleton('cookie');

        // login
        if ( $mode === 'login' ) {
            $id = ACMS_RAM::userMail(SUID);
        // form
        } else {
            $id = $this->Post->get('mixpanel_id');
        }

        if ( empty($id) ) {
            $id = $Cookie->get('mixpanel_distinct_id');
        }
        if ( empty($id) ) {
            return '';
        }

        $vars['distinct_id'] = $id;

        $Cookie->set('mixpanel_distinct_id', $id);
        setcookie('mixpanel_distinct_id', $id,  REQUEST_TIME + 31536000, '/', COOKIE_HOST, COOKIE_USESECURE);

        $SQL    = SQL::newSelect('mixpanel');
        $SQL->addSelect('distinct_id');
        $SQL->addWhereOpr('distinct_id', $id);

        if ( $DB->query($SQL->get(dsn()), 'one') ) {
            $Tpl->add('registered', $vars);
            self::$already = 'registered';
        } else if ( !empty($id) ) {
            $SQL    = SQL::newInsert('mixpanel');
            $SQL->addInsert('distinct_id', $id);
            $DB->query($SQL->get(dsn()), 'exec');

            $Tpl->add('unregistered', $vars);
            self::$already = 'unregistered';
        }
        $Tpl->add(null, array());

        self::$id = $id;
        
        return $Tpl->get();
    }
}