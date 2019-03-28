<?php
namespace app\components;

use yii\base\Widget;

class FormWidget extends Widget {
	public $title = 'УЗНАЙТЕ СТОИМОСТЬ ПУТЕШЕСТВИЯ ВАШЕЙ МЕЧТЫ';
	public $city = 'ГОРОД ВЫЛЕТА:';
	public function run() {
		return '<div class="e-56">
			<div class="e-57">'.$this->title.'</div>
			<div class="e-58">
				<div class="e-59"><input type="text" class="e-60" placeholder="Ваше имя"></div>
				<div class="e-59"><input type="text" class="e-60" placeholder="Ваш телефон номер"></div>
				<div class="e-59"><button class="e-61" onclick="return page.leaveRequest(this,event);">Оставить запрос</button></div>
			</div>
		</div>';
	}

}


?>