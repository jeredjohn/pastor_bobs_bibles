from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import AMPCBible, BOOK_CHOICES

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        amp_data = AMPCBible.objects.all()

        if amp_data.count() != 31100 and amp_data.count() > 0:
            amp_data.delete()

        if amp_data.count() == 31100:
            print("AMPC Bible data already exists")
            print(f"{amp_data.count()} out of 31100")
        else:
            print("Loading AMPC Bible...")
            for row in DictReader(open('./bible_data/amp.csv')):
                verse = AMPCBible(book_id=row['Book'], chapter=row['Chapter'],
                        verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print() 
