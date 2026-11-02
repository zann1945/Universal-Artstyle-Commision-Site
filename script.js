const artists = [
  {
    name:"Alvn",
    price:"Start from 40k (IDR)",
    phone:"+62 853 7383 2195"
  },
  {
    name:"Mai",
    price:"Headshot : 40k\nHalf body : 70k\nCouple : discount 30%",
    phone:"0895-4180-17239"
  },
  {
    name:"Rin Commission",
    price:"50k – 80k",
    phone:"0895406713993"
  },
  {
    name:"Senn",
    price:"75k – 350k",
    phone:"088991853732"
  },
  {
    name:"Joelly Commission (Jopiewpiew_ta)",
    price:"Start from 70k",
    phone:"081460402409"
  },
  {
    name:"Ninaeyo Comms",
    price:"Range 70k – 160k (IDR)",
    phone:"083875566761"
  },
  {
    name:"Kiworu",
    price:"Personal use : 55k – 150k\nCommercial use : 100% dari total harga",
    phone:"085726839875"
  },
  {
    name:"Nura Ki",
    price:"10k – 45k (tergantung)",
    phone:"083157118553"
  }
];

const list = document.getElementById('artist-list');

artists.forEach((a, i) => {
  const card = document.createElement('div');
  card.className = 'artist-card';

  card.innerHTML = `
    <button class="artist-toggle">
      <span><span class="num">${String(i+1).padStart(2,'0')}</span>${a.name}</span>
      <span class="arrow">›</span>
    </button>
    <div class="panel">
      <div class="panel-inner">

        <div class="stage stage-price active">
          <div class="price-block">${a.price}</div>
          <button class="next-btn">Lihat Nomor HP</button>
        </div>

        <div class="stage stage-phone">
          <div class="phone-block"><a href="tel:${a.phone.replace(/[^0-9+]/g,'')}">${a.phone}</a></div>
          <button class="back-btn">‹ Kembali</button>
        </div>

      </div>
    </div>
  `;

  const toggle = card.querySelector('.artist-toggle');
  const pricePanel = card.querySelector('.stage-price');
  const phonePanel = card.querySelector('.stage-phone');
  const nextBtn = card.querySelector('.next-btn');
  const backBtn = card.querySelector('.back-btn');

  toggle.addEventListener('click', () => {
    document.querySelectorAll('.artist-card').forEach(c => {
      if(c !== card) c.classList.remove('open');
    });
    card.classList.toggle('open');
  });

  nextBtn.addEventListener('click', () => {
    pricePanel.classList.remove('active');
    phonePanel.classList.add('active');
  });

  backBtn.addEventListener('click', () => {
    phonePanel.classList.remove('active');
    pricePanel.classList.add('active');
  });

  list.appendChild(card);
});