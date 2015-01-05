<?php
class ACMS_User_GET_Touch_NotSpecialCategory extends ACMS_GET
{
	var $_scope = array(
		'cid'   => 'global',
	);
	function get()
	{
		// 限定したいカテゴリのID
		$ary_category = array(1,2,3);
		return ( in_array( $this->cid, $ary_category ) ) ? false : $this->tpl;
	}
}
