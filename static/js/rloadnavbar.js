// loadNavbar.js
document.addEventListener('DOMContentLoaded', () => {

const NAVBAR = `
<nav class="navbar navbar-expand-xl">
    <div class="container-xl">
        <div class="">
            <a href="rus.html" class="navbar-brand ps-2 fs-4 fw-bolder">
                <img src="./static/img/1.jpg" width="110" height="auto" alt="" class="navbar-brand-image">
                <i style="margin-left:10px;">Система управления пропускным режимом</i>
            </a>
        </div>
        <div class="d-flex justify-content-start align-items-center gap-2 flex-wrap">
            <a href="tr.html" 
            class="btn btn-outline-primary d-flex align-items-center justify-content-center" 
            style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                <img src="./static/img/tr.png" alt="Türkçe" style="width: 20px; height: auto;">
                <span style="font-size: 0.9rem;">Türkçe</span>
            </a>
            <a href="rus.html" 
            class="btn btn-outline-primary d-flex align-items-center justify-content-center" 
            style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                <img src="./static/img/rus.png" alt="Русский" style="width: 20px; height: auto;">
                <span style="font-size: 0.9rem;">Русский</span>
            </a>
        </div>
    </div>
</nav>
<nav class="navbar navbar-expand-xxl" style="background-color: #e6f5ff; word-break: break-word;">
    <div class="navbar-collapse">
        <div class="container-xxl">
            <ul class="navbar-nav fs-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                <path d="M12 12l8 -4.5"></path>
                                <path d="M12 12l0 9"></path>
                                <path d="M12 12l-8 -4.5"></path>
                                <path d="M16 5.25l-8 4.5"></path>
                            </svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                        Оформление пропусков для нового персонала
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                Регистрация турецкого персонала
                                </a>
                                <div class="dropdown-menu">
                                    <a href="rtBakanlik.html" class="dropdown-item">
                                    Подготовка документов для министерства
                                    </a>
                                    <a href="rtgiris.html" class="dropdown-item">Оформление документов на пропуск</a>
                                </div>
                            </div>
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                Регистрация иностранного персонала
                                </a>
                                <div class="dropdown-menu">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                        Подготовка документов для министерства
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="rrusbelarus.html" class="dropdown-item">Оформление пропусков для граждан РФ и Беларуси</a>
                                            <a href="rcisulkeler.html" class="dropdown-item">Регистрация граждан стран СНГ</a>
                                            <a href="rdigerulkeler.html" class="dropdown-item">Регистрация граждан других стран</a>
                                        </div>
                                    </div>
                                    <a href="rygiris.html" class="dropdown-item">Обработка документов на пропуск</a>
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
                        Операции с пропусками персонала
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="rkyenileme.html">
                            Обновление пропусков
                            </a>
                            <a class="dropdown-item" href="rkiptal.html">
                            Аннулирование пропусков
                            </a>
                            <a class="dropdown-item" href="rksureuzatma.html">
                            Продление срока действия пропусков
                            </a>
                            <a class="dropdown-item" href="r90gunbloke.html">
                            Активация пропусков в связи с процедурой 90 дней
                            </a>
                            <a class="dropdown-item" href="rvatandaslikdegisim.html">
                            Изменение гражданства
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
                        Операции с пропусками для транспортных средств
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="rmektupbasvuru.html">
                            Подготовка заявок на письма
                            </a>
                            <div class="dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                Оформление заявок на пропуск транспортного средства
                                </a>
                                <div class="dropdown-menu">
                                    <a href="raracyenibasvuru.html" class="dropdown-item">
                                    Регистрация новых заявок
                                    </a>
                                    <a href="rsofordegisikligi.html" class="dropdown-item">
                                    Смена водителя транспортного средства
                                    </a>
                                    <a href="rarackirikkart.html" class="dropdown-item">
                                    Оформление заявок на неисправные, поврежденные или изношенные пропуска
                                    </a>
                                    <a href="rarackayipkart.html" class="dropdown-item">
                                    Оформление заявок на утерянные пропуска
                                    </a>
                                    <a href="raracfirmadegisim.html" class="dropdown-item">
                                    Изменение данных компании
                                    </a>
                                </div>
                            </div>
                            
                            <a class="dropdown-item" href="rarackartsuresiuzatma.html">
                            Продление срока действия пропусков
                            </a>
                            <a class="dropdown-item" href="r90gunblokearac.html">
                            Активация пропусков в связи с процедурой 90 дней
                            </a>
                            <a class="dropdown-item" href="rakiptal.html">
                            Аннулирование пропусков
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
                        Операции по ввозу и вывозу материалов
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="rmalzeme.html">
                            Ввоз и вывоз материалов
                            </a>
                            <a class="dropdown-item" href="rdegerlimalzeme.html">
                            Регистрация ценных материалов
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="raciltir.html"role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                        Оформление срочного грузового автомобиля
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                        Операции с жетонами
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-column">
                            <a class="dropdown-item" href="raylikJeton.html">
                            Выдача жетонов на 1 месяц
                            </a>
                            <a class="dropdown-item" href="ryillikJeton.html">
                            Выдача годовых жетонов
                            </a>
                            <a class="dropdown-item" href="rjetoniptali.html">
                            Аннулирование жетонов
                            </a>
                            <a class="dropdown-item" href="rkayipjeton.html">
                            Аннулирование утерянных жетонов
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="rteslimnoktalari.html"role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                        </span>
                        <span class="nav-link-title fw-bolder">
                        Пункты выдачи
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>`

document.getElementById('rnavbar').innerHTML = NAVBAR;

});