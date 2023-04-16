/*=============== ganti background header  ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Saat scroll lebih besar dari 50 tinggi viewport, tambahkan kelas scroll-header ke tag header, scroll header kita atur di css bentuknya
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header') /*bagian ini di singkrongkan dengan css*/
}
window.addEventListener('scroll', scrollHeader)   
/*=============== SWIPER PRODUCTS ===============*/ /*untuk buat gambar slide slide*/ 
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grapCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link') /*active-link untuk menebalkan warna pada objek yang sedang di klik pada navbar*/ 
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== MENAMPILKAN SCROLL UP ===============*/  
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Saat scroll lebih tinggi dari 350 viewport height, tambahkan kelas show-scroll ke tag a dengan kelas scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== TEMA MODE IRENG ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Topik yang dipilih sebelumnya (jika pengguna memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// memperoleh tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// memvalidasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
// Jika validasi terpenuhi, program menanyakan masalah apa yang perlu diketahui jika kami mengaktifkan atau menonaktifkan kegelapan
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener('click', () => {
// menambah atau menghapus tema gelap / ikon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
// menyimpan tema dan ikon saat ini yang dipilih 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/ //saat kita mengscroll maka animasi load items diatur dengan ini
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
    //reset: true
})

sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`, {interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'})