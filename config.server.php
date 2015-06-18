<?php

define('DOMAIN', '');
define('DOMAIN_BASE', '');

define('DB_TYPE', 'mysql');
define('DB_HOST', getenv('MYSQL_PORT_3306_TCP_ADDR'));
define('DB_NAME', '');
define('DB_USER', '');
define('DB_PASS', '');
define('DB_PORT', null);
define('DB_CHARSET', 'UTF-8');
define('DB_PREFIX', '');

// GETTEXT_TYPE: fix|auto|user
define('GETTEXT_TYPE', 'auto');
// GETTEXT_APPLICATION_RANGE: admin|login|all
define('GETTEXT_APPLICATION_RANGE', 'admin');
define('GETTEXT_DEFAULT_LOCALE', 'ja_JP.UTF-8');
define('GETTEXT_DOMAIN', 'messages');
define('GETTEXT_PATH', 'lang');

define('SSL_ENABLE', 0);
define('COOKIE_SECURE', 0);
define('HOOK_ENABLE', 0);
define('RESOLVE_PATH', 1);
define('URL_SUFFIX_SLASH', 1);
define('SESSION_NAME', 'sid');
define('REWRITE_FORCE', 1);
define('MAX_PUBLISHES', 3);
define('MAX_EXECUTION_TIME', 30);
define('DEFAULT_TIMEZONE', 'Asia/Tokyo');
define('DOCUMENT_ROOT_FORCE', null);

define('THEMES_DIR', 'themes/');
define('ARCHIVES_DIR', 'archives/');
define('REVISON_ARCHIVES_DIR', 'archives_rev/');
define('MEDIA_LIBRARY_DIR', 'media/');
define('ARCHIVES_CACHE_SERVER', '');
define('PHP_DIR', 'php/');
define('JS_DIR', 'js/');
define('IMAGES_DIR', 'images/');

define('CONFIG_FILE', 'private/config.system.yaml');
define('CONFIG_DEFAULT_FILE', 'private/config.system.default.yaml');
define('MIME_TYPES_FILE', 'private/mime.types');
define('REWRITE_PATH_EXTENSION', 'pdf|doc|docx|ppt|pptx|xls|xlsx|lzh|zip|rar');
define('ERROR_LOG_FILE', '');

define('BID_SEGMENT', 'bid');
define('AID_SEGMENT', 'aid');
define('UID_SEGMENT', 'uid');
define('CID_SEGMENT', 'cid');
define('EID_SEGMENT', 'eid');
define('UTID_SEGMENT', 'utid');
define('CMID_SEGMENT', 'cmid');
define('TBID_SEGMENT', 'tbid');
define('KEYWORD_SEGMENT', 'keyword');
define('TAG_SEGMENT', 'tag');
define('FIELD_SEGMENT', 'field');
define('ORDER_SEGMENT', 'order');
define('ALT_SEGMENT', 'alt');
define('TPL_SEGMENT', 'tpl');
define('PAGE_SEGMENT', 'page');
define('PROXY_SEGMENT', 'proxy');
define('TRACKBACK_SEGMENT', 'trackback');
define('SPAN_SEGMENT', '-');
define('ADMIN_SEGMENT', 'admin');
define('LOGIN_SEGMENT', 'login');
define('SIGNUP_SEGMENT', 'signup');
define('LIMIT_SEGMENT', 'limit');
define('DOMAIN_SEGMENT', 'domain');
define('IOS_APP_UA', 'acms_iOS_app');

// 本番運用時にDEBUG_MODEを 0 に設定して下さい
define('DEBUG_MODE', 1);
define('BENCHMARK_MODE', 0);
