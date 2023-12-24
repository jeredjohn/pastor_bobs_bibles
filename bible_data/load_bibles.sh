#!/usr/bin/bash
# Load all bibles into django database.

python manage.py load_all ; python manage.py load_amp ; python manage.py load_esv ; \
python manage.py load_kjv ; python manage.py load_nkjv ; python manage.py load_nas ; \
python manage.py load_niv



