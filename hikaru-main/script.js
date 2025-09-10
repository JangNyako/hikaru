window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('select-book');
  const titleEl = document.getElementById('book-title');
  const descEl = document.getElementById('book-desc');
  const priceEl = document.getElementById('book-price');
  const imgEl = document.getElementById('book-cover');
  const buyBtn = document.getElementById('book-buy');
  const imgBack = document.getElementById('book-back');

  const bookData = {
    vol1: {
      title: 'vol.1',
      desc: 'vol.1 줄거리 예시',
      price: '5,400원',
      img: './img/hikaru1.webp',
      back:'./img/hikaru1.webp',
      buy: 'https://www.yes24.com/Product/Goods/117667765'
    },
    vol2: {
      title: 'vol.2',
      desc: 'vol.2 줄거리 예시',
      price: '5,400원',
      img: './img/hikaru2.webp',
      back:'./img/hikaru2.webp',
      buy: 'https://www.yes24.com/Product/Goods/119808835'
    },
    vol3: {
      title: 'vol.3',
      desc: 'vol.3 줄거리 예시',
      price: '5,400원',
      img: './img/hikaru3.webp',
      back:'./img/hikaru3.webp',
      buy: 'https://www.yes24.com/product/goods/123700413'
    },
    vol4: {
      title: 'vol.4',
      desc: 'vol.4 줄거리 예시',
      price: '5,400원',
      img: './img/hikaru4.webp',
      back:'./img/hikaru4.webp',
      buy: 'https://www.yes24.com/Product/Goods/128869306'
    }
  };

  function updateBookDisplay(key) {
    const data = bookData[key];
    if (!data) return;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    priceEl.textContent = data.price;
    imgBack.src=data.back;
    imgEl.src = data.img;
    imgEl.alt = `${data.title} 표지`;
    buyBtn.setAttribute('onclick', `window.location.href='${data.buy}'`);
  }

  select.addEventListener('change', () => {
    updateBookDisplay(select.value);
  });

  updateBookDisplay(select.value);
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//페이지 로드시 이전 테마 적용 (localStorage에 저장된 정보 확인)
document.addEventListener('DOMContentLoaded', () => {
  setInitialTheme(localStorage.getItem('theme'));
});

//themekey가 dark일시 darkTheme클래스 추가, lightTheme클래스 제거
function setInitialTheme(themeKey){
  if(themeKey === 'dark'){
    document.documentElement.classList.add('darkTheme');
    document.documentElement.classList.remove('lightTheme');
  }
  else{
    document.documentElement.classList.add('lightTheme');
    document.documentElement.classList.remove('darkTheme');
  }
}

//toggle btn 클릭 시
const toggleThemeBtn = document.querySelector('.nav-theme-button');

toggleThemeBtn.addEventListener('click', ()=>{
  //darkTheme class있을시 (dark테마에서 버튼 클릭 시) lightThemaㅊ푸가
  if(document.documentElement.classList.contains('darkTheme')){
    document.documentElement.classList.remove('darkTheme');
    document.documentElement.classList.add('lightTheme');
    localStorage.setItem('theme','light');
  } else {
    document.documentElement.classList.remove('lightTheme');
    document.documentElement.classList.add('darkTheme');
    localStorage.setItem('theme','dark');
  }
});
