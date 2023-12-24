from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import NIVBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        niv_data = NIVBible.objects.all()

        if niv_data.count() != 31100 and niv_data.count() > 0:
            niv_data.delete()

        if niv_data.count() == 31100:
            print("NIV Bible data already exists")
            print(f"{niv_data.count()} out of 31100")
        else:
            print("Loading NIV Bible...")
            for row in DictReader(open('./bible_data/niv.csv')):
                verse = NIVBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print() 

