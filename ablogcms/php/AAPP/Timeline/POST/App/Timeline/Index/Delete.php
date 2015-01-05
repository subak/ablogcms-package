<?php

class AAPP_Timeline_POST_App_Timeline_Index_Delete extends AAPP_Timeline_POST_App_Timeline_Delete
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
                $this->delete($tid);
            }
        }
        return $this->Post;
    }
}
