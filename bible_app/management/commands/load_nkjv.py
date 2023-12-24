from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import NKJVBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        nkjv_data = NKJVBible.objects.all()

        if nkjv_data.count() != 31102 and nkjv_data.count() > 0:
            nkjv_data.delete()

        if nkjv_data.count() == 31102:
            print("NKJV Bible data already exists")
            print(f"{nkjv_data.count()} out of 31102")
        else:
            print("Loading NKJV Bible...")
            for row in DictReader(open('./bible_data/nkjv.csv')):
                verse = NKJVBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print()
