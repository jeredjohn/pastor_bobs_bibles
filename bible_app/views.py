from django.shortcuts import render
from django.db.models import Q
from django.views.generic import ListView, TemplateView
from django.views.generic.edit import FormView
from .models import *
from .forms import *


class AMPCBibleView(TemplateView):
    template_name = 'bible_app/amp_bible.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "AMPC Bible"
        return context 

amp_bible = AMPCBibleView.as_view()


class AMPCChaptersView(FormView):
    form_class = AMPCChapterForm
    context_object_name = 'amp_chapter'
    template_name = 'bible_app/amp_chapters.html'
    success_url = '/bible_app/amp_chapters/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            context['title'] = "AMP Chapter Search"        
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            amp_chapter_results =  AMPCBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter))     
            context['amp_chapter_results'] = amp_chapter_results.order_by("verse") 
            return context            

amp_chapters = AMPCChaptersView.as_view()


class AMPCKeywordSearch(ListView):
    model = AMPCBible
    context_object_name = "amp_keyword_results"
    template_name = "bible_app/amp_keyword.html" 

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)            
            context['title'] = "AMPC Keyword Search" 
            keyword = self.request.GET.get('q')
            context['keyword'] = keyword            
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return AMPCBible.objects.filter(Q(text__search=query))     

amp_keyword = AMPCKeywordSearch.as_view()    


class AMPCVerseView(FormView):
    form_class = AMPCVerseForm
    context_object_name = 'amp_verse'
    template_name = 'bible_app/amp_verse.html'
    success_url = '/bible_app/amp_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "AMP Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            amp_verse_results =  AMPCBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if amp_verse_results:
                context['amp_verse_results'] = amp_verse_results 
                context['verse_text'] = amp_verse_results.first().text
            return context            

amp_verse = AMPCVerseView.as_view()


class AMPCVerseRangeView(FormView):
    form_class = AMPCVerseRangeForm
    context_object_name = 'amp_verses'
    template_name = 'bible_app/amp_verse_range.html'
    success_url = '/bible_app/amp_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "AMPC Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                amp_verse_range_results = AMPCBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end)).order_by("verse")     
                context['amp_verse_range_results'] = amp_verse_range_results 
            return context            

amp_verse_range = AMPCVerseRangeView.as_view()


class ESVBibleView(TemplateView):
    template_name = 'bible_app/esv_bible.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "ESV Bible"
        return context 

esv_bible = ESVBibleView.as_view()


class ESVChaptersView(FormView):
    form_class = ESVChapterForm
    context_object_name = 'esv_chapter'
    template_name = 'bible_app/esv_chapters.html'
    success_url = '/bible_app/esv_chapters/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            context['title'] = "ESV Chapter Search"        
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            esv_chapter_results =  ESVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter))     
            context['esv_chapter_results'] = esv_chapter_results.order_by("verse")
            return context            

esv_chapters = ESVChaptersView.as_view()


class ESVVerseView(FormView):
    form_class = ESVVerseForm
    context_object_name = 'esv_verse'
    template_name = 'bible_app/esv_verse.html'
    success_url = '/bible_app/esv_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "ESV Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            esv_verse_results =  ESVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if esv_verse_results:
                context['esv_verse_results'] = esv_verse_results 
                context['verse_text'] = esv_verse_results.first().text
            return context            

esv_verse = ESVVerseView.as_view()


class ESVVerseRangeView(FormView):
    form_class = ESVVerseRangeForm
    context_object_name = 'esv_verses'
    template_name = 'bible_app/esv_verse_range.html'
    success_url = '/bible_app/esv_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "ESV Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                esv_verse_range_results = ESVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end))     
                context['esv_verse_range_results'] = esv_verse_range_results 
            return context            

esv_verse_range = ESVVerseRangeView.as_view()


class ESVKeywordSearch(ListView):
    model = ESVBible
    context_object_name = "esv_keyword_results"
    template_name = "bible_app/esv_keyword.html"
    
    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "ESV Keyword Search" 
            context['keyword'] = self.request.GET.get('q')
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return ESVBible.objects.filter(Q(text__search=query))     

esv_keyword = ESVKeywordSearch.as_view()    


class KJVBibleView(TemplateView):
    template_name = 'bible_app/kjv_bible.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "KJV Bible"
        return context 

kjv_bible = KJVBibleView.as_view()


class KJVChaptersView(FormView):
    form_class = KJVChapterForm
    context_object_name = 'kjv_chapter'
    template_name = 'bible_app/kjv_chapters.html'
    success_url = '/bible_app/kjv_chapters/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)

            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            context['title'] = "KJV Chapter Search"        
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            kjv_chapter_results =  KJVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter))     
            context['kjv_chapter_results'] = kjv_chapter_results.order_by("verse") 
            return context            

kjv_chapters = KJVChaptersView.as_view()


class KJVVerseView(FormView):
    form_class = KJVVerseForm
    context_object_name = 'kjv_verse'
    template_name = 'bible_app/kjv_verse.html'
    success_url = '/bible_app/kjv_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "KJV Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            kjv_verse_results =  KJVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if kjv_verse_results:
                context['kjv_verse_results'] = kjv_verse_results 
                context['verse_text'] = kjv_verse_results.first().text
            return context            

kjv_verse = KJVVerseView.as_view()


class KJVVerseRangeView(FormView):
    form_class = KJVVerseRangeForm
    context_object_name = 'kjv_verses'
    template_name = 'bible_app/kjv_verse_range.html'
    success_url = '/bible_app/kjv_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "KJV Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                kjv_verse_range_results = KJVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end))     
                context['kjv_verse_range_results'] = kjv_verse_range_results 
            return context            

kjv_verse_range = KJVVerseRangeView.as_view()


class KJVKeywordSearch(ListView):
    model = KJVBible
    context_object_name = "kjv_keyword_results"
    template_name = "bible_app/kjv_keyword.html"
    
    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "KJV Keyword Search" 
            context['keyword'] = self.request.GET.get('q')
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return KJVBible.objects.filter(Q(text__search=query))     

kjv_keyword = KJVKeywordSearch.as_view()    


class NKJVVerseView(FormView):
    form_class = NKJVVerseForm
    context_object_name = 'nkjv_verse'
    template_name = 'bible_app/nkjv_verse.html'
    success_url = '/bible_app/nkjv_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NKJV Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            nkjv_verse_results =  NKJVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if nkjv_verse_results:
                context['nkjv_verse_results'] = nkjv_verse_results 
                context['verse_text'] = nkjv_verse_results.first().text
            return context            

nkjv_verse = NKJVVerseView.as_view()


class NKJVVerseRangeView(FormView):
    form_class = NKJVVerseRangeForm
    context_object_name = 'nkjv_verses'
    template_name = 'bible_app/nkjv_verse_range.html'
    success_url = '/bible_app/nkjv_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NKJV Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                nkjv_verse_range_results = NKJVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end))     
                context['nkjv_verse_range_results'] = nkjv_verse_range_results 
            return context            

nkjv_verse_range = NKJVVerseRangeView.as_view()


class NKJVBibleView(TemplateView):
    template_name = 'bible_app/nkjv_bible.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "NKJV Bible"
        return context 

nkjv_bible = NKJVBibleView.as_view()


class NKJVChaptersView(FormView):
    form_class = NKJVChapterForm
    context_object_name = 'nkjv_chapter'
    template_name = 'bible_app/nkjv_chapters.html'
    success_url = '/bible_app/nkjv_chapters/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        book_num = self.request.GET.get('book_name')
        context['book_num'] = book_num
        if book_num == None:
            book_num = 1
        context["title"] = "NKJV Chapter Search"
        book_name = BOOK_NAMES[int(book_num) - 1]
        context['book_name'] = book_name
        chapter = self.request.GET.get('chapter')
        context['chapter'] = chapter
        nkjv_chapter_results =  NKJVBible.objects.filter(Q(book_name=book_name) & 
                Q(chapter=chapter))     
        print(nkjv_chapter_results)
        context['nkjv_chapter_results'] = nkjv_chapter_results.order_by("verse") 
        return context            

nkjv_chapters = NKJVChaptersView.as_view()


class NKJVKeywordSearch(ListView):
    model = NKJVBible
    context_object_name = "nkjv_keyword_results"
    template_name = "bible_app/nkjv_keyword.html"
    
    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NKJV Keyword Search" 
            context['keyword'] = self.request.GET.get('q')
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return NKJVBible.objects.filter(Q(text__search=query))     

nkjv_keyword = NKJVKeywordSearch.as_view()    


class NASBibleView(TemplateView):
    template_name = 'bible_app/nas_bible.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "NAS Bible"
        return context 

nas_bible = NASBibleView.as_view()


class NASChaptersView(FormView):
    form_class = NASChapterForm
    context_object_name = 'nas_chapter'
    template_name = 'bible_app/nas_chapters.html'
    success_url = '/bible_app/nas_chapters/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)

            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            context["title"] = "NAS Chapter Search"
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            nas_chapter_results =  NASBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter))     
            context['nas_chapter_results'] = nas_chapter_results.order_by("verse") 
            return context            

nas_chapters = NASChaptersView.as_view()


class NASVerseView(FormView):
    form_class = NASVerseForm
    context_object_name = 'nas_verse'
    template_name = 'bible_app/nas_verse.html'
    success_url = '/bible_app/nas_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NAS Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            nas_verse_results =  NASBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if nas_verse_results:
                context['nas_verse_results'] = nas_verse_results 
                context['verse_text'] = nas_verse_results.first().text
            return context            

nas_verse = NASVerseView.as_view()


class NASVerseRangeView(FormView):
    form_class = NASVerseRangeForm
    context_object_name = 'nas_verses'
    template_name = 'bible_app/nas_verse_range.html'
    success_url = '/bible_app/nas_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NAS Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                nas_verse_range_results = NASBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end))     
                context['nas_verse_range_results'] = nas_verse_range_results 
            return context            

nas_verse_range = NASVerseRangeView.as_view()


class NASKeywordSearch(ListView):
    model = NASBible
    context_object_name = "nas_keyword_results"
    template_name = "bible_app/nas_keyword.html"
    
    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NAS Keyword Search" 
            context['keyword'] = self.request.GET.get('q')
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return NASBible.objects.filter(Q(text__search=query))     

nas_keyword = NASKeywordSearch.as_view()    


class NIVBibleView(TemplateView):
    template_name = 'bible_app/niv_bible.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "NIV Bible"
        return context 

niv_bible = NIVBibleView.as_view()


class NIVChaptersView(FormView):
    form_class = NIVChapterForm
    context_object_name = 'niv_chapter'
    template_name = 'bible_app/niv_chapters.html'
    success_url = '/bible_app/niv_chapters/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)

            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            context["title"] = "NIV Chapter Search"
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            niv_chapter_results =  NIVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter))     
            context['niv_chapter_results'] = niv_chapter_results.order_by("verse") 
            return context            

niv_chapters = NIVChaptersView.as_view()


class NIVVerseView(FormView):
    form_class = NIVVerseForm
    context_object_name = 'niv_verse'
    template_name = 'bible_app/niv_verse.html'
    success_url = '/bible_app/niv_verse/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NIV Verse Search" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse = self.request.GET.get('verse')
            context['verse'] = verse
            niv_verse_results =  NIVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse=verse))     
            if niv_verse_results:
                context['niv_verse_results'] = niv_verse_results 
                context['verse_text'] = niv_verse_results.first().text
            return context            

niv_verse = NIVVerseView.as_view()


class NIVVerseRangeView(FormView):
    form_class = NIVVerseRangeForm
    context_object_name = 'niv_verses'
    template_name = 'bible_app/niv_verse_range.html'
    success_url = '/bible_app/niv_verse_range.html/'

    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NIV Verse Range" 
            book_num = self.request.GET.get('book_name')
            context['book_num'] = book_num
            if book_num == None:
                book_num = 1
            book_name = BOOK_NAMES[int(book_num) - 1]
            context['book_name'] = book_name
            chapter = self.request.GET.get('chapter')
            context['chapter'] = chapter
            verse_start = self.request.GET.get('verse__gte')
            context['verse_start'] = verse_start
            verse_end = self.request.GET.get('verse__lte')
            context['verse_end'] = verse_end
            if book_name != None and book_num != None and chapter != None and verse_end != None and verse_start != None:
                niv_verse_range_results = NIVBible.objects.filter(Q(book_name=book_name) & 
                    Q(chapter=chapter) & Q(verse__gte=verse_start) & Q(verse__lte=verse_end))     
                context['niv_verse_range_results'] = niv_verse_range_results 
            return context            

niv_verse_range = NIVVerseRangeView.as_view()


class NIVKeywordSearch(ListView):
    model = NIVBible
    context_object_name = "niv_keyword_results"
    template_name = "bible_app/niv_keyword.html"
    
    def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['title'] = "NIV Keyword Search" 
            context['keyword'] = self.request.GET.get('q')
            return context

    def get_queryset(self): 
        query = self.request.GET.get('q')
        if query != None:
            return NIVBible.objects.filter(Q(text__search=query))     

niv_keyword = NIVKeywordSearch.as_view()    
