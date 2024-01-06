const chapterForm  = document.getElementById('signup'); 
const bookSelect = document.getElementById("id_book_name"); 
const chapterSelect = document.getElementById("id_chapter");
const verseSelect = document.getElementById("id_verse");
const verseGteSelect = document.getElementById("id_verse__gte");
const verseLteSelect = document.getElementById("id_verse__lte");

if (localStorage.getItem("updateOne") != "true") {
	resetLocalStorage();
	localStorage.setItem("updateOne", "true");	
}

function resetLocalStorage() {
	localStorage.clear();
	localStorage.setItem("updateOne", "true");
}

// .......... BIBLE DATA
// .......... bookNames {{{
const bookNames = {
	'1': 'Genesis', '2': 'Exodus', '3': 'Leviticus', '4': 'Numbers', '5': 'Deuteronomy',
	'6': 'Joshua', '7': 'Judges', '8': 'Ruth', '9': '1 Samuel', '10': '2 Samuel',
	'11': '1 Kings', '12': '2 Kings', '13': '1 Chronicles', '14': '2 Chronicles',
	'15': 'Ezra', '16': 'Nehemiah', '17': 'Esther', '18': 'Job', '19': 'Psalm',
	'20': 'Proverbs', '21': 'Ecclesiastes', '22': 'Song of Solomon', '23': 'Isaiah',
	'24': 'Jeremiah', '25': 'Lamentations', '26': 'Ezekiel', '27': 'Daniel', '28': 'Hosea',
	'29': 'Joel', '30': 'Amos', '31': 'Obadiah', '32': 'Jonah', '33': 'Micah',
	'34': 'Nahum', '35': 'Habakkuk', '36': 'Zephaniah', '37': 'Haggai', '38': 'Zechariah',
	'39': 'Malachi', '40': 'Matthew', '41': 'Mark', '42': 'Luke', '43': 'John',
	'44': 'Acts', '45': 'Romans', '46': '1 Corinthians', '47': '2 Corinthians',
	'48': 'Galatians', '49': 'Ephesians', '50': 'Philippians', '51': 'Colossians',
	'52': '1 Thessalonians', '53': '2 Thessalonians', '54': '1 Timothy', '55': '2 Timothy',
	'56': 'Titus', '57': 'Philemon', '58': 'Hebrews', '59': 'James', '60': '1 Peter',
	'61': '2 Peter', '62': '1 John', '63': '2 John', '64': '3 John', '65': 'Jude', '66': 'Revelation'
}
// }}}
// .......... numChapters {{{
const numChapters = {
	'Genesis': 50, 'Exodus': 40, 'Leviticus': 27, 'Numbers': 36, 'Deuteronomy': 34, 'Joshua': 24,
	'Judges': 21, 'Ruth': 4, '1 Samuel': 31, '2 Samuel': 24, '1 Kings': 22, '2 Kings': 25,
	'1 Chronicles': 29, '2 Chronicles': 36, 'Ezra': 10, 'Nehemiah': 13, 'Esther': 10, 'Job': 42,
	'Psalm': 150, 'Proverbs': 31, 'Ecclesiastes': 12, 'Song of Solomon': 8, 'Isaiah': 66,
	'Jeremiah': 52, 'Lamentations': 5, 'Ezekiel': 48, 'Daniel': 12, 'Hosea': 14, 'Joel': 3,
	'Amos': 9, 'Obadiah': 1, 'Jonah': 4, 'Micah': 7, 'Nahum': 3, 'Habakkuk': 3, 'Zephaniah': 3,
	'Haggai': 2, 'Zechariah': 14, 'Malachi': 4, 'Matthew': 28, 'Mark': 16, 'Luke': 24, 'John': 21,
	'Acts': 28, 'Romans': 16, '1 Corinthians': 16, '2 Corinthians': 13, 'Galatians': 6,
	'Ephesians': 6, 'Philippians': 4, 'Colossians': 4, '1 Thessalonians': 5, '2 Thessalonians': 3,
	'1 Timothy': 6, '2 Timothy': 4, 'Titus': 3, 'Philemon': 1, 'Hebrews': 13, 'James': 5,
	'1 Peter': 5, '2 Peter': 3, '1 John': 5, '2 John': 1, '3 John': 1, 'Jude': 1, 'Revelation': 22
}
// }}}
// .......... verseCount {{{
const verseCount = {
        'Genesis': {1: 31, 2: 25, 3: 24, 4: 26, 5: 32, 6: 22, 7: 24, 8: 22, 9:
            29, 10: 32, 11: 32, 12: 20, 13: 18, 14: 24, 15: 21, 16: 16, 17: 27,
            18: 33, 19: 38, 20: 18, 21: 34, 22: 24, 23: 20, 24: 67, 25: 34, 26:
            35, 27: 46, 28: 22, 29: 35, 30: 43, 31: 55, 32: 32, 33: 20, 34: 31,
            35: 29, 36: 43, 37: 36, 38: 30, 39: 23, 40: 23, 41: 57, 42: 38, 43:
            34, 44: 34, 45: 28, 46: 34, 47: 31, 48: 22, 49: 33, 50: 26},
        'Exodus': {1: 22, 2: 25, 3: 22, 4: 31, 5: 23, 6: 30, 7: 25, 8: 32, 9:
            35, 10: 29, 11: 10, 12: 51, 13: 22, 14: 31, 15: 27, 16: 36, 17: 16,
            18: 27, 19: 25, 20: 26, 21: 36, 22: 31, 23: 33, 24: 18, 25: 40, 26:
            37, 27: 21, 28: 43, 29: 46, 30: 38, 31: 18, 32: 35, 33: 23, 34: 35,
            35: 35, 36: 38, 37: 29, 38: 31, 39: 43, 40: 38},
        'Leviticus': {1: 17, 2: 16, 3: 17, 4: 35, 5: 19, 6: 30, 7: 38, 8: 36, 9:
            24, 10: 20, 11: 47, 12: 8, 13: 59, 14: 57, 15: 33, 16: 34, 17: 16,
            18: 30, 19: 37, 20: 27, 21: 24, 22: 33, 23: 44, 24: 23, 25: 55, 26:
            46, 27: 34}, 
        'Numbers': {1: 54, 2: 34, 3: 51, 4: 49, 5: 31, 6: 27, 7: 89, 8: 26, 9:
            23, 10: 36, 11: 35, 12: 16, 13: 33, 14: 45, 15: 41, 16: 50, 17: 13,
            18: 32, 19: 22, 20: 29, 21: 35, 22: 41, 23: 30, 24: 25, 25: 18, 26:
            65, 27: 23, 28: 31, 29: 40, 30: 16, 31: 54, 32: 42, 33: 56, 34: 29,
            35: 34, 36: 13}, 
        'Deuteronomy': {1: 46, 2: 37, 3: 29, 4: 49, 5: 33, 6: 25, 7: 26, 8: 20,
            9: 29, 10: 22, 11: 32, 12: 32, 13: 18, 14: 29, 15: 23, 16: 22, 17:
            20, 18: 22, 19: 21, 20: 20, 21: 23, 22: 30, 23: 25, 24: 22, 25: 19,
            26: 19, 27: 26, 28: 68, 29: 29, 30: 20, 31: 30, 32: 52, 33: 29, 34:
            12},
        'Joshua': {1: 18, 2: 24, 3: 17, 4: 24, 5: 15, 6: 27, 7: 26, 8: 35, 9:
            27, 10: 43, 11: 23, 12: 24, 13: 33, 14: 15, 15: 63, 16: 10, 17: 18,
            18: 28, 19: 51, 20: 9, 21: 45, 22: 34, 23: 16, 24: 33}, 
        'Judges': {1: 36, 2: 23, 3: 31, 4: 24, 5: 31, 6: 40, 7: 25, 8: 35, 9:
            57, 10: 18, 11: 40, 12: 15, 13: 25, 14: 20, 15: 20, 16: 31, 17: 13,
            18: 31, 19: 30, 20: 48, 21: 25}, 
        'Ruth': {1: 22, 2: 23, 3: 18, 4: 22}, 
        '1 Samuel': {1: 28, 2: 36, 3: 21, 4: 22, 5: 12, 6: 21, 7: 17, 8: 22, 9:
            27, 10: 27, 11: 15, 12: 25, 13: 23, 14: 52, 15: 35, 16: 23, 17: 58,
            18: 30, 19: 24, 20: 42, 21: 15, 22: 23, 23: 29, 24: 22, 25: 44, 26:
            25, 27: 12, 28: 25, 29: 11, 30: 31, 31: 13}, 
        '2 Samuel': {1: 27, 2: 32, 3: 39, 4: 12, 5: 25, 6: 23, 7: 29, 8: 18, 9:
            13, 10: 19, 11: 27, 12: 31, 13: 39, 14: 33, 15: 37, 16: 23, 17: 29,
            18: 33, 19: 43, 20: 26, 21: 22, 22: 51, 23: 39, 24: 25}, 
        '1 Kings': {1: 53, 2: 46, 3: 28, 4: 34, 5: 18, 6: 38, 7: 51, 8: 66, 9:
            28, 10: 29, 11: 43, 12: 33, 13: 34, 14: 31, 15: 34, 16: 34, 17: 24,
            18: 46, 19: 21, 20: 43, 21: 29, 22: 53}, 
        '2 Kings': {1: 18, 2: 25, 3: 27, 4: 44, 5: 27, 6: 33, 7: 20, 8: 29, 9:
            37, 10: 36, 11: 21, 12: 21, 13: 25, 14: 29, 15: 38, 16: 20, 17: 41,
            18: 37, 19: 37, 20: 21, 21: 26, 22: 20, 23: 37, 24: 20, 25: 30}, 
        '1 Chronicles': {1: 54, 2: 55, 3: 24, 4: 43, 5: 26, 6: 81, 7: 40, 8: 40,
            9: 44, 10: 14, 11: 47, 12: 40, 13: 14, 14: 17, 15: 29, 16: 43, 17:
            27, 18: 17, 19: 19, 20: 8, 21: 30, 22: 19, 23: 32, 24: 31, 25: 31,
            26: 32, 27: 34, 28: 21, 29: 30}, 
        '2 Chronicles': {1: 17, 2: 18, 3: 17, 4: 22, 5: 14, 6: 42, 7: 22, 8: 18,
                9: 31, 10: 19, 11: 23, 12: 16, 13: 22, 14: 15, 15: 19, 16: 14,
                17: 19, 18: 34, 19: 11, 20: 37, 21: 20, 22: 12, 23: 21, 24: 27,
                25: 28, 26: 23, 27: 9, 28: 27, 29: 36, 30: 27, 31: 21, 32: 33,
                33: 25, 34: 33, 35: 27, 36: 23},
        'Ezra': {1: 11, 2: 70, 3: 13, 4: 24, 5: 17, 6: 22, 7: 28, 8: 36, 9: 15,
                10: 44},
        'Nehemiah': {1: 11, 2: 20, 3: 32, 4: 23, 5: 19, 6: 19, 7: 73, 8: 18, 9:
                38, 10: 39, 11: 36, 12: 47, 13: 31}, 
        'Esther': {1: 22, 2: 23, 3: 15, 4: 17, 5: 14, 6: 14, 7: 10, 8: 17, 9:
                32, 10: 3},
        'Job': {1: 22, 2: 13, 3: 26, 4: 21, 5: 27, 6: 30, 7: 21, 8: 22, 9: 35,
                10: 22, 11: 20, 12: 25, 13: 28, 14: 22, 15: 35, 16: 22, 17: 16,
                18: 21, 19: 29, 20: 29, 21: 34, 22: 30, 23: 17, 24: 25, 25: 6,
                26: 14, 27: 23, 28: 28, 29: 25, 30: 31, 31: 40, 32: 22, 33: 33,
                34: 37, 35: 16, 36: 33, 37: 24, 38: 41, 39: 30, 40: 24, 41: 34,
                42: 17}, 
        'Psalm': {1: 6, 2: 12, 3: 8, 4: 8, 5: 12, 6: 10, 7: 17, 8: 9, 9: 20, 10:
                18, 11: 7, 12: 8, 13: 6, 14: 7, 15: 5, 16: 11, 17: 15, 18: 50,
                19: 14, 20: 9, 21: 13, 22: 31, 23: 6, 24: 10, 25: 22, 26: 12,
                27: 14, 28: 9, 29: 11, 30: 12, 31: 24, 32: 11, 33: 22, 34: 22,
                35: 28, 36: 12, 37: 40, 38: 22, 39: 13, 40: 17, 41: 13, 42: 11,
                43: 5, 44: 26, 45: 17, 46: 11, 47: 9, 48: 14, 49: 20, 50: 23,
                51: 19, 52: 9, 53: 6, 54: 7, 55: 23, 56: 13, 57: 11, 58: 11, 59:
                17, 60: 12, 61: 8, 62: 12, 63: 11, 64: 10, 65: 13, 66: 20, 67:
                7, 68: 35, 69: 36, 70: 5, 71: 24, 72: 20, 73: 28, 74: 23, 75:
                10, 76: 12, 77: 20, 78: 72, 79: 13, 80: 19, 81: 16, 82: 8, 83:
                18, 84: 12, 85: 13, 86: 17, 87: 7, 88: 18, 89: 52, 90: 17, 91:
                16, 92: 15, 93: 5, 94: 23, 95: 11, 96: 13, 97: 12, 98: 9, 99: 9,
                100: 5, 101: 8, 102: 28, 103: 22, 104: 35, 105: 45, 106: 48,
                107: 43, 108: 13, 109: 31, 110: 7, 111: 10, 112: 10, 113: 9,
                114: 8, 115: 18, 116: 19, 117: 2, 118: 29, 119: 176, 120: 7,
                121: 8, 122: 9, 123: 4, 124: 8, 125: 5, 126: 6, 127: 5, 128: 6,
                129: 8, 130: 8, 131: 3, 132: 18, 133: 3, 134: 3, 135: 21, 136:
                26, 137: 9, 138: 8, 139: 24, 140: 13, 141: 10, 142: 7, 143: 12,
                144: 15, 145: 21, 146: 10, 147: 20, 148: 14, 149: 9, 150: 6}, 
        'Proverbs': {1: 33, 2: 22, 3: 35, 4: 27, 5: 23, 6: 35, 7: 27, 8: 36, 9:
                18, 10: 32, 11: 31, 12: 28, 13: 25, 14: 35, 15: 33, 16: 33, 17:
                28, 18: 24, 19: 29, 20: 30, 21: 31, 22: 29, 23: 35, 24: 34, 25:
                28, 26: 28, 27: 27, 28: 28, 29: 27, 30: 33, 31: 31}, 
        'Ecclesiastes': {1: 18, 2: 26, 3: 22, 4: 16, 5: 20, 6: 12, 7: 29, 8: 17,
                9: 18, 10: 20, 11: 10, 12: 14}, 
        'Song of Solomon': {1: 17, 2: 17, 3: 11, 4: 16, 5: 16, 6: 13, 7: 13, 8:
                14}, 
        'Isaiah': {1: 31, 2: 22, 3: 26, 4: 6, 5: 30, 6: 13, 7: 25, 8: 22, 9: 21,
                10: 34, 11: 16, 12: 6, 13: 22, 14: 32, 15: 9, 16: 14, 17: 14,
                18: 7, 19: 25, 20: 6, 21: 17, 22: 25, 23: 18, 24: 23, 25: 12,
                26: 21, 27: 13, 28: 29, 29: 24, 30: 33, 31: 9, 32: 20, 33: 24,
                34: 17, 35: 10, 36: 22, 37: 38, 38: 22, 39: 8, 40: 31, 41: 29,
                42: 25, 43: 28, 44: 28, 45: 25, 46: 13, 47: 15, 48: 22, 49: 26,
                50: 11, 51: 23, 52: 15, 53: 12, 54: 17, 55: 13, 56: 12, 57: 21,
                58: 14, 59: 21, 60: 22, 61: 11, 62: 12, 63: 19, 64: 12, 65: 25,
                66: 24}, 
        'Jeremiah': {1: 19, 2: 37, 3: 25, 4: 31, 5: 31, 6: 30, 7: 34, 8: 22, 9:
                26, 10: 25, 11: 23, 12: 17, 13: 27, 14: 22, 15: 21, 16: 21, 17:
                27, 18: 23, 19: 15, 20: 18, 21: 14, 22: 30, 23: 40, 24: 10, 25:
                38, 26: 24, 27: 22, 28: 17, 29: 32, 30: 24, 31: 40, 32: 44, 33:
                26, 34: 22, 35: 19, 36: 32, 37: 21, 38: 28, 39: 18, 40: 16, 41:
                18, 42: 22, 43: 13, 44: 30, 45: 5, 46: 28, 47: 7, 48: 47, 49:
                39, 50: 46, 51: 64, 52: 34}, 
        'Lamentations': {1: 22, 2: 22, 3: 66, 4: 22, 5: 22}, 
        'Ezekiel': {1: 28, 2: 10, 3: 27, 4: 17, 5: 17, 6: 14, 7: 27, 8: 18, 9:
                11, 10: 22, 11: 25, 12: 28, 13: 23, 14: 23, 15: 8, 16: 63, 17:
                24, 18: 32, 19: 14, 20: 49, 21: 32, 22: 31, 23: 49, 24: 27, 25:
                17, 26: 21, 27: 36, 28: 26, 29: 21, 30: 26, 31: 18, 32: 32, 33:
                33, 34: 31, 35: 15, 36: 38, 37: 28, 38: 23, 39: 29, 40: 49, 41:
                26, 42: 20, 43: 27, 44: 31, 45: 25, 46: 24, 47: 23, 48: 35}, 
        'Daniel': {1: 21, 2: 49, 3: 30, 4: 37, 5: 31, 6: 28, 7: 28, 8: 27, 9:
                27, 10: 21, 11: 45, 12: 13}, 
        'Hosea': {1: 11, 2: 23, 3: 5, 4: 19, 5: 15, 6: 11, 7: 16, 8: 14, 9: 17,
                10: 15, 11: 12, 12: 14, 13: 16, 14: 9}, 
        'Joel': {1: 20, 2: 32, 3: 21}, 
        'Amos': {1: 15, 2: 16, 3: 15, 4: 13, 5: 27, 6: 14, 7: 17, 8: 14, 9: 15}, 
        'Obadiah': {1: 21}, 
        'Jonah': {1: 17, 2: 10, 3: 10, 4: 11}, 
        'Micah': {1: 16, 2: 13, 3: 12, 4: 13, 5: 15, 6: 16, 7: 20}, 
        'Nahum': {1: 15, 2: 13, 3: 19}, 
        'Habakkuk': {1: 17, 2: 20, 3: 19}, 
        'Zephaniah': {1: 18, 2: 15, 3: 20}, 
        'Haggai': {1: 15, 2: 23}, 
        'Zechariah': {1: 21, 2: 13, 3: 10, 4: 14, 5: 11, 6: 15, 7: 14, 8: 23, 9:
                17, 10: 12, 11: 17, 12: 14, 13: 9, 14: 21}, 
        'Malachi': {1: 14, 2: 17, 3: 18, 4: 6}, 
        'Matthew': {1: 25, 2: 23, 3: 17, 4: 25, 5: 48, 6: 34, 7: 29, 8: 34, 9:
                38, 10: 42, 11: 30, 12: 50, 13: 58, 14: 36, 15: 39, 16: 28, 17:
                27, 18: 35, 19: 30, 20: 34, 21: 46, 22: 46, 23: 39, 24: 51, 25:
                46, 26: 75, 27: 66, 28: 20},
        'Mark': {1: 45, 2: 28, 3: 35, 4: 41, 5: 43, 6: 56, 7: 37, 8: 38, 9: 50,
                10: 52, 11: 33, 12: 44, 13: 37, 14: 72, 15: 47, 16: 20}, 
        'Luke': {1: 80, 2: 52, 3: 38, 4: 44, 5: 39, 6: 49, 7: 50, 8: 56, 9: 62,
                10: 42, 11: 54, 12: 59, 13: 35, 14: 35, 15: 32, 16: 31, 17: 37,
                18: 43, 19: 48, 20: 47, 21: 38, 22: 71, 23: 56, 24: 53}, 
        'John': {1: 51, 2: 25, 3: 36, 4: 54, 5: 47, 6: 71, 7: 53, 8: 59, 9: 41,
                10: 42, 11: 57, 12: 50, 13: 38, 14: 31, 15: 27, 16: 33, 17: 26,
                18: 40, 19: 42, 20: 31, 21: 25}, 
        'Acts': {1: 26, 2: 47, 3: 26, 4: 37, 5: 42, 6: 15, 7: 60, 8: 40, 9: 43,
                10: 48, 11: 30, 12: 25, 13: 52, 14: 28, 15: 41, 16: 40, 17: 34,
                18: 28, 19: 41, 20: 38, 21: 40, 22: 30, 23: 35, 24: 27, 25: 27,
                26: 32, 27: 44, 28: 31}, 
        'Romans': {1: 32, 2: 29, 3: 31, 4: 25, 5: 21, 6: 23, 7: 25, 8: 39, 9:
                33, 10: 21, 11: 36, 12: 21, 13: 14, 14: 23, 15: 33, 16: 27}, 
        '1 Corinthians': {1: 31, 2: 16, 3: 23, 4: 21, 5: 13, 6: 20, 7: 40, 8:
                13, 9: 27, 10: 33, 11: 34, 12: 31, 13: 13, 14: 40, 15: 58, 16:
                24}, 
        '2 Corinthians': {1: 24, 2: 17, 3: 18, 4: 18, 5: 21, 6: 18, 7: 16, 8:
                24, 9: 15, 10: 18, 11: 33, 12: 21, 13: 14}, 
        'Galatians': {1: 24, 2: 21, 3: 29, 4: 31, 5: 26, 6: 18}, 
        'Ephesians': {1: 23, 2: 22, 3: 21, 4: 32, 5: 33, 6: 24}, 
        'Philippians': {1: 30, 2: 30, 3: 21, 4: 23}, 
        'Colossians': {1: 29, 2: 23, 3: 25, 4: 18}, 
        '1 Thessalonians': {1: 10, 2: 20, 3: 13, 4: 18, 5: 28}, 
        '2 Thessalonians': {1: 12, 2: 17, 3: 18}, 
        '1 Timothy': {1: 20, 2: 15, 3: 16, 4: 16, 5: 25, 6: 21}, 
        '2 Timothy': {1: 18, 2: 26, 3: 17, 4: 22}, 
        'Titus': {1: 16, 2: 15, 3: 15}, 
        'Philemon': {1: 25}, 
        'Hebrews': {1: 14, 2: 18, 3: 19, 4: 16, 5: 14, 6: 20, 7: 28, 8: 13, 9:
                28, 10: 39, 11: 40, 12: 29, 13: 25}, 
        'James': {1: 27, 2: 26, 3: 18, 4: 17, 5: 20}, 
        '1 Peter': {1: 25, 2: 25, 3: 22, 4: 19, 5: 14}, 
        '2 Peter': {1: 21, 2: 22, 3: 18}, 
        '1 John': {1: 10, 2: 29, 3: 24, 4: 21, 5: 21}, 
        '2 John': {1: 13}, 
        '3 John': {1: 14}, 
        'Jude': {1: 25}, 
        'Revelation': {1: 20, 2: 29, 3: 22, 4: 11, 5: 14, 6: 17, 7: 17, 8: 13,
                9: 21, 10: 11, 11: 19, 12: 17, 13: 18, 14: 20, 15: 8, 16: 21,
                17: 18, 18: 24, 19: 21, 20: 15, 21: 27, 22: 21}}
// }}}

// .......... URL REDIRECT {{{

let searchType = document.getElementById("search-type");
if (searchType) {
	searchType.addEventListener('click', (event) => {
		url = document.URL;
		if (url.includes("keyword")) {
			window.location.href = url.replace("keyword", "bible");
		} else if (url.includes("verse_range")) {
			window.location.href = url.replace("verse_range", "bible");
		} else if (url.includes("_verse")) {
			window.location.href = url.replace("verse", "bible");
		} else {
			window.location.href = url.replace("chapters", "bible");	
		}
	});
}

function urlRedirect() {
	if (document.URL.includes("localhost")) {
		if (document.URL.includes("amp")) {
			window.location.href="http://localhost:8000/bible_app/amp_bible/";
		} else if (document.URL.includes("esv")) {
			window.location.href="http://localhost:8000/bible_app/esv_bible/";
		} else if (document.URL.includes("kjv")) {
			window.location.href="http://localhost:8000/bible_app/kjv_bible/";
		} else if (document.URL.includes("nkjv")) {
			window.location.href="http://localhost:8000/bible_app/nkjv_bible/";
		} else if (document.URL.includes("nas")) {
			window.location.href="http://localhost:8000/bible_app/nas_bible/";
		} else {
			window.location.href="http://localhost:8000/bible_app/niv_bible/";
		}
	} else {
		if (document.URL.includes('amp')) {
			window.location.href="https://pastorbobsbibles.app/bible_app/amp_bible/";
		} else if (document.URL.includes('esv')) {
			window.location.href="https://pastorbobsbibles.app/bible_app/esv_bible/";
		} else if (document.URL.includes('kjv')) {
			window.location.href="https://pastorbobsbibles.app/bible_app/kjv_bible/";
		} else if (document.URL.includes('nkjv')) {
			window.location.href="https://pastorbobsbibles.app/bible_app/nkjv_bible/";
		} else if (document.URL.includes('nas')) {
			window.location.href="https://pastorbobsbibles.app/bible_app/nas_bible/";
		} else {
			window.location.href="https://pastorbobsbibles.app/bible_app/niv_bible/";
		}
	}
}		

// }}}

// .......... LOCAL STORAGE - ZOOM {{{

let zoomInIcon = document.getElementById("zoom-in");
let zoomOutIcon = document.getElementById("zoom-out");

zoomInIcon.addEventListener('click', (event) => {
	zoomIn();
});	

zoomOutIcon.addEventListener('click', (event) => {
	zoomOut();
});	

if (localStorage.getItem("fontSize") == null) {
		localStorage.setItem("fontSize", "16px");
		body.style.fontSize = localStorage.getItem("fontSize");
} else {
	let fontSize = localStorage.getItem("fontSize");
	body.style.fontSize = fontSize;
}

function zoomOut() {
	let currentFontSize = localStorage.getItem("fontSize");
	let parsedFontSize = parseInt(currentFontSize) - 2;
	let newFontSize = `${parsedFontSize}px`;
	localStorage.removeItem("fontSize");
	localStorage.setItem("fontSize", newFontSize);
	body.style.fontSize = newFontSize;	
}

function zoomIn() {
	let currentFontSize = localStorage.getItem("fontSize");
	let parsedFontSize = parseInt(currentFontSize) + 2;
	let newFontSize = `${parsedFontSize}px`;
	localStorage.removeItem("fontSize");
	localStorage.setItem("fontSize", newFontSize);
	body.style.fontSize = newFontSize;	
}

// }}}

// .......... KEYWORD SCRIPT {{{
// .......... onLoad {{{
if (document.URL.includes("keyword")) {
	let keyword = document.getElementById("keyword");
	let storageKeyword = localStorage.getItem("keyword");
	if (storageKeyword != null) {
		keyword.value = storageKeyword;
	}		
	let keywordForm = document.getElementById("keyword-form");
	keywordForm.addEventListener('submit', function (event) {
		event.preventDefault();
		if (storageKeyword != null) {
			localStorage.removeItem("keyword");
			localStorage.setItem("keyword", keyword.value);			
		} else {
			localStorage.setItem("keyword", keyword.value);
		}
		keywordForm.submit();		
	});		
}
// }}}
// }}}

if (document.title.includes("Chapter")) {
// .......... onload {{{

	let rightChevron = document.getElementById("chapter-right-chevron");
	rightChevron.addEventListener('mouseover', (event) => {
		rightChevron.firstElementChild.style.opacity = "100%";
	});
	rightChevron.addEventListener('mouseout', (event) => {
		rightChevron.firstElementChild.style.opacity = "10%";
	});
	rightChevron.addEventListener('click', (event) => {
		showNextChapter();
	});	
	let leftChevron = document.getElementById("chapter-left-chevron");
	leftChevron.addEventListener('mouseover', (event) => {
		leftChevron.firstElementChild.style.opacity = "100%";
	});		
	leftChevron.addEventListener('mouseout', (event) => {
		leftChevron.firstElementChild.style.opacity = "10%";
	});
	leftChevron.addEventListener('click', (event) => {
		showPreviousChapter();
	});		

// }}}	
// .......... bookSelect.addEventListener {{{

	bookSelect.addEventListener('change', (event) => {
		let bookId = bookSelect.value;
		let bookName = bookNames[bookSelect.value];  // bookNames is in BIBLE DATA
		let numberOfChapters = numChapters[bookName];  // numChapters is in BIBLE DATA 
		removeAllChildNodes(chapterSelect);	 // Number of chapters change when book changes
		for (let i = 1; i < numberOfChapters + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
		// Set chapter in localStorage
		if (localStorage.getItem("chapterChapter" != null)) {
			localStorage.removeItem("chapterChapter");
		}
		localStorage.setItem("chapterChapter", chapterSelect.value);
		// Set number of chapters in localStorage
		if (localStorage.getItem("chapterNumberOfChapters" != null)) {
			localStorage.removeItem("chapterNumberOfChapters");
		}
		localStorage.setItem("chapterNumberOfChapters", numberOfChapters);
		// Set book in localStorage
		if (localStorage.getItem("chapterBook" != null)) {
			localStorage.removeItem("chapterBook");
		}
		localStorage.setItem("chapterBook", bookSelect.value);
	});

//	}}}
// .......... chapterSelect.addEventListener {{{
	
	chapterSelect.addEventListener('change', (event) => {
		// Set chapter in localStorage
		if (localStorage.getItem("chapterChapter" != null)) {
			localStorage.removeItem("chapterChapter");
		}
		localStorage.setItem("chapterChapter", chapterSelect.value);		
	});
	let chapterBookStorage = localStorage.getItem("chapterBook");
	let chapterChapterStorage = localStorage.getItem("chapterChapter");
	let numberOfChapters = localStorage.getItem("chapterNumberOfChapters");
	if (chapterBookStorage != null) {
		bookSelect.value = chapterBookStorage;
	}
	if (numberOfChapters != null) {
		removeAllChildNodes(chapterSelect);
		for (let i = 1; i < Number(numberOfChapters) + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
	}
	if (chapterChapterStorage != null) {
		chapterSelect.value = chapterChapterStorage;
	}
	if (document.getElementById("results") == null) {
		document.getElementById("chapter-form").submit();
	}
}	

// }}}
// .......... showNextChapter {{{

function showNextChapter() {
	let bookId = bookSelect.value;
	let bookName = bookNames[bookId];
	let numberOfChapters = numChapters[bookName];
	let chapter = chapterSelect.value;
	// Store variables in localStorage
	stock("chapterBook", bookId);
	stock("chapterNumberOfChapters", numberOfChapters);
	stock("chapterChapter", chapter);
	if (Number(chapter) < numberOfChapters) {
		chapterSelect.value = Number(chapter) + 1;
		stock("chapterChapter", chapterSelect.value);
	} else if (chapter == numberOfChapters) {
		if (Number(bookId) < 66) {
			bookSelect.value = Number(bookId) + 1;
			stock("chapterBook", bookSelect.value);
			let bookName = bookNames[bookSelect.value]; 
			let numberOfChapters = numChapters[bookName];
			removeAllChildNodes(chapterSelect);
			for (let i = 1; i < Number(numberOfChapters) + 1; i++) {
				let newOption = new Option(i, i);
				chapterSelect.add(newOption, undefined);
			}
			stock("chapterChapter", chapterSelect.value);
			stock("chapterNumberOfChapters", numberOfChapters);
		}	
	}
	let form = document.getElementById("chapter-form");
	// form.submit();
}

// }}}
// .......... showPreviousChapter {{{

function showPreviousChapter() {
	let bookId = bookSelect.value;
	let bookName = bookNames[bookId];
	let numberOfChapters = numChapters[bookName];
	let chapter = chapterSelect.value;
	// Store variables in localStorage
	stock("chapterBook", bookId);
	stock("chapterNumberOfChapters", numberOfChapters);
	stock("chapterChapter", chapter);
	if (Number(chapter) > 1) {
		chapterSelect.value = Number(chapter) - 1;
		stock("chapterChapter", chapterSelect.value);
	} else if (chapter == 1) {
		if (bookId > 1) {
			bookSelect.value = bookId - 1;
			stock("chapterBook", bookSelect.value);
			let bookName = bookNames[bookSelect.value]; 
			let numberOfChapters = numChapters[bookName];
			removeAllChildNodes(chapterSelect);
			for (let i = 1; i < Number(numberOfChapters) + 1; i++) {
				let newOption = new Option(i, i);
				chapterSelect.add(newOption, undefined);
			}
			chapterSelect.value = numberOfChapters;
			stock("chapterChapter", chapterSelect.value);
			stock("chapterNumberOfChapters", numberOfChapters);
		}	
	}
	let form = document.getElementById("chapter-form");
	form.submit();
}

// }}}

if (document.title.includes("Verse Search")) {
	// .......... onload {{{
		
	let rightChevron = document.getElementById("verse-right-chevron");
	rightChevron.addEventListener('mouseover', (event) => {
		rightChevron.firstElementChild.style.opacity = "100%";
	});
	rightChevron.addEventListener('mouseout', (event) => {
		rightChevron.firstElementChild.style.opacity = "10%";
	});
	rightChevron.addEventListener('click', (event) => {
		showNextVerse();
	});	
	let leftChevron = document.getElementById("verse-left-chevron");
	leftChevron.addEventListener('mouseover', (event) => {
		leftChevron.firstElementChild.style.opacity = "100%";
	});		
	leftChevron.addEventListener('mouseout', (event) => {
		leftChevron.firstElementChild.style.opacity = "10%";
	});
	leftChevron.addEventListener('click', (event) => {
		showPreviousVerse();
	});		

	if (localStorage.getItem("verseBook") != null) {
		bookSelect.value = localStorage.getItem("verseBook");
	}
	if (localStorage.getItem("verseChapter") != null) {
		let bookName = bookNames[bookSelect.value];
		let numberOfChapters = numChapters[bookName];	
		removeAllChildNodes(chapterSelect);
		for (let i = 1; i < numberOfChapters + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
		chapterSelect.value = localStorage.getItem("verseChapter");
	}
	if (localStorage.getItem("verseVerse") != null) {
		let bookName = bookNames[bookSelect.value];
		let numberOfVerses = verseCount[bookName][chapterSelect.value];	
		removeAllChildNodes(verseSelect);
		for (let i = 1; i < numberOfVerses + 1; i++) {
			let newOption = new Option(i, i);
			verseSelect.add(newOption, undefined);
		}
		verseSelect.value = localStorage.getItem("verseVerse");
	}
	
// }}}
// .......... verseForm.addEventListener {{{

	var verseForm = document.getElementById("verse-form");
	verseForm.addEventListener('submit', function (event) {
		event.preventDefault();
		stock("verseBook", bookSelect.value);
		stock("verseChapter", chapterSelect.value);
		stock("verseVerse", verseSelect.value);
		verseForm.submit();
	});		
}

// }}}
// .......... bookSelect.addEventListener {{{

if (document.title.includes("Verse Search")) {
	bookSelect.addEventListener('change', (event) => {
		console.log("Book changed");
		let bookName = bookNames[bookSelect.value]
		
		// Reset chapter to one and set localStorage
		let chapter = chapterSelect.value;
		removeAllChildNodes(chapterSelect);
		let numberOfChapters = numChapters[bookName];
		for (let i = 1; i < numberOfChapters + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
		chapterSelect.value = 1;
		if (localStorage.getItem("verseChapter") != null) {
			localStorage.removeItem("verseChapter");
		}
		localStorage.setItem("verseChapter", String(chapterSelect.value));
		if (localStorage.getItem("verseNumberOfChapters") != null) {
			localStorage.removeItem("verseNumberOfChapters");
		}
		localStorage.setItem("verseNumberOfChapters", String(numberOfChapters));	

		// Reset verse to one and set localStorage
		let verse = verseSelect.value; 
		removeAllChildNodes(verseSelect);
		let numberOfVerses = verseCount[bookName][chapter];
		for (let i = 1; i < numberOfVerses + 1; i++) {
			let newOption = new Option(i, i);
			verseSelect.add(newOption, undefined);
		}
		if (localStorage.getItem("verseNumberOfVerses") != null) {
			localStorage.removeItem("verseNumberOfVerses");
		}
		localStorage.setItem("verseNumberOfVerses", String(numberOfVerses));
	});		

// }}}
// .......... chapterSelect.addEventListener {{{

	chapterSelect.addEventListener('change', (event) => {
		let bookName = bookNames[bookSelect.value]
		let chapter = chapterSelect.value;
		if (localStorage.getItem("verseChapter") != null) {
			localStorage.removeItem("verseChapter");
		}
		localStorage.setItem("verseChapter", chapter);
		let numberOfVerses = verseCount[bookName][chapter];
		if (verseSelect != null) {
			removeAllChildNodes(verseSelect);
			for (let i = 1; i < numberOfVerses + 1; i++) {
				let newOption = new Option(i, i);
				verseSelect.add(newOption, undefined);
			}
		}
		if (localStorage.getItem("verseNumberOfVerses") != null) {
			localStorage.removeItem("verseNumberOfVerses");
		}
		localStorage.setItem("verseNumberOfVerses", String(numberOfVerses));
	});		

// }}}
// .......... verseSelect.addEventListener {{{
	verseSelect.addEventListener('change', (event) => {
		if (localStorage.getItem("verseVerse") != null) {
			localStorage.removeItem("verseVerse");
		}
		localStorage.setItem("verseVerse", verseSelect.value);
	});		
}

// }}}
// .......... showNextVerse {{{

function showNextVerse() {
	let bookId = bookSelect.value;
	let bookName = bookNames[bookId];
	let numberOfChapters = Number(numChapters[bookName]);
	let chapter = chapterSelect.value;
	let verse = verseSelect.value;
	let numberOfVerses = verseCount[bookName][chapter];
	if (verse < numberOfVerses) {
		if (chapter < numberOfChapters) {
			if (bookId < 66) {
				verseSelect.value = Number(verse) + 1;
				stock("verseVerse", verseSelect.value);			
			} else if (bookId == 66) {
				verseSelect.value = Number(verse) + 1;
				stock("verseVerse", verseSelect.value);
			}
		} else if (chapter == numberOfChapters) {
			if (bookId < 66) {
				verseSelect.value = Number(verse) + 1;
				stock("verseVerse", verseSelect.value);
			}
		}
	} else if (verse == numberOfVerses) {
		if (chapter < numberOfChapters) {
			if (bookId < 66) {
				chapterSelect.value = Number(chapterSelect.value) + 1;
				localStorage.removeItem("verseChapter");
				localStorage.setItem("verseChapter", chapterSelect.value);
				nextVerseSet();			
			}
		} else if (chapter == numberOfChapters) {
			if (bookId < 66) {
				console.log("correct");
				bookSelect.value = Number(bookId) + 1;
				stock("verseBook", bookSelect.value);
				nextChapterSet();
				nextVerseSet();			
			}
		}
	} 
	function nextChapterSet() {
		let bookName = bookNames[bookSelect.value]; 
		let numberOfChapters = numChapters[bookName];
		removeAllChildNodes(chapterSelect);
		for (let i = 1; i < Number(numberOfChapters) + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
		chapterSelect.value = 1;
		stock("verseChapter", chapterSelect.value);
	}
	function nextVerseSet() {
		let numberOfVerses = verseCount[bookName][chapterSelect.value];
		removeAllChildNodes(verseSelect);
		for (let i = 1; i < Number(numberOfVerses) + 1; i++) {
			let newOption = new Option(i, i);
			verseSelect.add(newOption, undefined);
		}
		verseSelect.value = 1;
		stock("verseVerse", verseSelect.value);
	}
	function nextBook() {
		bookSelect.value = bookId + 1;
		stock("verseBook", bookSelect.value);
	}
	let form = document.getElementById("verse-form");
	form.submit();
}

// }}}
// .......... showPreviousVerse {{{

function showPreviousVerse() {
	let bookId = bookSelect.value;
	let bookName = bookNames[bookId];
	let numberOfChapters = Number(numChapters[bookName]);
	let chapter = chapterSelect.value;
	let verse = verseSelect.value;
	if (verse > 1) {
		if (chapter > 1) {
			if (bookId > 1) {
				verseSelect.value = Number(verse) - 1;
				stock("verseVerse", verseSelect.value);			
			} else if (bookId == 1) {
				verseSelect.value = Number(verseSelect.value) -1;
				stock("verseVerse", verseSelect.value);			
			}
		} else if (chapter == 1) {
			if (bookId > 1) {
				verseSelect.value = Number(verse) - 1;
				stock("verseVerse", verseSelect.value);			
			} else if (bookId == 1) {
				verseSelect.value = Number(verseSelect.value) - 1;
				stock("verseVerse", verseSelect.value);			
			}
		}
	} else if (verse == 1) {
		if (chapter > 1) {
			if (bookId > 1) {
				chapterSelect.value = Number(chapterSelect.value) - 1;
				stock("verseChapter", chapterSelect.value);
				let numberOfVerses = verseCount[bookName][chapterSelect.value];
				if (verseSelect != null) {
					removeAllChildNodes(verseSelect);
					for (let i = 1; i < numberOfVerses + 1; i++) {
						let newOption = new Option(i, i);
						verseSelect.add(newOption, undefined);
					}
				}
				stock("verseNumberOfVerses", numberOfVerses);
				verseSelect.value = numberOfVerses;
				stock("verseVerse", verseSelect.value);		
			} else if (bookId == 1) {
				console.log("correct");
				chapterSelect.value = Number(chapterSelect.value) - 1;
				stock("verseChapter", chapterSelect.value);
				let numberOfVerses = verseCount[bookName][chapterSelect.value];
				if (verseSelect != null) {
					removeAllChildNodes(verseSelect);
					for (let i = 1; i < numberOfVerses + 1; i++) {
						let newOption = new Option(i, i);
						verseSelect.add(newOption, undefined);
					}
				}
				stock("verseNumberOfVerses", numberOfVerses);
				verseSelect.value = numberOfVerses;
				stock("verseVerse", verseSelect.value);
			}


		} else if (chapter == 1) {
			if (bookId > 1) {
				console.log("correct");
				console.log("correct");
				bookSelect.value = Number(bookSelect.value) - 1;
				stock("verseBook", bookSelect.value);				
				bookId = bookSelect.value;
				bookName = bookNames[bookId];
				numberOfChapters = numChapters[bookName];
				removeAllChildNodes(chapterSelect);
				for (let i = 1; i < numberOfChapters + 1; i++) {
					let newOption = new Option(i, i);
					chapterSelect.add(newOption, undefined);
				}
				chapterSelect.value = numberOfChapters;
				stock("verseChapter", chapterSelect.value);
				let numberOfVerses = verseCount[bookName][chapterSelect.value];
				console.log(numberOfVerses);
				if (verseSelect != null) {
					removeAllChildNodes(verseSelect);
					for (let i = 1; i < numberOfVerses + 1; i++) {
						let newOption = new Option(i, i);
						verseSelect.add(newOption, undefined);
					}
				}
				verseSelect.value = numberOfVerses;
				stock("verseVerse", numberOfVerses);
				stock("verseNumberOfVerses", numberOfVerses);
			}					
		}	
	}
	let verseForm = document.getElementById("verse-form");
	verseForm.submit();
}

// }}}
// .......... misc {{{

if (document.title.includes('Verse Search') || document.title.includes("Verse Range")) {
	let span = document.createElement("span");
	chapterSelect.after(span);
	span.innerText = ":";
	span.style.fontSize = '3em';
}

// }}}

if (document.title.includes("Verse Range")) {
	// .......... format form {{{
	
	let span = document.createElement("span");
	verseGteSelect.after(span);
	span.innerText = "-";
	span.style.fontSize = '3em';

	
	// }}}
   // .......... onload {{{
	let numVerses = localStorage.getItem("verseRangeNumberOfVerses");
	if (numVerses) {
		removeAllChildNodes(verseGteSelect);
		removeAllChildNodes(verseLteSelect);
		for (let i = 1; i < Number(numVerses) + 1; i++) {
			let newOption = new Option(i, i);
			verseGteSelect.add(newOption, undefined);
		}
		for (let i = 1; i < Number(numVerses) + 1; i++) {
			let newOption = new Option(i, i);
			verseLteSelect.add(newOption, undefined);
		}
		let verseGte = localStorage.getItem("verseRangeVerseGte");
		let verseLte = localStorage.getItem("verseRangeVerseLte");
		verseGteSelect.value = verseGte;
		verseLteSelect.value = verseLte;
		stock("verseRangeVerseGte", verseGteSelect.value);
		stock("verseRangeVerseLte", verseLteSelect.value);
	}

	setSelect("verseRangeBook", bookSelect);
	setSelect("verseRangeChapter", chapterSelect);
	setSelect("verseRangeVerseGte", verseGteSelect);
	setSelect("verseRangeVerseLte", verseLteSelect);

	let verseRangeForm = document.getElementById("verse-form");
	if (document.getElementById("results") == null) {
		verseRangeForm.submit();
	}

	// }}}
	// .......... verseRangeForm.addEventListener {{{

	verseRangeForm.addEventListener('submit', function (event) {
		event.preventDefault();
		stock("verseRangeBook", bookSelect.value);
		stock("verseRangeChapter", chapterSelect.value);
		stock("verseRangeVerseGte", verseGteSelect.value);
		stock("verseRangeVerseLte", verseLteSelect.value);
		console.log("blah");
		verseRangeForm.submit();
	});

	// }}}	
	// .......... bookSelect.addEventListener {{{
	
	bookSelect.addEventListener('change', (event) => {
		let bookName = bookNames[bookSelect.value];
		let verseGte = verseGteSelect.value; 
		let verseLte = verseLteSelect.value;
		let numberOfChapters = numChapters[bookName];
		removeAllChildNodes(chapterSelect);
		removeAllChildNodes(verseGteSelect);
		removeAllChildNodes(verseLteSelect);		
		for (let i = 1; i < numberOfChapters + 1; i++) {
			let newOption = new Option(i, i);
			chapterSelect.add(newOption, undefined);
		}
		let count = verseCount[bookName][1];
		for (let i = 1; i < count + 1; i++) {
			let newOption = new Option(i, i);
			verseGteSelect.add(newOption, undefined);
		}
		for (let i = 1; i < count + 1; i++) {
			let newOption = new Option(i, i);
			verseLteSelect.add(newOption, undefined);
		}
		chapterSelect.value = 1;
		verseGteSelect.value = 1;
		verseLteSelect.value = 1;
		stock("verseRangeBook", bookSelect.value);
		stock("verseRangeChapter", chapterSelect.value);
		stock("verseRangeVerseGte", verseGteSelect.value);
		stock("verseRangeVerseLte", verseLteSelect.value);
	});	

	// }}}
	// .......... chapterSelect.addEventListener {{{

	chapterSelect.addEventListener('change', (event) => {
		let book = bookNames[bookSelect.value];
		let chapter = chapterSelect.value;
		removeAllChildNodes(verseGteSelect);
		removeAllChildNodes(verseLteSelect);
		let count = verseCount[book][chapter];
		for (let i = 1; i < count + 1; i++) {
			let newOption = new Option(i, i);
			verseGteSelect.add(newOption, undefined);
		}
		for (let i = 1; i < count + 1; i++) {
			let newOption = new Option(i, i);
			verseLteSelect.add(newOption, undefined);
		}
		stock("verseRangeChapter", chapterSelect.value);
		stock("verseRangeVerseGte", verseGteSelect.value);
		stock("verseRangeVerseLte", verseLteSelect.value);
	});		

	// }}}
	// .......... verseGteSelect.addEventListener {{{
	
	verseGteSelect.addEventListener('change', (event) => {
		stock("verseRangeVerseGte", verseGteSelect.value);
	});		

	// }}}
	//	// .......... verseLteSelect.addEventListener {{{
	
	verseLteSelect.addEventListener('change', (event) => {
		stock("verseRangeVerseLte", verseLteSelect.value);
	});		

	// }}}
	// .......... plusRight events {{{ 
	
	let plusRight = document.getElementById("plus-right");
	plusRight.addEventListener('mouseover', (event) => {
		mouseOver(div=plusRight);
	});
	plusRight.addEventListener('mouseout', (event) => {
		mouseOut(div=plusRight);
	});
	plusRight.addEventListener('mousedown', (event) => {
		mouseDown(div=plusRight);
	});	
	plusRight.addEventListener('mouseup', (event) => {
		mouseUp(div=plusRight);
	});	
	plusRight.addEventListener('click', (event) => {
		addRemoveVerse(arg="addToEnd");
	});		

	// }}}
	// .......... minusRight events {{{ 
	
	let minusRight = document.getElementById("minus-right");
	minusRight.addEventListener('mouseover', (event) => {
		mouseOver(div=minusRight);
	});
	minusRight.addEventListener('mouseout', (event) => {
		mouseOut(div=minusRight);
	});
	minusRight.addEventListener('mousedown', (event) => {
		mouseDown(div=minusRight);
	});	
	minusRight.addEventListener('mouseup', (event) => {
		mouseUp(div=minusRight);
	});		
	minusRight.addEventListener('click', (event) => {
		addRemoveVerse(arg="removeFromEnd");
	});		

	// }}}
	// .......... plusLeft events {{{
	
	let plusLeft = document.getElementById("plus-left");
	plusLeft.addEventListener('mouseover', (event) => {
		mouseOver(div=plusLeft);
	});
	plusLeft.addEventListener('mouseout', (event) => {
		mouseOut(div=plusLeft);
	});
	plusLeft.addEventListener('mousedown', (event) => {
		mouseDown(div=plusLeft);
	});	
	plusLeft.addEventListener('mouseup', (event) => {
		mouseUp(div=plusLeft);
	});		
	plusLeft.addEventListener('click', (event) => {
		addRemoveVerse(arg="addToStart");
	});		

	// }}}
	// .......... minusLeft events {{{
	
	let minusLeft = document.getElementById("minus-left");
	minusLeft.addEventListener('mouseover', (event) => {
		mouseOver(div=minusLeft);
	});
	minusLeft.addEventListener('mouseout', (event) => {
		mouseOut(div=minusLeft);
	});
	minusLeft.addEventListener('mousedown', (event) => {
		mouseDown(div=minusLeft);
	});	
	minusLeft.addEventListener('mouseup', (event) => {
		mouseUp(div=minusLeft);
	});		
	minusLeft.addEventListener('click', (event) => {
		addRemoveVerse(arg="removeFromStart");
	});		

	// }}}
	// .......... event functions {{{
	
	function addRemoveVerse(arg) {
		let bookId = bookSelect.value;
		let bookName = bookNames[bookId];
		let chapter = chapterSelect.value;
		let numberOfVerses = verseCount[bookName][chapter];
		let	lastVerse = verseLteSelect.value;
		let firstVerse = verseGteSelect.value;


		if (arg == "addToEnd") {
			let option = Number(lastVerse);
			if (option < numberOfVerses) {
				if (option >= Number(firstVerse)) {
					let newOption = option + 1;
					verseLteSelect.value = newOption;
					stock("verseRangeVerseLte", String(newOption));				
				}
			}
		}


		if (arg == "removeFromEnd") {
			let option = Number(lastVerse);
			if (option > 1 && option > Number(firstVerse)) {
				let newOption = option - 1;
				verseLteSelect.value = newOption;
				stock("verseRangeVerseLte", String(newOption));
			}
		}

		if (arg == "addToStart") {
			let option = Number(firstVerse);
			if (option < Number(lastVerse)) {
				let newOption = option + 1;
				verseGteSelect.value = newOption;
				stock("verseRangeVerseGte", String(newOption));
			}
		}
		if (arg == "removeFromStart") {
			let option = Number(firstVerse);
			if (option > 1) {
				let newOption = option - 1;
				verseGteSelect.value = newOption;
				stock("verseRangeVerseGte", String(newOption));
			}
		}
		document.getElementById("verse-form").submit();
	}

	function mouseOver(div) {
		div.firstElementChild.style.opacity = "40%";
		div.style.background = "var(--bg-main-md-dk)";
	}		
	function mouseOut(div) {
		div.firstElementChild.style.opacity = "10%";
		div.style.background = "inherit";
	}
	function mouseDown(div) {
		div.style.background = "var(--bg-main-lt)";
		div.firstElementChild.style.opacity = "100%";	
	}
	function mouseUp(div) {
		div.firstElementChild.style.opacity = "40%";
		div.style.background = "var(--bg-main-md-dk)";
	}
}

// }}}
// .......... Verse range chevrons {{{

if (document.URL.includes("https") && document.URL.includes("keyword")) {
	var dropDownDownChevron = "https://www.pastorbobsbibles.app/static/icons/down-chevron.png";
	var dropDownRightChevron = "https://www.pastorbobsbibles.app/static/icons/right-chevron.png";
} else {
	var dropDownDownChevron = "http://localhost:8000/static/icons/down-chevron.png";
	var dropDownRightChevron = "http://localhost:8000/static/icons/right-chevron.png";
}	

// }}}

// .......... COPY VERSE/HTML
// .......... Variables {{{

const htmlResults = document.getElementById("html-results");
const copiedTextAlert = document.getElementById("copied-text-alert");
const textResults = document.getElementById("results");
const copiedHtmlAlert = document.getElementById("copied-html-alert");

// }}}
// .......... copyKeywordVerse() {{{

function copyKeywordVerse(id=id) {
	if (document.URL.includes("keyword")) {
		let div = document.getElementById(id);
		let copySpan = div.nextElementSibling.nextElementSibling.nextElementSibling;
		let idNum = id.slice(15);
		let textVerse = document.getElementById("text-verse-" + idNum); 
		if (textVerse.style.display == "block") {
			var heading = div.previousElementSibling.previousElementSibling.innerText;
			var verse = textVerse.innerText;					
			var text = heading + "\n" + verse;
			navigator.clipboard.writeText(text);
			copyAlert(copySpan=copySpan);
		} else {
			var pOne = document.getElementById("p-one-" + idNum).innerText;
			var	pTwo = document.getElementById("p-two-" + idNum).innerText;
			var pThree = document.getElementById("p-three-" + idNum).innerText;
			var pFour = document.getElementById("p-four-" + idNum).innerText;
			let text = pOne + "\n" + pTwo + "\n" + pThree + "\n" + pFour;
			navigator.clipboard.writeText(text);
			copyAlert(copySpan=copySpan);
		}	
	} 
}

// }}}
// .......... copyVerse() {{{

function copyVerse(id) {
	let toggleResultsIcon = document.getElementById("toggle-results-icon");
	if (toggleResultsIcon.src.includes("html")) {
		var heading = document.getElementById("text-heading").innerText;
		var verse = document.getElementById("text-verse").innerText;	
		var text = heading + "\n" + verse;
	} else {
		var pOne = document.getElementById("p-one").innerText;
		var pTwo = document.getElementById("p-two").innerText;
		var pThree = document.getElementById("p-three").innerText;
		var pFour = document.getElementById("p-four").innerText;
		var text = pOne + "\n" + pTwo + "\n" + pThree + "\n" + pFour;
	}		
	let copySpan = document.getElementById("copied-text-alert");
	navigator.clipboard.writeText(text);
	copyAlert(copySpan=copySpan);
}

// }}}
// .......... copyalert() {{{

function copyAlert(copySpan=copySpan) {
	copySpan.style.display = "inline-block";
	let hideSpan = setTimeout(hideCopySpan, 1000);
	if (document.URL.includes("keyword")) {
		copySpan.style.display = "inline-block";
	} else if (document.URL.includes("chapters")) {
		copySpan.style.display = "inline-block";
	} else {
		copiedTextAlert.style.display = "inline-block";
		if (copiedHtmlAlert != null) {
			copiedHtmlAlert.style.display = "inline-block";
		}
	}		
	hideSpan;
	function hideCopySpan() {
		copySpan.style.display = "none";
	}			
}

// }}}
// .......... hideAlert() {{{

function hideAlert() {
	copiedTextAlert.style.display = "none";
	if (copiedHtmlAlert != null) {
		copiedHtmlAlert.style.display = "none";
	}		
}

// }}}
// .......... showIcons() {{{

function showIcons(id=id) {
	let div = document.getElementById(id);
	let idNum = id.slice(10);
	if (document.URL.includes("keyword")) {
		if (document.getElementById("verse-icon-" + idNum).src.includes("html")) {
			document.getElementById("text-verse-" + idNum).style.display = "block";
		}	
		var iconOne = div.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
		var iconTwo = iconOne.nextElementSibling;
		var iconThree = iconTwo.nextElementSibling;
	} else {
		var iconOne = document.getElementById("copy-icon");
		var iconTwo = document.getElementById("show-html");
	}		
	iconOne.style.marginLeft = "auto";
	iconOne.style.display = "inline-block";	
	iconTwo.style.display = "inline-block";
	if (iconThree) {
		iconThree.style.display = "inline-block";
	}
}	

// }}}
// .......... hideIcons() {{{

function hideIcons(id=id) {
	let div = document.getElementById(id);
	if (document.URL.includes("keyword")) {
		var iconOne = div.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
		var iconTwo = iconOne.nextElementSibling;
		var iconThree = iconTwo.nextElementSibling;
		iconThree.style.display = "none";
	} else {
		var iconOne = document.getElementById("copy-icon");
		var iconTwo = document.getElementById("show-html");
	}		
	iconOne.style.marginLeft = "auto";
	iconOne.style.display = "none";	
	iconTwo.style.display = "none";
}

// }}}
// .......... showHtml() {{{

function showHtml(id=id) {
	let icon = document.getElementById(id).firstElementChild;
	if (document.URL.includes("keyword")) { 
		let idNum = id.slice(10);
		let textVerse = document.getElementById("text-verse-" + idNum);
		if (icon.src.includes("html")) {
			document.getElementById("text-heading-" + idNum).style.display = "none";
			document.getElementById("text-verse-" + idNum).style.display = "none";
			document.getElementById("p-one-" + idNum).style.display = "block";
			let htmlVerse = document.getElementById("html-" +  idNum);
			htmlVerse.style.display = "block";
			htmlVerse.style.paddingBottom = "2em";
			icon.src = icon.src.replace("html-icon", "text");
		} else {
			document.getElementById("p-one-" + idNum).style.display = "none";
			document.getElementById("html-" + idNum).style.display = "none";
			document.getElementById("text-heading-" + idNum).style.display = "block";
			textVerse.style.display = "block";
			icon.src = icon.src.replace("text", "html-icon");
		}			
	} else {		
		let heading = document.getElementById("text-heading");
		let pOne = document.getElementById("p-one");
		let verses = document.getElementById("text-verse");
		let html = document.getElementById("html");
		let pTwo = document.getElementById("p-two");
		let pThree = document.getElementById("p-three");
		let pFour = document.getElementById("p-four");
		if (icon.src.includes("html")) {
			heading.style.display = "none";
			verses.style.display = "none";
			pOne.style.display = "block";
			html.style.display = "block";
			icon.src = icon.src.replace("html-icon", "text");
		} else {
			heading.style.display = "block";
			verses.style.display = "block";
			icon.src = icon.src.replace("text", "html-icon");
			pOne.style.display = "none";
			html.style.display = "none";
		}
	}				
}

// }}}

// .......... MISC FUNCTIONS 
// .......... removeAllChildNodes() {{{

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    } 
}

// }}}
// .......... highlightIcon {{{

function highlightIcon(id=id) {
	let img = document.getElementById(id).firstElementChild;
	img.style.opacity = "100%";
}

// }}}
// .......... muteIcons() {{{

function muteIcon(id=id) {
	let img = document.getElementById(id).firstElementChild;
	img.style.opacity = "10%";
}

// }}}
// .......... stock() {{{

function stock(item, value) {
	if (localStorage.getItem(item) != null) {
		localStorage.removeItem(item);
	}
	localStorage.setItem(item, value);
}

// }}}
// .......... setSelect() {{{

function setSelect(storageValue, select) {
	if (localStorage.getItem(storageValue)) {
		select.value = Number(localStorage.getItem(storageValue));
	}
}

// }}}
// .......... toggleDropDown() {{{

function toggleDropDown(id) {
	let div = document.getElementById(id);
	let img = div.firstElementChild;
	let menu = div.nextElementSibling.nextElementSibling;
	if (img.src.includes("right")) {
		img.src = dropDownDownChevron;
		img.style.marginTop = ".5em";
		img.style.maxWidth = "2.5em";
		menu.style.display = "block";
	} else {
		img.src = dropDownRightChevron;
		img.style.maxWidth = "3em";
		img.style.marginTop = ".27em";
		menu.style.display = "none";
	}		
}

// }}}
// .......... viewChapter() {{{

function viewChapter(id) {
 	let div = document.getElementById(id);
	let book = div.getAttribute("data-book");
	let chapter = div.getAttribute("data-chapter"); 
	stock("chapterBook", book);
	stock("chapterChapter", chapter);

	let url = document.URL
	let chapterUrl = url.replace("_keyword", "_chapters");
	window.location.href = chapterUrl;
}

// }}}
// .......... viewNextPrev() {{{

function viewNextPrev(id) {
	let div = document.getElementById(id);
	let bookId = div.getAttribute("data-book");
	let bookName = bookNames[bookId];
	let chapter = div.getAttribute("data-chapter"); 
	let verse = div.getAttribute("data-verse");
	console.log(verse, typeof(verse));
	let numberOfVerses = verseCount[bookName][chapter];
	stock("verseRangeNumberOfVerses", numberOfVerses);
	stock("verseRangeBook", bookId);
	stock("verseRangeChapter", chapter);
	stock("verseRangeVerseGte", verse);
	stock("verseRangeVerseLte", verse);
	let url = document.URL
	let verseRangeUrl = url.replace("_keyword", "_verse_range");
	window.location.href = verseRangeUrl;
}

// }}}
// .......... showText() {{{

function showText() {
	textResults.style.display = "block";
	htmlResults.style.display = "none";
}	

// }}}
