#!/bin/bash

# sudo ./docker/lsyncd.sh ./ rsync://dev.docker.host:`docker-compose port rsync 873 | sed -e 's/0.0.0.0://'`/var_www_html

SYNC_EX=${SYNC_EX:-'".git/", "docker/", "archives/*", "archives_rev/*", "media/*"'}

mkdir -p /tmp/lsyncd
FILE=/tmp/lsyncd/lsyncd.$RANDOM.conf

cat <<EOF > $FILE
settings {
  nodaemon = true,
  delay = 0
}

sync {
  default.rsync,
  source = "$1",
  target = "$2",
  exclude = {$SYNC_EX},
  rsync = {
    compress = true,
    perms = true,
    protect_args = false,
    verbose = true
  }
}
EOF

lsyncd $FILE
