from csv import DictReader
from django.core.management import BaseCommand
from bible_app.models import *

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        print("This process will load data for AMPCBible, ESVBible, KJVBible,")
        print("NKJVBible, NASBible, NIVBible, and AllBibles models...")
        print()

        all_data = AllBibles.objects.all()

        if all_data.count() != 186607 and all_data.count() > 0:
            all_data.delete()

        if all_data.count() == 186607:
            print("Data for AllBibles model already exists")
            print(f"{all_data.count()} out of 186607") 
        else:
            print("Loading AMPC Bible...")
            for row in DictReader(open('./bible_data/amp.csv')):
                verse = AllBibles(bible_id="1", bible_name="AMPC", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()

            print("Loading ESV Bible...")
            for row in DictReader(open('./bible_data/esv.csv')):
                verse = AllBibles(bible_id="1", bible_name="ESV", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()

            print("Loading KJV Bible...")
            for row in DictReader(open('./bible_data/kjv.csv')):
                verse = AllBibles(bible_id="1", bible_name="KJV", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()

            print("Loading NKJV Bible...")
            for row in DictReader(open('./bible_data/nkjv.csv')):
                verse = AllBibles(bible_id="1", bible_name="NKJV", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
        
            print("Loading NASBible Bible...")
            for row in DictReader(open('./bible_data/nas.csv')):
                verse = AllBibles(bible_id="1", bible_name="NKJV", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()

            print("Loading NIV Bible...")
            for row in DictReader(open('./bible_data/niv.csv')):
                verse = AllBibles(bible_id="1", bible_name="NKJV", book_id=row['Book'], 
                    chapter=row['Chapter'], verse=row['Verse'], text=row['Text'])
                verse.text.replace("'", "\"")
                book_num = int(verse.book_id) - 1
                verse.book_name = BOOK_CHOICES[book_num][1]
                verse.save()
print()

