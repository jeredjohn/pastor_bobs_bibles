from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import KJVBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        kjv_data = KJVBible.objects.all()

        if kjv_data.count() != 31102 and kjv_data.count() > 0:
            kjv_data.delete()

        if kjv_data.count() == 31102:
            print("KJV Bible data already exists")
            print(f"{kjv_data.count()} out of 31102")
        else:
            print("Loading KJV Bible...")
            for row in DictReader(open('./bible_data/kjv.csv')):
                verse = KJVBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print()                

