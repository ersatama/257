<?php
namespace app\components;

use yii\base\Widget;
use app\models\Comments;

class CommentWidget extends Widget {
	public function run() {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "http://kompastour.kz/");
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$out = curl_exec($ch);
		$regex_pattern = "/\<div class=\"js_callback\"\>(.*?)\<\/div\>/is";
		preg_match_all($regex_pattern,$out,$matches);
		curl_close($ch);
		return $matches[1][1];
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