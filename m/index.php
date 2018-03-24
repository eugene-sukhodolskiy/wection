<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wection</title>
   <!-- <meta name="viewport" content="width=device-width; height=device-height; initial-scale=1">-->
   <meta name="viewport" content="width=360; height=device-height; user-scalable=no; initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/slide-show.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" type="text/css" href="css/info.css">
    <link rel="stylesheet" type="text/css" href="css/portfolio.css">
    <link rel="stylesheet" type="text/css" href="css/about.css">
    <link rel="icon" href="favicon.ico">
    
    <script type="text/javascript" src="js/jquery-1.5.min.js"></script>
    <script type="text/javascript" src="js/device.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    
</head>
<body>
   <div class="social-links">
       
   </div>
   <div class="pop-up" data-name="feedback">
       <p>
           Отправка
       </p>
   </div>
    <header>
        <div class="logo">WECTION</div>
        <button class="menu"></button>
    </header>
    <?php 
    $f = 0;
    if(!empty($_GET['page'])){
        $pages = array(
            'home',
            'about',
            'info',
            'portfolio'
        );
        $count = count($pages);
        for($i=0;$i<$count;$i++){
            if($_GET['page'] == $pages[$i]){
                $f++;
                include("./pages/{$_GET['page']}.php");
            }
        }
    }
    
    if(!isset($_GET['page'])){
        include("./pages/home.php");
    }
    
    if(!$f and !empty($_GET['page'])){
        include("./pages/default.php");
    }
    ?>
    <nav class="main">
        <ul>
            <li>
                <button data-page="home" data-color="#00796B">Домой</button>
            </li>
            <li>
                <button data-page="portfolio" data-color="#FFAB00">Портфолио</button>
            </li>
            <li>
                <button data-page="info" data-color="#1565C0">Услуги</button>
            </li>
            <li>
                <button data-page="about" data-color="#D32F2F">О нас</button>
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
