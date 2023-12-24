from django import forms
from .models import *


class AMPCChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = AMPCBible
        fields = ['book_name', 'chapter']


class AMPCVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = AMPCBible
        fields = ['book_name', 'chapter', 'verse']


class AMPCVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']


class ESVChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = ESVBible
        fields = ['book_name', 'chapter']


class ESVVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = ESVBible
        fields = ['book_name', 'chapter', 'verse']


class ESVVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']


class KJVChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = KJVBible
        fields = ['book_name', 'chapter']


class KJVVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = KJVBible
        fields = ['book_name', 'chapter', 'verse']


class KJVVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']


class NKJVChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = NKJVBible
        fields = ['book_name', 'chapter']


class NKJVVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = NKJVBible
        fields = ['book_name', 'chapter', 'verse']


class NKJVVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']


class NASChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = NASBible
        fields = ['book_name', 'chapter']


class NASVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = NASBible
        fields = ['book_name', 'chapter', 'verse']


class NASVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']


class NIVChapterForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES,
                                  widget=forms.Select(attrs={'autofocus': True}))
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    class Meta:
        model = ESVBible
        fields = ['book_name', 'chapter']


class NIVVerseForm(forms.ModelForm):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        model = NIVBible
        fields = ['book_name', 'chapter', 'verse']


class NIVVerseRangeForm(forms.Form):
    book_name = forms.ChoiceField(label="", choices=BOOK_CHOICES)
    chapter = forms.ChoiceField(label="", choices=CHAPTER_CHOICES)
    verse__gte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    verse__lte = forms.ChoiceField(label="", choices=VERSE_CHOICES) 
    class Meta:
        fields = ['book_name', 'chapter', 'verse_gte', 'verse_lte']

