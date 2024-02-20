from django.db import models


BOOK_NAMES = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel',
    '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 
    'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
    'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 
    'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
    '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians',
    '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews',
    'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
]

BIBLE_CHOICES = [
    ('1', 'AMPC Bible'),
    ('2', 'ESV Bible'),
    ('3', 'KJV Bible'),
    ('4', 'NKJV Bible'),
    ('5', 'NAS Bible'),
    ('6', 'NIV Bible')
]        

BOOK_CHOICES = [
    ('1', 'Genesis'), ('2', 'Exodus'), ('3', 'Leviticus'), ('4', 'Numbers'), 
    ('5', 'Deuteronomy'), ('6', 'Joshua'),('7', 'Judges'), ('8', 'Ruth'), 
    ('9', '1 Samuel'), ('10', '2 Samuel'), ('11', '1 Kings'), ('12', '2 Kings'),
    ('13', '1 Chronicles'), ('14', '2 Chronicles'), ('15', 'Ezra'), 
    ('16', 'Nehemiah'), ('17', 'Esther'), ('18', 'Job'), ('19', 'Psalms'),
    ('20', 'Proverbs'), ('21', 'Ecclesiastes'), ('22', 'Song of Solomon'),
    ('23', 'Isaiah'), ('24', 'Jeremiah'), ('25', 'Lamentations'), ('26', 'Ezekiel'),
    ('27', 'Daniel'), ('28', 'Hosea'), ('29', 'Joel'), ('30', 'Amos'), 
    ('31', 'Obadiah'), ('32', 'Jonah'), ('33', 'Micah'), ('34', 'Nahum'), 
    ('35', 'Habakkuk'), ('36', 'Zephaniah'), ('37', 'Haggai'), ('38', 'Zechariah'),
    ('39', 'Malachi'), ('40', 'Matthew'), ('41', 'Mark'), ('42', 'Luke'),
    ('43', 'John'), ('44', 'Acts'), ('45', 'Romans'), ('46', '1 Corinthians'),
    ('47', '2 Corinthians'), ('48', 'Galatians'), ('49', 'Ephesians'),
    ('50', 'Philippians'), ('51', 'Colossians'), ('52', '1 Thessalonians'),
    ('53', '2 Thessalonians'), ('54', '1 Timothy'), ('55', '2 Timothy'),
    ('56', 'Titus'), ('57', 'Philemon'), ('58', 'Hebrews'), ('59', 'James'),
    ('60', '1 Peter'), ('61', '2 Peter'), ('62', '1 John'), ('63', '2 John'),
    ('64', '3 John'), ('65', 'Jude'), ('66', 'Revelation')
]        

CHAPTER_CHOICES = [
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
    (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19),
    (20, 20), (21, 21), (22, 22), (23, 23), (24, 24), (25, 25), (26, 26), (27, 27), (28, 28),
    (29, 29), (30, 30),  (31, 31), (32, 32), (33, 33), (34, 34), (35, 35), (36, 36), (37, 37),
    (38, 38), (39, 39), (40, 40), (41, 41), (42, 42), (43, 43), (44, 44), (45, 45), (46, 46),
    (47, 47), (48, 48), (49, 49), (50, 50)
]

VERSE_CHOICES = [
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
    (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19),
    (20, 20), (21, 21), (22, 22), (23, 23), (24, 24), (25, 25), (26, 26), (27, 27), (28, 28),
    (29, 29), (30, 30),  (31, 31)
]        

class AMPCBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class ESVBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class KJVBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class NKJVBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class NASBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class NIVBible(models.Model):
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return self.text


class AllBibles(models.Model):
    bible_id = models.CharField(max_length=1, choices=BIBLE_CHOICES)
    bible_name = models.CharField(max_length=50, null=True)
    book_id = models.CharField(max_length=2, choices=BOOK_CHOICES)
    book_name = models.CharField(max_length=50, null=True)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()
 
    def __str__(self):
        return self.text 

