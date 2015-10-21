git clone -b php54/latest https://github.com/subak/ablogcms-package.git

skeltonです
ここにそのプロジェクトの説明を書いて上書きしてください。

```
# ablogcmsのローカル開発ライセンスにするため
$ bash -c 'sudo stone $(echo $DOCKER_HOST | sed -e "s/tcp:\/\///" | sed -e "s/:[0-9]*$//"):$(docker-compose port web 80 | sed -e "s/0.0.0.0://") 80'

# ファイルの同期
$ bash -c 'sudo ./docker/lsyncd.sh ./ rsync://$(echo $DOCKER_HOST | sed -e "s/tcp:\/\///" | sed -e "s/:[0-9]*$//"):$(docker-compose port rsync 873 | sed -e "s/0.0.0.0://")/var_www_html'
```

## インストール
```
# lsyncdを起動した後
$ chmod 666 config.server.php
$ chmod 777 archives archives_rev media 

# lsyncdをストップ
$ docker cp $CID:/var/www/html/config.server.php config.server.php
```

