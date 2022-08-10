const body = document.querySelector('body');

const wholeContainer = document.createElement('div');
wholeContainer.classList.add('wholeContainer');
body.appendChild(wholeContainer);

///////////////////////////////////////////////////////////

const rowOne = document.createElement('div');
rowOne.classList.add('rowOne');
wholeContainer.appendChild(rowOne);

const rowTwo = document.createElement('div');
rowTwo.classList.add('rowTwo');
wholeContainer.appendChild(rowTwo);

const rowThree = document.createElement('div');
rowThree.classList.add('rowThree');
wholeContainer.appendChild(rowThree);

const rowFour = document.createElement('div');
rowFour.classList.add('rowFour');
wholeContainer.appendChild(rowFour);

/////////////////////////////////////////////////////////////
//Row One Tiles

const oneOne = document.createElement('div')
oneOne.classList.add('tile');
rowOne.appendChild(oneOne);

const oneTwo = document.createElement('div')
oneTwo.classList.add('tile');
rowOne.appendChild(oneTwo);

const oneThree = document.createElement('div')
oneThree.classList.add('tile');
rowOne.appendChild(oneThree);

const oneFour = document.createElement('div')
oneFour.classList.add('tile');
rowOne.appendChild(oneFour);

////////////////
//Row Two Tiles

const twoOne = document.createElement('div')
twoOne.classList.add('tile');
rowTwo.appendChild(twoOne);

const twoTwo = document.createElement('div')
twoTwo.classList.add('tile');
rowTwo.appendChild(twoTwo);

const twoThree = document.createElement('div')
twoThree.classList.add('tile');
rowTwo.appendChild(twoThree);

const twoFour = document.createElement('div')
twoFour.classList.add('tile');
rowTwo.appendChild(twoFour);

////////////////
//Row Three Titles

const threeOne = document.createElement('div')
threeOne.classList.add('tile');
rowThree.appendChild(threeOne);

const threeTwo = document.createElement('div')
threeTwo.classList.add('tile');
rowThree.appendChild(threeTwo);

const threeThree = document.createElement('div')
threeThree.classList.add('tile');
rowThree.appendChild(threeThree);

const threeFour = document.createElement('div')
threeFour.classList.add('tile');
rowThree.appendChild(threeFour);

////////////////
//Row Four Titles

const fourOne = document.createElement('div')
fourOne.classList.add('tile');
rowFour.appendChild(fourOne);

const fourTwo = document.createElement('div')
fourTwo.classList.add('tile');
rowFour.appendChild(fourTwo);

const fourThree = document.createElement('div')
fourThree.classList.add('tile');
rowFour.appendChild(fourThree);

const fourFour = document.createElement('div')
fourFour.classList.add('tile');
rowFour.appendChild(fourFour);