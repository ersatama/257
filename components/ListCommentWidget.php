<?php
namespace app\components;

use yii\base\Widget;
use app\models\Comments;

class ListCommentWidget extends Widget {
	public function run() {

		$SQL = Comments::find()->asArray()->all();
		$html = '';
		foreach ($SQL as $key => $value) {
			$img = json_decode($value['img'],true)[0];
			$html .= '<div class="a-109">
			<div class="a-110" style="background-image: url('.$img.')"><div class="a-270" onclick="return page.viewAllImg(this);" data-id="'.htmlspecialchars(json_encode(json_decode($value['img'],true))).'">'.sizeof(json_decode($value['img'],true)).' фото</div></div>
			<div class="a-111">
				<div class="a-112">'.$value['name'].'<a href="mailto:'.$value['email'].'"><span class="a-116">'.$value['email'].'</span></a></div>
				<div class="a-113"><span class="txt">'.$this->cutComment($value['comment']).'</span> <span class="a-269" onclick="return page.commentFull(this);" data-id="'.htmlspecialchars($value['comment']).'">Читать далее</span></div>
				<div class="a-114">'.$value['date'].'</div>
			</div>
			</div>';
		}
		return $html;

	}
	public function cutComment($a) {
		$a = strip_tags($a);
		$a = substr($a, 0, 210);
		$a = rtrim($a, "!,.-");
		$a = substr($a, 0, strrpos($a, ' '));
		return $a.'...';
	}
}
?>