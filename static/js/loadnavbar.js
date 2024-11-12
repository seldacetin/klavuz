// loadNavbar.js
document.addEventListener('DOMContentLoaded', () => {

const NAVBAR = `
<nav class="navbar navbar-expand-xl">
    <div class="container-xl">
        <a href="index.html" class="navbar-brand ps-2 fs-4 fw-bolder">
            <img src="./static/img/1.jpg" width="110" height="auto" alt="" class="navbar-brand-image">
            <i style="margin-left:10px;">ERİŞİM REJİMİ DEPARTMANI</i>
        </a>
    </div>
</nav>
<nav class="navbar navbar-expand-xxl" style="background-color: #e6f5ff;">
    <div class="navbar-collapse">
        <div class="container-xxl">
            <ul class="navbar-nav fs-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Yeni Personel
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                    Türk Personel
                                </a>
                                <div class="dropdown-menu">
                                    <a href="tBakanlik.html" class="dropdown-item">
                                        Bakanlık Evrakları
                                    </a>
                                    <a href="tgiris.html" class="dropdown-item">Giriş Evrakları</a>
                                </div>
                            </div>
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                    Yabancı Personel
                                </a>
                                <div class="dropdown-menu">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Bakanlık Evrakları
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="rusbelarus.html" class="dropdown-item">Rus-Belarus Vatandaşları</a>
                                            <a href="cisulkeler.html" class="dropdown-item">CIS Ülkeleri</a>
                                            <a href="digerulkeler.html" class="dropdown-item">Diğer Ülkeler</a>
                                        </div>
                                    </div>
                                    <a href="ygiris.html" class="dropdown-item">Giriş Evrakları</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Personel Kart İşlemleri
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="kyenileme.html">
                                Kart Yenileme
                            </a>
                            <a class="dropdown-item" href="kiptal.html">
                                Kart İptal
                            </a>
                            <a class="dropdown-item" href="ksureuzatma.html">
                                Kart Süresi Uzatma
                            </a>
                            <a class="dropdown-item" href="90gunbloke.html">
                                90 Gün Bloke Kaldırma
                            </a>
                            <a class="dropdown-item" href="vatandaslikdegisim.html">
                                Vatandaşlık Değişimi
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Araç Kart İşlemleri
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="mektupbasvuru.html">
                                Mektup Başvuru
                            </a>
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                    Araç Kart Başvuru
                                </a>
                                <div class="dropdown-menu">
                                    <a href="aracyenibasvuru.html" class="dropdown-item">
                                        Yeni Başvuru
                                    </a>
                                    <a href="sofordegisikligi.html" class="dropdown-item">
                                        Şoför Değişikliği
                                    </a>
                                    <a href="arackirikkart.html" class="dropdown-item">
                                        Kırık Yıpranmış Arızalı Kart Başvurusu
                                    </a>
                                    <a href="arackayipkart.html" class="dropdown-item">
                                        Kayıp Kart Başvurusu
                                    </a>
                                    <a href="aracfirmadegisim.html" class="dropdown-item">
                                        Firma Değişimi
                                    </a>
                                </div>
                            </div>
                            
                            <a class="dropdown-item" href="arackartsuresiuzatma.html">
                                Kart Süresi Uzatma
                            </a>
                            <a class="dropdown-item" href="90gunblokearac.html">
                                90 Gün Bloke Kaldırma
                            </a>
                            <a class="dropdown-item" href="akiptal.html">
                                Kart İptali
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Malzeme Giriş Çıkış İşlemleri
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="malzeme.html">
                                Malzeme Giriş Çıkış
                            </a>
                            <a class="dropdown-item" href="degerlimalzeme.html">
                                Değerli Malzeme
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aciltir.html"role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Acil Tır Araç
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Jeton İşlemleri
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="aylikJeton.html">
                                1 Aylık Jeton
                            </a>
                            <a class="dropdown-item" href="yillikJeton.html">
                                1 Yıllık Jeton
                            </a>
                            <a class="dropdown-item" href="jetoniptali.html">
                                Jeton İptali
                            </a>
                            <a class="dropdown-item" href="kayipjeton.html">
                                Kayıp Jeton İptali
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="teslimnoktalari.html"role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                            Teslim Noktaları
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>`

document.getElementById('navbar').innerHTML = NAVBAR;

});