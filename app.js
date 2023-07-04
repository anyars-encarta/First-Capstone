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
      specialty: 'Parker is also a cheif Researcher at the University of Beckinham, England',
      picture: './assets/images/speaker-1.png',
    },
    {
        id: 2,
        name: 'Natalie Woodwork',
        rank: 'Administrative Eexecutive at the World Bank',
        specialty: 'Natalie is also a senior lecturer at the Wisconsin University with a background in research methologies',
        picture: './assets/images/speaker-2.png',
      },
      {
        id: 3,
        name: 'James Dice',
        rank: 'Administrative Eexecutive at the World Bank',
        specialty: 'Natalie is also a senior lecturer at the Wisconsin University with a background in research methologies',
        picture: './assets/images/speaker-3.png',
      },
      {
        id: 4,
        name: 'Susan Wellington',
        rank: 'Administrative Eexecutive at the World Bank',
        specialty: 'Natalie is also a senior lecturer at the Wisconsin University with a background in research methologies',
        picture: './assets/images/speaker-4.png',
      },
      {
        id: 5,
        name: 'Frederick Bullock',
        rank: 'Administrative Eexecutive at the World Bank',
        specialty: 'Natalie is also a senior lecturer at the Wisconsin University with a background in research methologies',
        picture: './assets/images/speaker-5.png',
      },
      {
        id: 6,
        name: 'Albert Fried',
        rank: 'Administrative Eexecutive at the World Bank',
        specialty: 'Natalie is also a senior lecturer at the Wisconsin University with a background in research methologies',
        picture: './assets/images/speaker-6.png',
      }];
  
  const speaker = document.querySelector('.list-speakers');
  
  document.addEventListener('DOMContentLoaded', addSpeakersToUI);

  function addSpeakersToUI() {
    speaker.innerHTML = `${speakers.map((item, index) => (`<div class="speaker">
    <img src='${item.picture}' alt="Picture of Speaker ${item.id}">
    <div class="speaker-details">
        <h3>${item.name}</h3>
        <h4>${item.rank}</h4>
        <hr>
        <h5>${item.specialty}</h5>
    </div>
   </div>`)).join(' ')}`
  };