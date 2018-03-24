<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>WECTION</title>
    <meta name="keywords" content="wection, вебстудия, создание сайтов, создание сайта, разработка сайтов, разработка сайта, создание сайта под ключ, создание сайтов в житомире, заказать создание сайта, создание интернет портфолио, хостинг, разработка веб-приложений, создание приложений для бизнеса, создание логотипа, создание андроид приложений, заказать андроид приложение">
    <meta name="description" content="Веб-студия WECTION. Редизайн и создание сайтов, логотипов, андроид приложений.">
    <meta name="copyright" content="Created by wection in 2016">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/slide-show.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" type="text/css" href="css/info.css">
    <link rel="stylesheet" type="text/css" href="css/portfolio.css">
    <link rel="stylesheet" type="text/css" href="css/about.css">
    <link rel="stylesheet" type="text/css" href="css/order.css">
    <link rel="stylesheet" type="text/css" href="css/default.css">
    <link rel="icon" href="favicon.ico">
    
    <script type="text/javascript" src="js/jquery-1.5.min.js"></script>
    <script type="text/javascript" src="js/device.min.js"></script>
    <script type="text/javascript" src="js/nav.js"></script>
    <script type="text/javascript" src="js/events.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/slide-show.js"></script>
    <script type="text/javascript" src="js/init-slide-show.js"></script>
    <script type="text/javascript" src="js/order.js"></script>
    <script type="text/javascript" src="js/info.js"></script>
    
</head>
<body>
   <div class="pop-up" data-name="wection">
       <h1>&lt;team/&gt;</h1>
   </div>
   <div class="pop-up" data-name="phone">
       <p>+380 63 716 1195</p>
   </div>
   <div class="pop-up" data-name="mail">
       <p>wection.team@gmail.com</p>
   </div>
   <div class="pop-up" data-name="feedback">
       <p>Отправка</p>
   </div>
   <div class="pop-up" data-name="price">
       <p data-pop-up-close>Цена зависит от сложности реализации и затраченного времени. Стоимость рассчитывается индивидуально для каждого проекта</p>
   </div>
   <div class="pop-up" data-name="translate">
       <p data-pop-up-close>Цена за перевод зависит от количества слов и затраченного времени</p>
   </div>
   <div class="pop-up" data-pop-up-close data-name="code"></div>
    <header>
        <div class="logo" data-pop-up-over="wection">WECTION</div>
        <div class="no-click"></div>
        <div class="phone-mail">
            <span data-pop-up-over="phone">
                <span class="before"></span>
                +380 63 716 1195
            </span><br>
            <span data-pop-up-over="mail">
                <span class="before"></span>
                wection.team@gmail.com
            </span>
        </div>
    </header>
    <?php 
    include("./pages/home.php");
    include("./pages/default.php");
    include("./pages/about.php");
    include("./pages/info.php");
    include("./pages/portfolio.php");
    include("./pages/order.php");
    ?>
    <nav class="main">
        <ul>
            <li>
                <button data-page="home" data-top="-170" data-color="#00796B" data-title="Домой"></button>
            </li>
            <li>
                <button data-page="portfolio" data-top="-90" data-color="#FFAB00" data-title="Портфолио"></button>
            </li>
            <li>
                <button data-page="info" data-top="-10" data-color="#1565C0" data-title="Услуги"></button>
            </li>
            <li>
                <button data-page="about" data-top="70" data-color="#D32F2F" data-title="О нас"></button>
            </li>
            <li>
                <button data-page="order" data-top="150" data-color="#FF5722" data-title="Заказать"></button>
            </li>
        </ul>
    </nav>
    <footer>
        <p class="copyright">&copy; Created by Wection in 2016</p>
    </footer>
    <!--LiveInternet counter--><script type="text/javascript"><!--
new Image().src = "//counter.yadro.ru/hit?r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random();//--></script><!--/LiveInternet-->
</body>
</html>