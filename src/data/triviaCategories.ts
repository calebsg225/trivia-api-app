const triviaCategories = [
  ['Any Catagory', 0],
  ['General Knowledge', 9],
  ['Entertainment: Books', 10],
  ['Entertainment: Film', 11],
  ['Entertainment: Music', 12],
  ['Entertainment: Musicals & Theatres', 13],
  ['Entertainment: Television', 14],
  ['Entertainment: Video Games', 15],
  ['Entertainment: Board Games', 16],
  ['Science $ Nature', 17],
  ['Science: Computers', 18],
  ['Science: Mathematics', 19],
  ['Mythology', 20],
  ['Sports', 21],
  ['Geography', 22],
  ['History', 23],
  ['Politics', 24],
  ['Art', 25],
  ['Celeberties', 26],
  ['Animals', 27],
  ['Vehicles', 28],
  ['Entertainment: Comics', 29],
  ['Science: Gadgets', 30],
  ['Entertainment: Japanese Anime & Manga', 31],
  ['Entertainment: Cartoon & Animations', 32]
]
/*
https://opentdb.com/api.php?amount=10
  &category=13
  &difficulty=medium
  &type=boolean
*/

const dif = '&difficulty=';
const ty = '&type=';

const triviaDifficulties = [
  ['Any', ''],
  ['Easy', `${dif}easy`],
  ['Medium', `${dif}medium`],
  ['Hard:', `${dif}hard`]
];

const triviaAnswerTypes = [
  ['Any', ''],
  ['Multiple Choice', `${ty}multiple`],
  ['True or False', `${ty}boolean`]
];

export { triviaCategories, triviaDifficulties, triviaAnswerTypes };