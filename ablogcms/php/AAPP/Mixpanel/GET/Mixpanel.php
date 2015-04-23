<?php

/**
 * php/AAPP/GET/Mixpanel.php
 *
 * テンプレート上では、標準のGETモジュールと同様に、
 * '<!-- BEGIN_MODULE Mixpanel --><!--END_MODULE Mixpanel -->' で呼び出されます。
 */
class AAPP_Mixpanel_GET_Mixpanel extends ACMS_GET
{
    function get()
    {
        $DB     = DB::singleton(dsn());
        $Tpl    = new Template($this->tpl, new ACMS_Corrector());
        $vars   = array();
        $id     = '';
        $mode   = $this->Post->get('mixpanel_mode', 'login');

        // login
        if ( $mode === 'login' ) {
            $id     = ACMS_RAM::userMail(SUID);
        // form
        } else {
            $id     = $this->Post->get('mixpanel_id');
        }
        if ( empty($id) ) {
            return '';
        }

        $vars['distinct_id']    = $id;

        $SQL    = SQL::newSelect('mixpanel');
        $SQL->addSelect('distinct_id');
        $SQL->addWhereOpr('distinct_id', $id);

        if ( $DB->query($SQL->get(dsn()), 'one') ) {
            $Tpl->add('registered', $vars);
        } else if ( !empty($id) ) {
            $SQL    = SQL::newInsert('mixpanel');
            $SQL->addInsert('distinct_id', $id);
            $DB->query($SQL->get(dsn()), 'exec');

            $Tpl->add('unregistered', $vars);
        }
        $Tpl->add(null, array());
        
        return $Tpl->get();
    }
}