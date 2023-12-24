import textwrap
from bible_app.models import AllBibles
from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **kwargs):

        keyword = input("Keyword: ")

        search_results = AllBibles.objects.filter(text__icontains=keyword).order_by("bible_id")

        for verse in search_results:
            wrapped_lines = textwrap.wrap(verse.text)
            textwrap.wrap(verse.text, width=80)
            print()
            print(f"{verse.book_name} {verse.chapter}:{verse.verse} - {verse.bible_name}")
            print("\n".join(wrapped_lines))

        print()
        print(f"{search_results.count()} verses contain '{keyword}'") 
        print()


