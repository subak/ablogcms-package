CKEDITOR.plugins.add('emoji',
{
    aryAlt : ['sun','cloud','rain','snow','thunder','typhoon','mist','sprinkle','aries','taurus','gemini','cancer','leo','virgo','libra','scorpius','sagittarius','capricornus','aquarius','pisces','sports','baseball','golf','tennis','soccer','ski','basketball','motorsports','pocketbell','train','subway','bullettrain','car','rvcar','bus','ship','airplane','house','building','postoffice','hospital','bank','atm','hotel','24hours','gasstation','parking','signaler','toilet','restaurant','cafe','bar','beer','fastfood','boutique','hairsalon','karaoke','movie','upwardright','carouselpony','music','art','drama','event','ticket','smoking','nosmoking','camera','bag','book','ribbon','present','birthday','telephone','mobilephone','memo','tv','game','cd','heart','spade','diamond','club','eye','ear','rock','scissors','paper','downwardright','upwardleft','foot','shoe','eyeglass','wheelchair','newmoon','moon1','moon2','moon3','fullmoon','dog','cat','yacht','xmas','downwardleft','phoneto','mailto','faxto','info01','info02','mail','by-d','d-point','yen','free','id','key','enter','clear','search','new','flag','freedial','sharp','mobaq','one','two','three','four','five','six','seven','eight','nine','zero','ok','heart01','heart02','heart03','heart04','happy01','angry','despair','sad','wobbly','up','note','spa','cute','kissmark','shine','flair','annoy','punch','bomb','notes','down','sleepy','sign01','sign02','sign03','impact','sweat01','sweat02','dash','sign04','sign05','slate','pouch','pen','shadow','chair','night','soon','on','end','clock','appli01','appli02','t-shirt','moneybag','rouge','denim','snowboard','bell','door','dollar','pc','loveletter','wrench','pencil','crown','ring','sandclock','bicycle','japanesetea','watch','think','confident','coldsweats01','coldsweats02','pout','gawk','lovely','good','bleah','wink','happy02','bearing','catface','crying','weep','ng','clip','copyright','tm','run','secret','recycle','r-mark','danger','ban','empty','pass','full','leftright','updown','school','wave','fuji','clover','cherry','tulip','banana','apple','bud','maple','cherryblossom','riceball','cake','bottle','noodle','bread','snail','chick','penguin','fish','delicious','smile','horse','pig','wine','shock'],
    aryEntity : ['&#xFE000;','&#xFE001;','&#xFE002;','&#xFE003;','&#xFE004;','&#xFE005;','&#xFE006;','&#xFE007;','&#xFE02B;','&#xFE02C;','&#xFE02D;','&#xFE02E;','&#xFE02F;','&#xFE030;','&#xFE031;','&#xFE032;','&#xFE033;','&#xFE034;','&#xFE035;','&#xFE036;','&#xFE7D0;','&#xFE7D1;','&#xFE7D2;','&#xFE7D3;','&#xFE7D4;','&#xFE7D5;','&#xFE7D6;','&#xFE7D7;','&#xFE522;','&#xFE7DF;','&#xFE7E0;','&#xFE7E2;','&#xFE7E4;','&#xFE7E5;','&#xFE7E6;','&#xFE4C1;','&#xFE7E9;','&#xFE4B0;','&#xFE4B2;','&#xFE4B3;','&#xFE4B4;','&#xFE4B5;','&#xFE4B6;','&#xFE4B7;','&#xFE4B9;','&#xFE7F5;','&#xFE7F6;','&#xFE7F7;','&#xFE506;','&#xFE980;','&#xFE981;','&#xFE982;','&#xFE983;','&#xFE960;','&#xFE4D6;','&#xFE198;','&#xFE800;','&#xFE4F9;','&#xFEAF0;','&#xFE7FC;','&#xFE803;','&#xFE804;','&#xFE805;','&#xFE806;','&#xFE807;','&#xFEB1E;','&#xFEB1F;','&#xFE4EF;','&#xFE4F0;','&#xFE4FF;','&#xFE50F;','&#xFE510;','&#xFE511;','&#xFE523;','&#xFE525;','&#xFE527;','&#xFE81C;','&#xFE80A;','&#xFE81D;','&#xFEB1A;','&#xFEB1B;','&#xFEB1C;','&#xFEB1D;','&#xFE190;','&#xFE191;','&#xFEB93;','&#xFEB94;','&#xFEB95;','&#xFEAF1;','&#xFEAF2;','&#xFE1DB;','&#xFE4CC;','&#xFE4CE;','&#xFEB20;','&#xFE011;','&#xFE012;','&#xFE013;','&#xFE014;','&#xFE015;','&#xFE1B7;','&#xFE1B8;','&#xFE7EA;','&#xFE512;','&#xFEAF3;','&#xFE526;','&#xFE52A;','&#xFE528;','&#xE6D1;','&#xE6D2;','&#xFE529;','&#xE6D4;','&#xE6D5;','&#xFE4E2;','&#xFEB21;','&#xFEB81;','&#xFEB86;','&#xFEB83;','&#xFEB84;','&#xFEB85;','&#xFEB36;','&#xFEB22;','&#xFE82B;','&#xFE82C;','&#xE6E1;','&#xFE82E;','&#xFE82F;','&#xFE830;','&#xFE831;','&#xFE832;','&#xFE833;','&#xFE834;','&#xFE835;','&#xFE836;','&#xFE837;','&#xFE352;','&#xFEB0C;','&#xFE829;','&#xFEB0E;','&#xFEB0F;','&#xFE19B;','&#xFE320;','&#xFE323;','&#xFE321;','&#xFE322;','&#xFEAF4;','&#xFE813;','&#xFE505;','&#xFEB19;','&#xFE193;','&#xFEB60;','&#xFE4FB;','&#xFEB57;','&#xFEB96;','&#xFEB58;','&#xFE814;','&#xFEAF5;','&#xFE342;','&#xFEB04;','&#xFEB05;','&#xFEB06;','&#xFEB5A;','&#xFEB5B;','&#xFEB5C;','&#xFEB5D;','&#xFEB07;','&#xFE4FD;','&#xFE808;','&#xFE4F1;','&#xFE536;','&#xFE19A;','&#xFE537;','&#xFE008;','&#xFE018;','&#xFE019;','&#xFE01A;','&#xFE01E;','&#xE70C;','&#xE70D;','&#xFE4CF;','&#xFE4DC;','&#xFE195;','&#xFE4D0;','&#xFE7D8;','&#xFE4F2;','&#xFE4F3;','&#xFE4DD;','&#xFE538;','&#xFE824;','&#xFE4C9;','&#xFE539;','&#xFE4D1;','&#xFE825;','&#xFE01B;','&#xFE7EB;','&#xFE984;','&#xFE01D;','&#xFE340;','&#xFE33E;','&#xFE331;','&#xFE325;','&#xFE33D;','&#xFE326;','&#xFE327;','&#xFEB97;','&#xFE194;','&#xFE347;','&#xFE32F;','&#xFE33C;','&#xFE343;','&#xFE33A;','&#xFE339;','&#xFE351;','&#xFE53A;','&#xFEB29;','&#xFEB2A;','&#xFE7D9;','&#xFEB2B;','&#xFEB2C;','&#xFEB2D;','&#xFEB23;','&#xFEB48;','&#xFEB2F;','&#xFEB30;','&#xFEB31;','&#xFEAF6;','&#xFEAF7;','&#xFE4BA;','&#xFE038;','&#xFE4C3;','&#xFE03C;','&#xFE04F;','&#xFE03D;','&#xFE050;','&#xFE051;','&#xFE03E;','&#xFE03F;','&#xFE040;','&#xFE961;','&#xFE962;','&#xFE4C2;','&#xFE963;','&#xFE964;','&#xFE1B9;','&#xFE1BA;','&#xFE1BC;','&#xFE1BD;','&#xFE32B;','&#xFE328;','&#xFE1BE;','&#xFE1BF;','&#xFE986;','&#xFE33B;'],
    aryUndefinedEntity : ['&#xE254;','&#xE255;','&#xE256;','&#xE257;','&#xE258;','&#xE259;','&#xE25A;','&#xE50A;','&#xE52C;','&#xE538;','&#xE539;','&#xE53A;','&#xE53B;','&#xE53C;','&#xE53D;','&#xE53E;','&#xE577;','&#xE586;','&#xE5B2;','&#xEA9D;','&#xEAFB;','&#xEB74;','&#xEB81;','&#xEB89;','&#xEB8A;','&#xEB8B;','&#xEB8C;','&#xEB8D;','&#xEB8E;','&#xFE00B;','&#xFE00D;','&#xFE00E;','&#xFE00F;','&#xFE017;','&#xFE037;','&#xFE039;','&#xFE03A;','&#xFE041;','&#xFE043;','&#xFE044;','&#xFE045;','&#xFE046;','&#xFE047;','&#xFE048;','&#xFE049;','&#xFE04A;','&#xFE04B;','&#xFE04C;','&#xFE04D;','&#xFE052;','&#xFE053;','&#xFE054;','&#xFE055;','&#xFE056;','&#xFE057;','&#xFE058;','&#xFE059;','&#xFE05A;','&#xFE192;','&#xFE196;','&#xFE197;','&#xFE199;','&#xFE19F;','&#xFE1A0;','&#xFE1A1;','&#xFE1A2;','&#xFE1A3;','&#xFE1A4;','&#xFE1A5;','&#xFE1A6;','&#xFE1A7;','&#xFE1A8;','&#xFE1A9;','&#xFE1AA;','&#xFE1AB;','&#xFE1AC;','&#xFE1AD;','&#xFE1AE;','&#xFE1AF;','&#xFE1B0;','&#xFE1B1;','&#xFE1B2;','&#xFE1B3;','&#xFE1B4;','&#xFE1B5;','&#xFE1B6;','&#xFE1C0;','&#xFE1C1;','&#xFE1C2;','&#xFE1C3;','&#xFE1C4;','&#xFE1C5;','&#xFE1C6;','&#xFE1C7;','&#xFE1CA;','&#xFE1CB;','&#xFE1CC;','&#xFE1CD;','&#xFE1CE;','&#xFE1CF;','&#xFE1D1;','&#xFE1D2;','&#xFE1D3;','&#xFE1D4;','&#xFE1D5;','&#xFE1D6;','&#xFE1D7;','&#xFE1DA;','&#xFE1DC;','&#xFE1DE;','&#xFE1DF;','&#xFE1E1;','&#xFE1E2;','&#xFE32E;','&#xFE353;','&#xFE354;','&#xFE355;','&#xFE356;','&#xFE357;','&#xFE358;','&#xFE35B;','&#xFE4B8;','&#xFE4BB;','&#xFE4BC;','&#xFE4BD;','&#xFE4BE;','&#xFE4BF;','&#xFE4C0;','&#xFE4C4;','&#xFE4C6;','&#xFE4C7;','&#xFE4C8;','&#xFE4CA;','&#xFE4CB;','&#xFE4D3;','&#xFE4D4;','&#xFE4D5;','&#xFE4D8;','&#xFE4D9;','&#xFE4DA;','&#xFE4DE;','&#xFE4DF;','&#xFE4E1;','&#xFE4E4;','&#xFE4E5;','&#xFE4E6;','&#xFE4E7;','&#xFE4E8;','&#xFE4E9;','&#xFE4EA;','&#xFE4EB;','&#xFE4EC;','&#xFE4ED;','&#xFE4EE;','&#xFE4F4;','&#xFE4F5;','&#xFE4F6;','&#xFE4F7;','&#xFE4F8;','&#xFE4FA;','&#xFE4FC;','&#xFE4FE;','&#xFE504;','&#xFE509;','&#xFE50A;','&#xFE50B;','&#xFE50C;','&#xFE50D;','&#xFE50E;','&#xFE513;','&#xFE514;','&#xFE515;','&#xFE516;','&#xFE517;','&#xFE518;','&#xFE519;','&#xFE51A;','&#xFE51B;','&#xFE51C;','&#xFE51D;','&#xFE51E;','&#xFE51F;','&#xFE520;','&#xFE521;','&#xFE52F;','&#xFE530;','&#xFE531;','&#xFE532;','&#xFE533;','&#xFE534;','&#xFE53C;','&#xFE53D;','&#xFE53F;','&#xFE542;','&#xFE543;','&#xFE544;','&#xFE549;','&#xFE54A;','&#xFE54B;','&#xFE54C;','&#xFE54E;','&#xFE550;','&#xFE551;','&#xFE7DB;','&#xFE7DD;','&#xFE7DE;','&#xFE7E7;','&#xFE7EC;','&#xFE7ED;','&#xFE7F1;','&#xFE7F2;','&#xFE7F3;','&#xFE7F4;','&#xFE7F8;','&#xFE7F9;','&#xFE7FB;','&#xFE7FD;','&#xFE7FE;','&#xFE809;','&#xFE80B;','&#xFE80C;','&#xFE80D;','&#xFE80E;','&#xFE80F;','&#xFE810;','&#xFE811;','&#xFE812;','&#xFE815;','&#xFE816;','&#xFE817;','&#xFE818;','&#xFE819;','&#xFE81B;','&#xFE81F;','&#xFE820;','&#xFE821;','&#xFE822;','&#xFE828;','&#xFE82A;','&#xFE838;','&#xFE839;','&#xFE83A;','&#xFE83B;','&#xFE965;','&#xFE966;','&#xFE967;','&#xFE968;','&#xFE969;','&#xFE96B;','&#xFE96C;','&#xFE96D;','&#xFE96E;','&#xFE96F;','&#xFE970;','&#xFE971;','&#xFE972;','&#xFE974;','&#xFE975;','&#xFE976;','&#xFE977;','&#xFE978;','&#xFE979;','&#xFE97A;','&#xFE97B;','&#xFE97C;','&#xFE97D;','&#xFE97E;','&#xFE97F;','&#xFEAF8;','&#xFEAF9;','&#xFEAFA;','&#xFEAFB;','&#xFEAFC;','&#xFEAFD;','&#xFEAFE;','&#xFEAFF;','&#xFEB00;','&#xFEB01;','&#xFEB02;','&#xFEB03;','&#xFEB09;','&#xFEB0A;','&#xFEB24;','&#xFEB25;','&#xFEB32;','&#xFEB33;','&#xFEB34;','&#xFEB35;','&#xFEB37;','&#xFEB38;','&#xFEB39;','&#xFEB3A;','&#xFEB3B;','&#xFEB3C;','&#xFEB3D;','&#xFEB3E;','&#xFEB3F;','&#xFEB40;','&#xFEB41;','&#xFEB42;','&#xFEB43;','&#xFEB45;','&#xFEB46;','&#xFEB47;','&#xFEB49;','&#xFEB4A;','&#xFEB4B;','&#xFEB4C;','&#xFEB4D;','&#xFEB4E;','&#xFEB4F;','&#xFEB50;','&#xFEB51;','&#xFEB52;','&#xFEB53;','&#xFEB54;','&#xFEB5E;','&#xFEB5F;','&#xFEB68;','&#xFEB69;','&#xFEB6A;','&#xFEB6B;','&#xFEB6C;','&#xFEB6D;','&#xFEB6E;','&#xFEB6F;','&#xFEB70;','&#xFEB71;','&#xFEB72;','&#xFEB73;','&#xFEB74;','&#xFEB75;','&#xFEB76;','&#xFEB78;','&#xFEB79;','&#xFEB7A;','&#xFEB7B;','&#xFEB7C;','&#xFEB7D;','&#xFEB7E;','&#xFEB7F;','&#xFEB80;','&#xFEB88;','&#xFEB8B;','&#xFEB8C;','&#xFEB8E;','&#xFEB8F;','&#xFEB98;','&#xFEB99;','&#xFEB9A;','&#xFEB9B;','&#xFEB9C;','&#xFEB9E;'],
    requires : [ 'dialog' ],
    lang    : [ 'ja' ],
    init : function( editor )
    {
        var emojiDir    = CKEDITOR.basePath + 'plugins/emoji/images/';
        var aryAlt      = this.aryAlt;
        var aryEntity   = this.aryEntity;
        var aryUndefinedEntity  = this.aryUndefinedEntity;

        editor.addCommand(
            'emoji', new CKEDITOR.dialogCommand('emoji')
        );
        editor.ui.addButton('Emoji',
        {
            label   : editor.lang.emoji.toolbar,
            command : 'emoji',
            icon    : emojiDir + 'sun.gif'
        });
        CKEDITOR.dialog.add( 'emoji', function( editor )
        {
            var config = editor.Config,
                //images = config.smiley_images,
                columns = 21,
                i;

            /**
             * Simulate "this" of a dialog for non-dialog events.
             * @type {CKEDITOR.dialog}
             */
            var dialog;
            var onClick = function( evt )
            {
                var target = evt.data.getTarget(),
                    targetName = target.getName();

                if ( targetName == 'td' )
                    target = target.getChild( [ 0, 0 ] );
                else if ( targetName == 'a' )
                    target = target.getChild( 0 );
                else if ( targetName != 'img' )
                    return;

                var src = target.getAttribute( 'cke_src' ),
                    title = target.getAttribute( 'title' );

                var img = editor.document.createElement( 'img',
                    {
                        attributes :
                        {
                            src : src,
                            _cke_saved_src : src,
                            title : title,
                            alt : title,
                            'class' : 'emoji'
                        }
                    });

                editor.insertElement( img );

                dialog.hide();
            };

            var onKeydown = CKEDITOR.tools.addFunction( function( ev, element )
            {
                ev = new CKEDITOR.dom.event( ev );
                element = new CKEDITOR.dom.element( element );
                var relative, nodeToMove;

                var keystroke = ev.getKeystroke();
                switch ( keystroke )
                {
                    // RIGHT-ARROW
                    case 39 :
                        // relative is TD
                        if ( ( relative = element.getParent().getNext() ) )
                        {
                            nodeToMove = relative.getChild( 0 );
                            nodeToMove.focus();
                        }
                        ev.preventDefault();
                        break;
                    // LEFT-ARROW
                    case 37 :
                        // relative is TD
                        if ( ( relative = element.getParent().getPrevious() ) )
                        {
                            nodeToMove = relative.getChild( 0 );
                            nodeToMove.focus();
                        }
                        ev.preventDefault();
                        break;
                    // UP-ARROW
                    case 38 :
                        // relative is TR
                        if ( ( relative = element.getParent().getParent().getPrevious() ) )
                        {
                            nodeToMove = relative.getChild( [element.getParent().getIndex(), 0] );
                            nodeToMove.focus();
                        }
                        ev.preventDefault();
                        break;
                    // DOWN-ARROW
                    case 40 :
                        // relative is TR
                        if ( ( relative = element.getParent().getParent().getNext() ) )
                        {
                            nodeToMove = relative.getChild( [element.getParent().getIndex(), 0] );
                            if ( nodeToMove )
                                nodeToMove.focus();
                        }
                        ev.preventDefault();
                        break;
                    // ENTER
                    // SPACE
                    case 32 :
                        onClick( { data: ev } );
                        ev.preventDefault();
                        break;
                    // TAB
                    case 9 :
                        // relative is TD
                        if ( ( relative = element.getParent().getNext() ) )
                        {
                            nodeToMove = relative.getChild( 0 );
                            nodeToMove.focus();
                            ev.preventDefault(true);
                        }
                        // relative is TR
                        else if ( ( relative = element.getParent().getParent().getNext() ) )
                        {
                            nodeToMove = relative.getChild( [0, 0] );
                            if ( nodeToMove )
                                nodeToMove.focus();
                            ev.preventDefault(true);
                        }
                        break;
                    // SHIFT + TAB
                    case CKEDITOR.SHIFT + 9 :
                        // relative is TD
                        if ( ( relative = element.getParent().getPrevious() ) )
                        {
                            nodeToMove = relative.getChild( 0 );
                            nodeToMove.focus();
                            ev.preventDefault(true);
                        }
                        // relative is TR
                        else if ( ( relative = element.getParent().getParent().getPrevious() ) )
                        {
                            nodeToMove = relative.getLast().getChild( 0 );
                            nodeToMove.focus();
                            ev.preventDefault(true);
                        }
                        break;
                    default :
                        // Do not stop not handled events.
                        return;
                }
            });
        
            // Build the HTML for the smiley images table.
            var html =
            [
                '<table cellspacing="2" cellpadding="2"',
                CKEDITOR.env.ie && CKEDITOR.env.quirks ? ' style="position:absolute;"' : '',
                '><tbody>'
            ];

            for ( i = 0 ; i < aryAlt.length ; i++ )
            {
                if ( i % columns === 0 )
                    html.push( '<tr>' );

                html.push(
                    '<td class="cke_dark_background cke_hand cke_centered" style="vertical-align: middle;">' +
                        '<a href="javascript:void(0)" class="cke_smile" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ', onKeydown, ', event, this );">',
                            '<img class="hand" title="', aryAlt[i], '"' +
                                ' cke_src="', CKEDITOR.tools.htmlEncode(emojiDir + aryAlt[i] + '.gif'), '" alt="', aryAlt[i], '"',
                                ' src="', CKEDITOR.tools.htmlEncode(emojiDir + aryAlt[i] + '.gif'), '"',
                                ' width="16" height="16"',
                                // IE BUG: Below is a workaround to an IE image loading bug to ensure the image sizes are correct.
                                ( CKEDITOR.env.ie ? ' onload="this.setAttribute(\'width\', 2); this.removeAttribute(\'width\');" ' : '' ),
                            '>' +
                        '</a>',
                     '</td>' );

                if ( i % columns == columns - 1 )
                    html.push( '</tr>' );
            }

            if ( i < columns - 1 )
            {
                for ( ; i < columns - 1 ; i++ )
                    html.push( '<td></td>' );
                html.push( '</tr>' );
            }

            html.push( '</tbody></table>' );

            var smileySelector =
            {
                type : 'html',
                html : html.join( '' ),
                onLoad : function( event )
                {
                    dialog = event.sender;
                },
                focus : function()
                 {
                    var firstSmile = this.getElement().getChild( [0, 0, 0, 0] );
                    firstSmile.focus();
                 },
                onClick : onClick,
                style : 'width: 100%; height: 100%; border-collapse: separate;'
            };

            return {
                title   : editor.lang.emoji.title,
//                    title : editor.lang.emoji.title,//'絵文字挿入',//editor.lang.smiley.title,
        //		minWidth : 270,
        //		minHeight : 120,
        // 464
                minWidth : 486,
                minHeight : 302,//396,
                contents : [
                    {
                        id : 'tab1',
                        label : '',
                        title : '',
                        expand : true,
                        padding : 0,
                        elements : [
                                smileySelector
                            ]
                    }
                ],
                buttons : [ CKEDITOR.dialog.cancelButton ]
            };
        } );
    }
});