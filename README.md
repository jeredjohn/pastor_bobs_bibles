DATABASE:
PostgreSQL

BIBLES:
English Standard Version (ESV)
Amplified (AMP)
King James Version (KJV)
New King James Version (NKJV)
New American Standard Bible (NASB)
New International Version (NIV)

FEATURES:
View previous/next chapter.
View previous/next verse.
Zoom in/out (sets in localStorage).
All search results have options to copy text or html.

SEARCH OPTIONS:
Keyword - From keyword results, has options to view in chapter or verse range.
Chapter
Verse
Verse Range

INSTALL (Linux):

Install virtual environment (optional).

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py load_amp

python manage.py load_esv

python manage.py load_kjv

python manage.py load_nkjv

python manage.py load_nas

python manage.py load_niv


