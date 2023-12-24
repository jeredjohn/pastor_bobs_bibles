from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import ESVBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        esv_data = ESVBible.objects.all()

        if esv_data.count() != 31101 and esv_data.count() > 0:
            esv_data.delete()

        if esv_data.count() == 31101:
            print("ESV Bible data already exists")
            print(f"{esv_data.count()} out of 31101")
        else:
            print("Loading ESV Bible...")
            for row in DictReader(open('./bible_data/esv.csv')):
                verse = ESVBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print() 

