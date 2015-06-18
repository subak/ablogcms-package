<?php

/**
 * php/ACMS/User/GET/Sample.php
 *
 * テンプレート上では、標準のGETモジュールと同様に、
 * '<!-- BEGIN_MODULE Sample --><!--END_MODULE Sample -->' で呼び出されます。
 */
class ACMS_User_GET_Sample extends ACMS_GET
{
    function get()
    {
        $Tpl    = new Template($this->tpl, new ACMS_Corrector());

        return $Tpl->get();
    }
}
