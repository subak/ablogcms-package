ACMS.Dispatch._validate=function(elm){var $overlook=$(ACMS.Config.validatorOverlookMark,elm);if($overlook.is(".js--clicked")){$overlook.removeClass("js--clicked");return true}var validators=new Array;var $input=$(":input:not(disabled):not(:radio:not(:checked)):not(:checkbox:not(:checked))",elm);$input.each(function(){if(this.name.match(/^(.*):(validator|v)#(.*)$/))validators.push({field:RegExp.$1,validator:RegExp.$3,arg:$(this).val(),id:$(this).attr("id")})});var allRes=true;var isAlert=true;$.each(validators,
function(){var obj=this;if(!ACMS.Library.Validator.isFunction(obj.validator))return true;var $field=$input.filter('[name="'+obj.field+'"], [name="'+obj.field+"[]"+'"]');if("all_"==obj.validator.substring(0,4))var res=ACMS.Library.Validator[obj.validator]($field,obj.arg);else if($field.size()){var res=true;$field.each(function(i){var _res=ACMS.Library.Validator[obj.validator]($(this).val(),obj.arg);res&=_res;if(!!obj.id){$label=$('label[for="'+obj.id+"["+i+"]"+'"]');if($label.size()){$label.removeClass(ACMS.Config.validatorResultClass);
$label.removeClass(ACMS.Config.validatorResultClass+"0");$label.removeClass(ACMS.Config.validatorResultClass+"1");$label.addClass("validator-result-"+(res?"1":"0"));isAlert&=false}}})}else var res=ACMS.Library.Validator[obj.validator](null,obj.arg);if(!!obj.id){$label=$('label[for="'+obj.id+'"]');if($label.size()){$label.removeClass(ACMS.Config.validatorResultClass);$label.removeClass(ACMS.Config.validatorResultClass+"0");$label.removeClass(ACMS.Config.validatorResultClass+"1");$label.addClass("validator-result-"+
(res?"1":"0"));isAlert&=false}}allRes&=res});if(!allRes&&isAlert)alert(ACMS.Config.validatorAlertMessage);var name=$("#"+$("label.validator-result-0").attr("for")).attr("name");if(name){name=name.replace(/:[^:]+#[^#]+$/,"");pos=$(':input[name="'+name+'"], :input[name^="'+name+"["+'"]').offset();if(pos)ACMS.Library.scrollTo(pos.left,pos.top,ACMS.Config.scrollToI,ACMS.Config.scrollToV)}return!!allRes};