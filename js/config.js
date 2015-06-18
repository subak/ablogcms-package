ACMS.Config({

    // 試験機能をv1.6α時点でデフォルトOFF
    experimentalFeature : true,

    //---------------------------------------------------
    // jQuery UI テーマ名 ( 下記URLでDLとカスタマイズが可能 )
    // @url http://jqueryui.com/themeroller/
    uiTheme          : 'smoothness',

    //----------------------
    // google code prettify
    googleCodePrettifyClass : 'prettyprint linenums', // prettyprint linenums, acms-admin-pre
    googleCodePrettifyTheme : 'prettify', // prettify, desert, doxy, sons-of-obsidian, sunburst

    //--------
    // 絵文字
    emojiDir        : ACMS.Config.jsRoot + 'library/ckeditor/plugins/emoji/images/',
    emoMark         : 'textarea.js-emoditor', // セレクタの示す要素で絵文字 ( ウィジウィグ ) エディターが利用出来ます。
    emoToolbar      :
    [
        ['Source','-','Templates'],
        ['Cut','Copy','Paste','PasteText','PasteFromWord'],
        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
        ['Maximize', 'ShowBlocks'],
        '/',
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Link','Unlink','Anchor'],
        ['Table','HorizontalRule'],
        '/',
        ['Styles','Format','Font','FontSize'],
        ['TextColor','BGColor'],
        ['Emoji']
    ],
    emoConfig   : { //http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
        enterMode       : 1, // 1:<p>, 2:<br>, 3:<div>
        fontSize_sizes  : '80%/80%;90%/90%;100%/100%;110%/110%;120%/120%;130%/130%;140%/140%;150%/150%;160%/160%;170%/170%;180%/180%;190%/190%;200%/200%',
        font_names      : 'MSゴシック/MS Gothic, Osaka-Mono, monospace; MS Pゴシック/MS PGothic, Osaka, sans-serif; MS UI Gothic/MS UI Gothic, Meiryo, Meiryo UI, Osaka, sans-serif; MS P明朝/MS PMincho, Saimincho, serif; Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif',
        language        : 'ja'
    },
    emoArray    : [
    //    {
    //        'mark'      : '',
    //        'toolbar'   : [],
    //        'config'    : {}
    //    }
    ],

    //----------
    // CKEditor
    ckeMark     : 'textarea.js-ckeditor',

    //----------------------------------
    // イメージビューア ( prettyPhoto )
    ppMark: 'a[rel^="prettyPhoto"]',
    ppMinWindowSize: 800,
    ppDisableMobile: true,
    ppDisableTablet: true,
    ppWindowTarget: '',
    ppConfig    : // http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/
    {
        animation_speed: 'fast', /* fast/slow/normal */
        slideshow: 3000, /* false OR interval time in ms */
        autoplay_slideshow: false, /* true/false */
        opacity: 0.80, /* Value between 0 and 1 */
        show_title: true, /* true/false */
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
        theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        horizontal_padding: 20, /* The padding on each side of the picture */
        hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque', /* Set the flash wmode attribute */
        autoplay: true, /* Automatically start videos: True/False */
        modal: false, /* If set to true, only the close button will close the window */
        deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
        overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
        changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
        callback: function(){}, /* Called when prettyPhoto is closed */
        ie6_fallback: true,
        markup: '<div class="pp_pic_holder"> \
                    <div class="ppt">&nbsp;</div> \
                    <div class="pp_top"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                    </div> \
                    <div class="pp_content_container"> \
                        <div class="pp_left"> \
                        <div class="pp_right"> \
                            <div class="pp_content"> \
                                <div class="pp_loaderIcon"></div> \
                                <div class="pp_fade"> \
                                    <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                    <div class="pp_hoverContainer"> \
                                        <a class="pp_next" href="#">next</a> \
                                        <a class="pp_previous" href="#">previous</a> \
                                    </div> \
                                    <div id="pp_full_res"></div> \
                                    <div class="pp_details"> \
                                        <div class="pp_nav"> \
                                            <a href="#" class="pp_arrow_previous">Previous</a> \
                                            <p class="currentTextHolder">0/0</p> \
                                            <a href="#" class="pp_arrow_next">Next</a> \
                                        </div> \
                                        <p class="pp_description"></p> \
                                        {pp_social} \
                                        <a class="pp_close" href="#">Close</a> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                        </div> \
                    </div> \
                    <div class="pp_bottom"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                    </div> \
                </div> \
                <div class="pp_overlay"></div>',
        gallery_markup: '<div class="pp_gallery"> \
                            <a href="#" class="pp_arrow_previous">Previous</a> \
                            <div> \
                                <ul> \
                                    {gallery} \
                                </ul> \
                            </div> \
                            <a href="#" class="pp_arrow_next">Next</a> \
                        </div>',
        image_markup: '<img id="fullResImage" src="{path}" />',
        flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
        quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
        iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
        inline_markup: '<div class="pp_inline">{content}</div>',
        custom_markup: '',
        social_tools: false
    },
    ppCaption2Title : true,

    //----------------------------------
    // イメージビューワー ( Highslide )
    hsMark              : 'a[rel=highslide]',
    hsConfig            : // http://highslide.com/ref/hs.overrides
    {
        align       : 'center',
        transitions : ["fade"],
        transitionDuration  : 500,
        dimmingOpacity  : 0.75, // 背景を半透明グレーにする時に指定します
        dimmingDuration : 0
//        outlineType : 'rounded-white'
    },
    hsLang  :
    {
        loadingText     : '読み込み中...',
        loadingTitle    : 'クリックでキャンセルします',
        fullExpandTitle : '実寸で表示します',
        restoreTitle    : 'クリックで元の大きさに戻ります'
    },
    hsArray             : [
    //    {
    //        'mark'      : '',
    //        'config'    : {}
    //    }
    ],

    //-----------------------
    // adaptive image sizing
    adaptiveImageMark : 'img.js-adaptive_image',
    adaptiveImageSize : 500,

    //------------
    // biggerlink
    biggerlinkMark   : '.js-biggerlink',
    biggerlinkConf   : {
//        biggerclass:'bl-bigger', 	// class added to the first contained link and others that trigger it
//        hoverclass:'bl-hover', 		// class added to parent element on hover/focus
//        hoverclass2:'bl-hover2', 	// class added to parent element on hover/focus of other links
//        clickableclass:'bl-hot', 	// class added to parent element with behaviour
//        otherstriggermaster: true,	// will all links in containing biggerlink element trigger the first link
//        follow: 'auto'	
    },
    biggerlinkArray : [
    //    {
    //        'mark'  : '',
    //        'conf'  : {}
    //    }
    ],

    //----------
    // bxslider
    bxsliderMark    : '.js-bxslider',
    bxsliderConf    : {
        mode            : 'horizontal', // horizontal | vertical | fade
        speed           : 800,
        captions        : true,
        auto            : true,
        pause           : 6000
    },
    bxsliderArray   : [
    //    {
    //        'mark'  : '',
    //        'conf'  : {}
    //    }
    ],

    //-----------------------------
    // module setting popup window
    popupSettingMark    : '.js-popup_setting',
    popupSettingConf    : {
        width       : 850,
        height      : 500,
        autoclose   : true,
        autoreload  : true
    },

    moduleManagementMark        : '.js-module_management',
    moduleManagementReloadMsg   : 'リロードして画面を更新しますか？',
    moduleUnitDirectAddMsg      : 'モジュールユニットはダイレクトに追加できません。編集画面より追加してください。',

    //----------
    // autoHeight
    autoHeightMark   : '.js-autoheight',
    autoHeightConfArray : [
        {
            '.column3'  : '3', // クラス名と高さを揃えるコンテンツ数
            '.column2'  : '2'
        }
    ],

    //-------------
    // autoHeightR
    autoHeightRMark : '.js-autoheight-r',
    autoHeightRConf : {
        style   : 'min-height',
        element : '',       // 高さのスタイルを適応するクラス（空の場合はautoHeightRMarkクラスの要素に適応）
        offset  : 0,
        parent  : 'parent', // parent : autoHeightRMarkクラスの一個上の要素 or 指定した要素
        list    : ''        // 実際に並んでいる要素のクラスを指定（指定してない場合、autoHeightRMarkの一個上の要素）
    },
    autoHeightRArray  : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //--------------------
    // 日付選択カレンダー
    dpicMark            : 'input:text[name$=date], .js-datepicker', // セレクタの指し示す要素をクリックで日付選択カレンダーを利用出来ます
    dpicConfig          :
    {
        closeText       : '閉じる',
        prevText        : '&lt;前月',
        nextText        : '次月&gt;',
        currentText     : '今日',
        monthNames      : ['1月','2月','3月','4月','5月','6月', '7月','8月','9月','10月','11月','12月'],
        monthNamesShort : ['1月','2月','3月','4月','5月','6月', '7月','8月','9月','10月','11月','12月'],
        dayNames        : ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort   : ['日曜','月曜','火曜','水曜','木曜','金曜','土曜'],
        dayNamesMin     : ['日','月','火','水','木','金','土'],
        dateFormat      : 'yy-mm-dd',
        firstDay        : 0,
        isRTL           : false
    },
    dpicArray   : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //-----------
    // accordion
    accordionMark   : '.js-accordion',
    accordionConfig :
    {
        active      : null,
        animated    : 'slide', // ( 'slide' | 'fade' | '' )
        heightStyle : 'content',
        collapsible : true
    },
    accordionArray  : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //------
    // tabs
    tabsMark     : '.js-tabs',
    tabsConfig :
    {
        collapsible : false,
        cookie      : null,
        fx          : {
            //opacity : 'toggle', // クロスフェード
            //height  : 'toggle', // 縦スライド
            //duration: 'fast' // ( 'fast' | 'normal' | 'slow' | '' )
        }
    },
    tabsArray  : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //----------
    // acms tabs
    acmsTabsMark     : '.js-acms_tabs',
    acmsTabsConfig   :
    {
        tabClass     : 'js-acms_tab',
        activeClass  : 'js-acms_tab-active',
        readyMark    : 'js-ready-acms_tabs' // e.g. window.document.location.hash
    },
    acmsTabsArray  : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //------------------
    // acms alert close
    acmsAlertCloseMark  : '.js-acms-alert-close',
    acmsAlertCloseConfig  :
    {
        target  : '.acms-admin-alert'
    },
    acmsAlertCloseArray : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],

    //-------
    // fader
    faderMark   : '.js-fader',
    faderConfig :
    {
        initial     : 'hide', // ( 'hide' | 'show' )
        effect      : 'fade', // ( 'fade' | 'slide' | '' )
        speed       : 'fast', // ( 'fast' | 'slow' )
        activeClass : 'js-fader-active',
        readyMark   : '.js-ready-fader' // e.g. window.document.location.hash
    },
    faderArray  : [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
    ],
    
    //--------
    // toggle
    toggleMark      : '.js-toggle',
    toggleConfig    :
    {
        speed       : 'fast', // ( 'fast' | 'slow' )
        readyMark   : '.js-ready-toggle',
        hideMark    : '.js-hide-toggle',
        toggleHead  : '.toggle-head'
    },
    toggleArray     : [
        //    {
        //        'mark'    : '',
        //        'config'  : {}
        //    }
    ],

    //-----------------------
    // タイトルの編集
    editInplateTitleMark : '.entryTitle',

    //----------------------------
    // 静的グーグルマップの動的化
    s2dMark         : '[class^="column-map-"]>img:not(.js-s2d-ready)',
    s2dReadyMark    : 'img.js-s2d-ready',
    s2dMaxSize      : 640,
    s2dPinShadowImg : 'http://maps.google.co.jp/mapfiles/ms/icons/msmarker.shadow.png',
    s2dRegion       : '', // JP
    s2dStyle        : [
        // {
        //     stylers: [
        //         { hue: "#00ffe6" },
        //         { saturation: -20 }
        //     ]
        // },{
        //     featureType: "road",
        //     elementType: "geometry",
        //     stylers: [
        //         { lightness: 100 },
        //         { visibility: "simplified" }
        //     ]
        // },{
        //     featureType: "road",
        //     elementType: "labels",
        //     stylers: [
        //         { visibility: "off" }
        //     ]
        // }
    ],

    //-------------------
    // yahoo map (YOLP)
    yolpLayerSet    : 'on',

    //---------------------------
    // 静的ヤフーマップの動的化 (YOLP)
    s2dYolpMark         : '[class^="column-yolp-"]>img:not(.js-s2d-ready)',
    s2dYolpReadyMark    : 'img.js-s2d-yolp-ready',

    //-----------
    // swfobject
    swfoMark        : '.swfobject', // パラメータが指定されたdl要素をflashに置き換えます。

    //--------------------
    // スタイルの切り替え
    styleSwitchMark         : 'a.styleswitch',
    styleSwitchStyleMark    : 'link.styleswitch',
    // リンク要素のタイトル属性を利用してスタイルシートを切り替えることが出来ます。
    // 例)
    // <link rel="stylesheet" type="text/css" href="xxx.css" title="a" class="styleswitch" />
    // <link rel="stylesheet" type="text/css" href="yyy.css" title="b" class="styleswitch" />
    // 
    // <a href="#" class="styleswitch" rel="a">スタイルを[a]に切り替える</a>
    // <a href="#" class="styleswitch" rel="b">スタイルを[b]に切り替える</a>

    //------------
    // スクロール
    scrollToMark    : 'a.scrollTo', // セレクタのアンカーをクリックするとhref属性のフラグに指定された要素へスクロールします。
    scrollToI       : 40, // 間隔(i)msec
    scrollToV       : 0.5, // 0 < 移動量(v) < 1
    // 例)
    // <a name="a"></a>
    // <div id="b"></div>
    //
    // <a href="#a" class="scrollTo" />
    // <a href="#b" class="scrollTo" />
    // <a href="#" class="scrollTo" /> ※フラグ名が指定されない（特定出来ない）場合はページの最上部へスクロールします。

    //--------------------
    // テキストの自動選択
    clickSelectionInputTextMark : ':text.url, textarea.js-click-selection, :text.js-click-selection', // セレクタの示す要素をクリックするとテキストが選択状態になります。

    //--------------------------
    // イメージのロールオーバー
    rolloverImgMark    : 'img.js-rollover, img.imgover', // セレクタの示す要素をホバーするとイメージがロールオーバーします。
    rolloverImgSuffix  : '_o', // ロールオーバー時のファイル名に付けられる接尾辞です。例) banner.jpg -> banner_o.jpg

    //----------------
    // ユニットの幅修正
    unitFixAlign    : 'on', // on, off

    //--------------------
    // ユニットグループの整列
    unitGroupAlign          : true,
    unitGroupAlignMark      : '.js-unit_group-align',
    unitGroupAlignClass     : 'acms-admin-clear', // clear: both;
    unitGroupAlignInterval  : 400,

    //------------------------
    // 検索ワードのハイライト
    searchKeywordHighlightMark  : '.entry, .entryColumn, .entryTitle', // セレクタ要素内に検索ワードが含まれる時、該当箇所がハイライトされます。
    searchKeywordMatchTag       : 'mark',
    searchKeywordMatchClass     : 'highlight',
    // 例)
    // 検索対象:<div.entry><p>いろはにほへと</p></div> 
    // 検索語:「いろ　ほへ」 
    // 結果:<div.entry><p><span class="highlight1">いろ</span>はに<span class="highlight2">ほへ</span>と</p></div>

    //---------
    // トグル
    toggleHeadClassSuffix  : 'toggle-head', // 切り替える際にクリックする要素
    toggleBodyClassSuffix  : 'toggle-body', // 切り替え表示対象の要素
    // 要素の表示非表示をアニメーションで切り替えます ( 初期状態は非表示となります )
    // 例）
    // <h4 class="continue-toggle-head">続きを読む</h4>
    // <p class="continue-toggle-body">本文</p>

    //----------
    // フェード
    fadeHeadClassSuffix : 'fade-head', // 切り替える際にクリックする要素
    fadeBodyClassSuffix : 'fade-body', // 切り替え表示対象の要素
    // 要素の表示非表示を切り替えますフェードのアニメーションで切り替えます ( 初期状態は非表示となります )
    // 例）
    // <h4 class="continue-fade-head">続きを読む</h4>
    // <p class="continue-fade-body">本文</p>

    //-----------
    // validator
    validatorFormMark       : 'form.js-validator',
    validatorResultClass    : 'validator-result-',
    validatorAlertMessage   : '入力に不備があったため送信されませんでした。',
    validatorOverlookMark   : '.overlook', // このマークが設定されたボタンはvalidatorを回避します。

    //------------
    // eval value
    inputEvalValueMark  : '.js-input-eval_value', 

    //--------
    // select
    select2textMark     : '.js-select_2text',

    //-------------------
    // observe file size
    observeFileSizeMark : '.js-observeFileSize',

    //--------------
    // resize image
    resizeImage : 'on',

    //--------------
    // post include
    postIncludeOnsubmitMark     : '.js-post_include',
    postIncludeOnreadyMark      : '.js-post_include-ready',
    postIncludeOnBottomMark     : '.js-post_include-bottom',
    postIncludeOnIntervalMark   : '.js-post_include-interval',
    postIncludeMethod           : 'replace', // ( 'swap' | 'replace' )
    postIncludeEffect           : 'slide', // ( 'slide' | 'fade' | '' )
    postIncludeEffectSpeed      : 'slow', // ( 'slow' | 'fast' )
    postIncludeOffset           : 60,
    postIncludeReadyDelay       : 0,
    postIncludeIntervalTime     : 20000,
    postIncludeArray  : [{
//        'mark'      : '.js-post_include-original',
//        'type'      : 'submit',
//        'method'    : 'swap',
//        'effect'    : 'slide',
//        'speed'     : 'slow'
    }],
    postIncludeEvalValueMark    : '.js-post_include-eval_value',

    //---------------------
    // link match location
    linkMatchLocationMark           : '.js-link_match_location',
    linkMatchLocationFullMark       : '.js-link_match_location-full',
    linkMatchLocationBlogMark       : '.js-link_match_location-blog',
    linkMatchLocationCategoryMark   : '.js-link_match_location-category',
    linkMatchLocationEntryMark      : '.js-link_match_location-entry',
    linkMatchLocationClass          : 'stay',
    linkMatchLocationFullClass      : 'stay',
    linkMatchLocationBlogClass      : 'stay',
    linkMatchLocationCategoryClass  : 'stay',
    linkMatchLocationEntryClass     : 'stay',
    linkMatchLocationArray  : [{
//        'mark'  : '.js-link_match_location-original',
//        'type'  : 'part', //( 'part' | 'full' | 'blog' | 'category' | 'entry' )
//        'class' : 'current'
    }],

    //---------
    // viewing
    viewingMark         : 'a.js-viewing-receptor', // 1.3.0 未満のバージョンからアップデートする場合には 'a' と指定してください。
    viewingId           : 'viewing',
    viewingClass        : 'viewing',
    viewingEraseMark    : 'a:not(.js-viewing-indelible)', // display:blockの要素は取り除かれません
    viewingNonTarget    : ['block', 'inline-block'],

    //--------------------
    // link outside blank
    linkOutsideBlankMark    : 'a:not([target])', // 外部リンクを新しいウィンドウで開きます。このセレクタで指定される要素に対してのみ処理対象となります

    //------------------------------
    // link https disabler, enabler
    linkHttpsDisablerMark   : 'a:not([rel*="https"])', // 暗号化を利用したhttps通信時に通常のリンクがhttps://になってしまうものをhttp://に書き換えます。
    // a:not([rel*="https"]) というセレクタが設定されている場合はrel属性に"https"と指定されているリンクは書き換えを行わずにhttps://のままになります。
    linkHttpsEnablerMark    : 'a[rel*="https"]', // 通常のhttp通信時にセレクタに該当するアンカーをhttps://から始まるURLに書き換えます。

    //--------------------
    // adminTableSortable
    adminTableSortableMark              : '.js-admin_table-sortable',

    //--------------------
    // fieldgroupSortable
    fieldgroupSortableMark              : '.js-fieldgroup-sortable',
    fieldgroupSortableMarkForm          : '.js-fieldgroup-sortable-form',
    fieldgroupSortableItemMark          : '.sortable-item', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemHandleMark    : '.item-handle', // fieldgroupSortableItemMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemDeleteMark    : '.item-delete', // fieldgroupSortableItemMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemTemplateMark  : '.item-template', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemInsertMark    : '.item-insert', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemMaxMark       : '.item-max', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
    fieldgroupSortableItemDeleteMessage : 'この項目を削除します。\nよろしいですか？', // 空文字 ('') にした場合は確認せずに削除します。
    fieldgroupSortableItemOverflowMessage1  : '登録できる項目数は', // 最大登録数を超えた時のメッセージの前半。（前半と後半の間に最大数が入ります）
    fieldgroupSortableItemOverflowMessage2  : 'つまでになります。', // 最大登録数を超えた時のメッセージの後半。（前半と後半の間に最大数が入ります）
    
    //----------------------
    // innerFieldgroupList
    innerFieldgroupListMark             : '.js-inner-fieldgroup-list',
    innerFieldgroupListTemplateMask     : '.inner-template',
    innerFieldgroupListDeleteMask       : '.inner-delete',
    innerFieldgroupListInputMask        : '.inner-input',
    innerFieldgroupListInsertMark       : '.inner-insert',
    innerFieldgroupListItemMask         : '.inner-item',

    //--------------
    // web storage
    webStorage          : 'on',
    webStorageType      : 'local',      // local or session
    webStorageCapacity  : 'limitless',  // one or limitless
    webStorageInterval  : 2000,
    
    //-----------------
    // banEnterSubmit
    banEnterSubmitMask                  : '.js-ban-enter-submit',

    //-------
    // ready 
    readyFocusMark  : ':input.js-ready-focus',
    readyScrollMark : '.js-ready-scroll',

    //-------
    // hover
    hoverMark   : '.js-hover',
    hoverClass  : 'hover',

    //-------
    // zebra
    zebraMark       : '.js-zebra',
    zebraOddClass   : 'odd',
    zebraEvenClass  : 'even',

    //-------------
    // placeholder
    placeholderMark   : '.js-placeholder',
    placeholderColor  : 'silver',

    //--------------------
    // incremental search
    incrementalSearchMark           : '.js-incremental-search',
    incrementalSearchBoxMark        : '.js-search-box',
    incrementalSearchElementMark    : '.js-search-element',

    //----------------
    // comment cookie
    commentCookieMark       : 'form#comment-form.apply',
    commentCookieUserMark   : 'form#comment-form.apply, form#comment-form.reapply',

    //-----------
    // input count up
    countupMark   : '.js-countup',
    countupMarkOver   : 'acms-admin-text-danger',

    //----------------------
    // external form button
    externalFormButtonMark  : '.js-external_submit',

    //-----------
    // copyright
    copyrightMark   : 'a#copyright, #copyright a'
});

//--------------
// Config.Admin
ACMS.Config.Admin   = {
    //--------------
    // arg guidance
    argGuidance       :
    {
        'Entry_Body'        : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
        'Entry_List'        : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
        'Entry_Photo'       : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
        'Entry_Headline'    : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
        'Entry_Summary'     : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
        'Entry_ArchiveList' : ['bid', 'cid', 'keyword', 'tag', 'field_'],
        'Entry_TagRelational':['bid', 'cid', 'eid', 'keyword', 'start', 'end'],
        'Entry_Continue'    : ['eid'],
        'Entry_Field'       : ['eid'],
        'Entry_Calendar'    : ['bid','cid','start'],

        'Unit_List'         : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],

        'Category_List'     : ['bid', 'cid', 'keyword', 'field_', 'start', 'end'],
        'Category_EntryList': ['bid', 'uid', 'cid', 'keyword', 'tag', 'field_', 'start', 'end'],
        'Category_EntrySummary': ['bid', 'uid', 'cid', 'keyword', 'tag', 'field_', 'start', 'end'],
        'Category_Field'    : ['cid'],

        'User_Profile'      : ['bid', 'uid'],
        'User_Field'        : ['uid'],
        'User_Search'       : ['bid', 'uid', 'keyword', 'field_', 'page'],

        'Blog_Field'        : ['bid'],
        'Blog_ChildList'    : ['bid', 'keyword', 'field_'],

        'Tag_Cloud'         : ['bid', 'eid', 'field_', 'start', 'end'],
        'Tag_Filter'        : ['bid', 'field_', 'tag'],

        'Calendar_Month'    : ['bid', 'cid', 'start', 'end'],
        'Calendar_Year'     : ['bid', 'cid'],

        'Links'             : [],
        'Banner'            : [],
        'Navigation'        : [],
        'Topicpath'         : ['bid', 'cid', 'eid'],

        'Comment_Body'      : ['eid'],
        'Comment_List'      : ['bid'],

        'Trackback_Body'    : ['eid'],
        'Trackback_List'    : ['bid'],

        'Feed_Rss2'         : ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'start', 'end'],
        'Feed_ExList'       : [],
        'Sitemap'           : [''],

        'Shop_Cart_List'    : [],
        'Case_Time'         : [],

        'Alias_List'        : ['bid'],

        'Field_ValueList'   : ['bid', 'field_'],

        'Api_Twitter_Statuses_HomeTimeline' : ['bid', 'field_', 'page'],
        'Api_Twitter_Statuses_UserTimeline' : ['bid', 'field_', 'page'],
        'Api_Twitter_Search'                : ['bid', 'field_', 'keyword', 'page'],
        'Api_Twitter_List_Statuses'         : ['bid', 'field_', 'page'],
        'Api_Twitter_List_Members'          : ['bid', 'field_', 'page'],

        'Api_Instagram_Users_Media_Recent'  : ['bid', 'field_'],
        'Api_Instagram_Users_Media_Liked'   : ['bid', 'field_'],

        'Api_Bing_WebSearch'    : ['bid', 'keyword', 'page'],
        'Api_Bing_ImageSearch'  : ['bid', 'keyword', 'page'],

        'Plugin_Schedule'       : ['bid']
    },

    //--------------
    // axis guidance
    axisGuidance       :
    {
        'Entry_Body'        : ['bid_axis', 'cid_axis'],
        'Entry_List'        : ['bid_axis', 'cid_axis'],
        'Entry_Photo'       : ['bid_axis', 'cid_axis'],
        'Entry_Headline'    : ['bid_axis', 'cid_axis'],
        'Entry_Summary'     : ['bid_axis', 'cid_axis'],
        'Entry_ArchiveList' : ['bid_axis', 'cid_axis'],
        'Entry_TagRelational':['bid_axis', 'cid_axis'],
        'Entry_Continue'    : [],
        'Entry_Field'       : [],
        'Entry_Calendar'    : ['bid_axis', 'cid_axis'],

        'Unit_List'         : ['bid_axis', 'cid_axis'],

        'Category_List'     : ['cid_axis'],
        'Category_EntryList': [],
        'Category_EntrySummary': ['bid_axis', 'cid_axis'],
        'Category_Field'    : [],

        'User_Profile'      : [],
        'User_Field'        : [],
        'User_Search'       : ['bid_axis'],

        'Blog_Field'        : [],
        'Blog_ChildList'    : [],

        'Tag_Cloud'         : ['bid_axis'],
        'Tag_Filter'        : [],

        'Calendar_Month'    : ['bid_axis', 'cid_axis'],
        'Calendar_Year'     : ['bid_axis', 'cid_axis'],

        'Links'             : [],
        'Banner'            : [],
        'Navigation'        : [],
        'Topicpath'         : ['bid_axis', 'cid_axis'],

        'Comment_Body'      : [],
        'Comment_List'      : [],

        'Trackback_Body'    : [],
        'Trackback_List'    : [],

        'Feed_Rss2'         : ['bid_axis', 'cid_axis'],
        'Feed_ExList'       : [],
        'Sitemap'           : ['bid_axis', 'cid_axis'],

        'Shop_Cart_List'    : [],
        'Case_Time'         : [],

        'Alias_List'        : [],

        'Field_ValueList'   : ['bid_axis'],

        'Api_Twitter_Statuses_HomeTimeline' : [],
        'Api_Twitter_Statuses_UserTimeline' : [],
        'Api_Twitter_Search'                : [],
        'Api_Twitter_List_Statuses'         : [],
        'Api_Twitter_List_Members'          : [],

        'Api_Instagram_Users_Media_Recent'  : [],
        'Api_Instagram_Users_Media_Liked'   : [],

        'Api_Bing_WebSearch'    : [],
        'Api_Bing_ImageSearch'  : [],

        'Plugin_Schedule'       : []
    },

    //--------------------
    // multi arg guidance
    multiArgGuidance       :
    {
        'Entry_Body'        : ['bid', 'uid', 'cid', 'eid'],
        'Entry_List'        : ['bid', 'uid', 'cid', 'eid'],
        'Entry_Photo'       : ['bid', 'uid', 'cid', 'eid'],
        'Entry_Headline'    : ['bid', 'uid', 'cid', 'eid'],
        'Entry_Summary'     : ['bid', 'uid', 'cid', 'eid'],
        'Entry_ArchiveList' : ['bid', 'uid', 'cid', 'eid'],
        'Entry_TagRelational':['bid', 'uid', 'cid', 'eid'],
        'Entry_Continue'    : ['bid', 'uid', 'cid', 'eid'],
        'Entry_Field'       : ['bid', 'uid', 'cid', 'eid'],
        'Entry_Calendar'    : ['bid', 'uid', 'cid', 'eid'],

        'Unit_List'         : [],

        'Category_List'     : [],
        'Category_EntryList': [],
        'Category_EntrySummary': [],
        'Category_Field'    : [],

        'User_Profile'      : [],
        'User_Field'        : [],
        'User_Search'       : [],

        'Blog_Field'        : [],
        'Blog_ChildList'    : [],

        'Tag_Cloud'         : [],
        'Tag_Filter'        : [],

        'Calendar_Month'    : [],
        'Calendar_Year'     : [],

        'Links'             : [],
        'Banner'            : [],
        'Navigation'        : [],
        'Topicpath'         : [],

        'Comment_Body'      : [],
        'Comment_List'      : [],

        'Trackback_Body'    : [],
        'Trackback_List'    : [],

        'Feed_Rss2'         : [],
        'Feed_ExList'       : [],
        'Sitemap'           : [],

        'Shop_Cart_List'    : [],
        'Case_Time'         : [],

        'Alias_List'        : [],

        'Field_ValueList'   : [],

        'Api_Twitter_Statuses_HomeTimeline' : [],
        'Api_Twitter_Statuses_UserTimeline' : [],
        'Api_Twitter_Search'                : [],
        'Api_Twitter_List_Statuses'         : [],
        'Api_Twitter_List_Members'          : [],

        'Api_Instagram_Users_Media_Recent'  : [],
        'Api_Instagram_Users_Media_Liked'   : [],

        'Api_Bing_WebSearch'    : [],
        'Api_Bing_ImageSearch'  : [],

        'Plugin_Schedule'       : []
    }
};
