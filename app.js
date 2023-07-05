// Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.right-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.bottom-nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Load Speakers Data
const speakers = [
  {
    id: 1,
    name: 'Vincent Parker',
    rank: 'Programs Coordinator on Quality Initiatives, BS Africa',
    specialty: 'Parker is also a chief Researcher at the University of Beckinham, England',
    picture: './assets/images/p-speaker-6.png',
  },
  {
    id: 2,
    name: 'Nathan Woodwork',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'Woodwork is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-speaker-5.png',
  },
  {
    id: 3,
    name: 'James Dice',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'James is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-speaker-4.png',
  },
  {
    id: 4,
    name: 'Susan Wellington',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'Susan is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-speaker-3.png',
  },
  {
    id: 5,
    name: 'Emilia Bullock',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'Emilia is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-speaker-2.png',
  },
  {
    id: 6,
    name: 'Cynthia Fried',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'Cynthia is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-speaker-1.png',
  },
  {
    id: 7,
    name: 'Anyars Yussif',
    rank: 'Administrative Eexecutive at the World Bank',
    specialty: 'Cynthia is also a senior lecturer at the Wisconsin University with a background in research methologies',
    picture: './assets/images/p-mine.png',
  },
];

const speaker = document.querySelector('.list-speakers');

function addSpeakersToUI() {
  speaker.innerHTML = `${speakers.map((item) => (`<div class="speaker">
    <img src='${item.picture}' alt="Picture of Speaker ${item.name}">
    <div class="overlap"></div>
    <div class="speaker-details">
        <h3>${item.name}</h3>
        <h4>${item.rank}</h4>
        <hr>
        <h5>${item.specialty}</h5>
    </div>
   </div>`)).join(' ')}`;
}

document.addEventListener('DOMContentLoaded', addSpeakersToUI);

// See more or Less speakers
const speakersParent = document.querySelector('.speakers-section');
const showBtn = document.querySelector('.view-more');
const seeMoreText = document.querySelector('.see-more');
const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');

function toggleSpeakerView() {
  speakersParent.classList.toggle('showMoreSpeakers');

  if (speakersParent.classList.contains('showMoreSpeakers')) {
    seeMoreText.innerText = 'LESS';
    downArrow.style.display = 'none';
    upArrow.style.display = 'inline';
  } else {
    seeMoreText.innerText = 'MORE';
    downArrow.style.display = 'inline';
    upArrow.style.display = 'none';
  }
}

showBtn.addEventListener('click', toggleSpeakerView);