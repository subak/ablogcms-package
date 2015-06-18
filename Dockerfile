FROM subak/ablogcms:5.4-dev
MAINTAINER Subak Systems <info@subak.jp>

COPY docker/ssmtp.conf /etc/ssmtp/

COPY . /var/www/html/