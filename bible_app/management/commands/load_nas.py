from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import NASBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        nas_data = NASBible.objects.all()

        if nas_data.count() != 31102 and nas_data.count() > 0:
            nas_data.delete()

        if nas_data.count() == 31102:
            print("NAS Bible data already exists")
            print(f"{nas_data.count()} out of 31102")
        else:
            print("Loading NASBible Bible...")
            for row in DictReader(open('./bible_data/nas.csv')):
                verse = NASBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print()
