<?php
use app\components\CommentWidget;
use yii\helpers\Html;
use app\assets\MainAsset;
use app\components\CurrencyWidget;
//MainAsset::register($this);

?>
<?php $this->beginPage() ?>

<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T65LQPC');</script>
<!-- End Google Tag Manager -->

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <link rel="apple-touch-icon" sizes="57x57" href="/web/img/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/web/img/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/web/img/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/web/img/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/web/img/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/web/img/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/web/img/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/web/img/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/web/img/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/web/img/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/web/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/web/img/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/web/img/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="/web/assets/b69aee4a/jquery.js"></script>
    <script src="/web/js/jquery-ui.js"></script>
    <script src="/web/assets/25a493ae/yii.js"></script>
    <script src="/web/js/script.js"></script>
    <link href="/web/css/jquery-ui.css" rel="stylesheet">
    <link href="/web/assets/39dcf06e/css/bootstrap.css" rel="stylesheet">
    <link href="/web/css/index.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script type="text/javascript" async="" src="//code.jivosite.com/script/geo-widget/XuV8thGQa2"></script>
    <!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'rWnbnhQ0lI';var d=document;var w=window;function l(){
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
  s.src = '//code.jivosite.com/script/widget/'+widget_id
    ; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}
  if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}
  else{w.addEventListener('load',l,false);}}})();
</script>
<!-- {/literal} END JIVOSITE CODE -->
    <script>
        AOS.init();
    </script>
    <?php $this->head() ?>
</head>
<?php $this->beginBody() ?>
<body>
	<div id="eval" style="display: none;">
<?php echo CommentWidget::widget(); ?>
	</div> 
<div class="e-0"></div>
<div class="container-fluid full-width" style="padding: 0;">
	<div class="e-98">
        <?php

            $USD = '-';
            $EUR = '-';

            $url = 'https://data.egov.kz/api/v2/valutalar_bagamdary4/v497';
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = json_decode(curl_exec($ch),true);//
            curl_close($ch);

            if (sizeof($res) > 0) {
                foreach ($res as $key=>$val) {
                    if ((int)$val['id'] === 13) {
                        $EUR = $val['kurs']+(($val['kurs']/100)*1);
                    } else if ((int)$val['id'] === 12) {
                        $USD = $val['kurs']+(($val['kurs']/100)*1);
                    }
                }
            }
            
            $USD = number_format((float)$USD, 1, '.', '');
            $EUR = number_format((float)$EUR, 1, '.', '');

            $city_list = '';

            $city = ['Алматы','Астана'];

            foreach ($city as $k=>$v) {
                $city_list .= '<div class="e-109">'.$v.'</div>';
            }
            $city_list = '<div class="e-110"><div class="e-111">'.$city_list.'</div></div>';

        ?>
		<div class="e-8a"><div class="e-8b"><div class="e-8c"><span class="e-8d"><?php echo '$ - '.$USD; ?></span><span class="e-8d"><?php echo '€ - '.$EUR; ?></span></div><div class="e-8c"><span class="e-8d"><a href="tel:+7 (747) 257 00 00" class="e-108">+7 (747) 257 00 00</a></span><span class="e-8d"><a href="tel:+7 (747) 257 17 17" class="e-108">+7 (747) 257 17 17</a></span></div><div class="e-8c">Схема проезда</div><div class="e-8c">Ваш город: <span class="e-8e">Алматы<?php echo $city_list; ?></span></div></div></div>
	<div class="e-8">
                <div class="e-9"><a href="/tours"><div class="e-38">Горящие туры</div></a><div class="e-39"></div>
                    <div class="e-36">
                        <div class="e-40"></div>
                        <a href="/hot"><div class="e-37">Поиск горящих туров</div></a>
						<div class="e-94 e-97">Алматы
							<div class="e-93">
								<a href="/tours/turkey"><div class="e-37">Горящие туры в Турцию из Алматы</div></a>
                        		<a href="/tours/greece"><div class="e-37">Горящие туры в Грецию из Алматы</div></a>
                        		<a href="/tours/uae"><div class="e-37">Горящие туры в ОАЭ из Алматы</div></a>
                        		<a href="/tours/egypt"><div class="e-37">Горящие туры в Египет из Алматы</div></a>
                        		<a href="/tours/thailand"><div class="e-37">Горящие туры в Таиланд из Алматы</div></a>
                        		<a href="/tours/dominicana"><div class="e-37">Горящие туры в Доминикану из Алматы</div></a>
							</div>
						</div>
						<div class="e-94 e-97">Астана
							<div class="e-93">
								<a href="/tours/turkey_astana"><div class="e-37">Горящие туры в Турцию из Астаны</div></a>
                        		<a href="/tours/greece_astana"><div class="e-37">Горящие туры в Грецию из Астаны</div></a>
                        		<a href="/tours/uae_astana"><div class="e-37">Горящие туры в ОАЭ из Астаны</div></a>
                        		<a href="/tours/egypt_astana"><div class="e-37">Горящие туры в Египет из Астаны</div></a>
                        		<a href="/tours/thailand_astana"><div class="e-37">Горящие туры в Таиланд из Астаны</div></a>
                        		<a href="/tours/dominicana_astana"><div class="e-37">Горящие туры в Доминикану из Астаны</div></a>
							</div>
						</div>
                    </div>
                </div>
	<!--<a href="/tours/turkey"><div class="e-37">Горящие туры в Турцию</div></a>
                        <a href="/tours/greece"><div class="e-37">Горящие туры в Грецию</div></a>
                        <a href="/tours/uae"><div class="e-37">Горящие туры в ОАЭ</div></a>
                        <a href="/tours/egypt"><div class="e-37">Горящие туры в Египет</div></a>
                        <a href="/tours/thailand"><div class="e-37">Горящие туры в Таиланд</div></a>
                        <a href="/tours/dominicana"><div class="e-37">Горящие туры в Доминикану</div></a>-->
                <div class="e-9">
                    <a href="/services"><div class="e-38">Услуги</div></a><div class="e-39"></div>
                    <div class="e-36">
                        <div class="e-40"></div>
                        <a href="/services/avia"><div class="e-37">Авиабилеты</div></a>
                        <a href="/services/insurance"><div class="e-37">Страхование</div></a>
                        <a href="/services/credit"><div class="e-37">Рассрочка</div></a>
                        <a href="/services/closed"><div class="e-37">Ограничение на выезд</div></a>
                        <a href="/services/pay"><div class="e-37">Способ оплаты</div></a>
                    </div>
                </div>
                <div class="e-9">
                    <a href="/franchise"><div class="e-38">Открыть агентство</div></a><div class="e-39"></div>
                    <div class="e-36">
                        <div class="e-40"></div>
                        <a href="/franchise/open"><div class="e-37">Условия франчайзинга</div></a>
                        <a href="https://www.chmd-afina.kz" target="_blank"><div class="e-37">Вход для франчайзинга</div></a>
                    </div>
                </div>
                <div class="e-9">
                    <a href="/countries"><div class="e-38">Страны и туры</div></a><div class="e-39"></div>
                    <div class="e-36">
                        <div class="e-40"></div>
                        <a href="/search"><div class="e-37">Поиск тур</div></a>
                        <a href="/countries"><div class="e-37">Страны</div></a>
                        <a href="/cruises"><div class="e-37">Круизы</div></a>
                    </div>
                </div>
                <div class="e-9">
                    <a href="/office"><div class="e-38">Компания</div></a><div class="e-39"></div>
                    <div class="e-36">
                        <div class="e-40"></div>
                        <a href="/office/about"><div class="e-37">О нас</div></a>
                        <a href="/office/contacts"><div class="e-37">Контакты</div></a>
                    </div>
                </div>
            </div>
	</div>


<div class="e-1">
    <div class="e-2"><video src="/web/img/1.mp4" preload="auto" autoplay muted loop width="100%"></video></div>
    <div class="e-3">
        <div class="e-10">

            <div class="e-11">
                <!--<div class="e-12">TRAVEL AGENCY NETWORK</div>-->
            </div>
            <div class="e-13">
                <a href="/"><div class="e-14"></div></a>
                <div class="e-15" style="display: none;">TRAVEL AGENCY NETWORK</div>
                <div class="e-17" style="display: none;">
                    <div class="e-19">
                        <div class="e-18">Из Алматы</div>
                        <div class="e-18">Турция</div>
                        <div class="e-18">13.02</div>
                        <div class="e-18">7-9 дней</div>
                        <div class="e-18">1-5 звезд</div>
                        <div class="e-18">2 взр</div>
                    </div>
                    <div class="e-16">Подобрать тур</div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<div class="e-4">
<?= $content ?>
</div>
<div class="e-5">
    <a href="/office/about"><div class="e-6">О нас</div></a>
    <a href="/office/contacts"><div class="e-6">Контакты</div></a>
    <a href="/confidential"><div class="e-6">Конфиденциальность</div></a>
    <a href="/services/pay"><div class="e-6">Онлайн оплата</div></a>
    <a href="/countries"><div class="e-6">Страны</div></a>
    <a href="/tours"><div class="e-6">Туры</div></a>
    <a href="/franchise"><div class="e-6">Открыть агентство</div></a>
</div>
<div class="e-7">© Туристская Компания 257 - Все права защищены <?php echo date('Y'); ?></div>
<?php $this->endBody() ?>
</div>
<script src="http://sip.chemodan.kz/callback/bootstrap-sweetalert/sweetalert.js"></script>
<script src="http://sip.chemodan.kz/callback/phonemask/jquery.maskedinput.js?f3rfwf"></script>
<script src="http://sip.chemodan.kz/callback/callback2.js"></script>
	<link rel="stylesheet" href="/web/css/bootstrap.min.css">
	<link rel="stylesheet" href="/web/css/sweetalert.css">
	<link rel="stylesheet" href="/web/css/callback-left-green.css">
    <span href="#" id="popup__toggle" data-toggle="modal" data-target="#modal-callback" data-wow-offset="150">
    <div class="circlephone" style="transform-origin: center;"></div>
    <div class="circle-fill" style="transform-origin: center;"></div>
    <div class="img-circle" style="transform-origin: center;">
        <div class="img-circleblock" style="transform-origin: center;"></div>
    </div>
    </span>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T65LQPC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

</body>
</html>
<?php $this->endPage() ?>