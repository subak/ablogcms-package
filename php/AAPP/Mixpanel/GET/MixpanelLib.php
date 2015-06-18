<?php

/**
 * php/AAPP/GET/Mixpanel.php
 *
 * テンプレート上では、標準のGETモジュールと同様に、
 * '<!-- BEGIN_MODULE MixpanelLib --><!--END_MODULE MixpanelLib -->' で呼び出されます。
 */
class AAPP_Mixpanel_GET_MixpanelLib extends ACMS_GET_Admin_Config
{
    function get()
    {
        $Tpl    = new Template($this->tpl, new ACMS_Corrector());
        
        $Config =& $this->getConfig(null, null);

        $Tpl->add(null, array(
            'code'  => $Config->get('mixpanel_tracking_code'),
        ));
        
        return $Tpl->get();
    }
}