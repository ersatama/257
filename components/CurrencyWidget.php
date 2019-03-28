<?php
namespace app\components;

use yii\base\Widget;
use app\models\Comments;

class CurrencyWidget extends Widget {
	public function run() {

		//'http://online.kompastour.kz/export/default.php?samo_action=api&version=1.0&oauth_token=43fc8ef36c7749f189c9a7680c37cfb6&type=json&action=SearchTour_PRICES&STATEINC='.$START_PLACE['kompas'][$_POST['to']['country']]['code'].'&TOWNFROMINC='.$START_PLACE['kompas'][ $_POST['from']['country'] ]['city'][ $_POST['from']['city']   ].'&CHECKIN_BEG='.$START.'&CHECKIN_END='.$END.'&NIGHTS_FROM='.$_POST['range'].'&NIGHTS_TILL='.($_POST['range']+2).'&ADULT='.$_POST['adult'].'&CHILD='.$child_1_length.'&AGES='.$child_1.'&CURRENCY=2&PACKET=0&PRICEPAGE='.$START_COUNT.'&STARS_ANY=1&DOLOAD=1&MEALS_ANY=1&TOWNS_ANY=1&COSTMIN=0&COSTMAX=100000';
		
		return '<div class="h-15">
			<div class="h-16">Город: <span class="h-19">Алматы</span></div>
			<div class="h-17">
				<div class="h-18">$ 375 KZT</div>
				<div class="h-18">€ 427 KZT</div>
			</div>
		</div>';
	}
}
?>