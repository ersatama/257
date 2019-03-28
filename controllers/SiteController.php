<?php
namespace app\controllers;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Tour;
use app\models\Listtours;
use app\models\emails;

class SiteController extends Controller
{
    
    public $layout = 'index';
	public function actionIndex() {
		return $this->render('index');	
	}
	public function actionHot() {
		return $this->render('hot');
	}
	public function actionTours() {
		$request = Yii::$app->request;
        $country = $request->get('country');
        if ($country) {
        	if ($country === 'turkey') {
        		return $this->render('country_turkey');
        	} elseif ($country === 'greece') {
        		return $this->render('country_greece');
        	} elseif ($country === 'uae') {
        		return $this->render('country_uae');
        	} elseif ($country === 'egypt') {
        		return $this->render('country_egypt');
        	} elseif ($country === 'thailand') {
        		return $this->render('country_thailand');
        	} elseif ($country === 'dominicana') {
        		return $this->render('country_dominicana');
        	} elseif ($country === 'bulgaria') {
        		return $this->render('country_bulgaria');
        	} elseif ($country === 'georgia') {
        		return $this->render('country_georgia');
        	} elseif ($country === 'turkey_astana') {
        		return $this->render('country_turkey_astana');
        	} elseif ($country === 'greece_astana') {
        		return $this->render('country_greece_astana');
        	} elseif ($country === 'uae_astana') {
        		return $this->render('country_uae_astana');
        	} elseif ($country === 'egypt_astana') {
        		return $this->render('country_egypt_astana');
        	} elseif ($country === 'thailand_astana') {
        		return $this->render('country_thailand_astana');
        	} elseif ($country === 'dominicana_astana') {
        		return $this->render('country_dominicana_astana');
        	}
        }
		return $this->render('tours');
	}
	public function actionServices() {
		$request = Yii::$app->request;
        $sec = $request->get('sec');
        if ($sec) {
        	if ($sec === 'avia') {
        		return $this->render('services_avia');
        	} elseif ($sec === 'insurance') {
                return $this->render('services_insurance');
            } elseif ($sec === 'credit') {
                return $this->render('services_credit');
            } elseif ($sec === 'closed') {
                return $this->render('services_closed');
            } elseif ($sec === 'pay') {
                return $this->render('services_pay');
            }
        }
		return $this->render('services');
	}
    public function actionFranchise() {
        $request = Yii::$app->request;
        $sec = $request->get('sec');
        return $this->render('franchise');
    }
    public function actionCruises() {
        return $this->render('cruises');
    }
    public function actionConfidential() {
        return $this->render('confidential');
    }
    public function actionOffice() {
        $request = Yii::$app->request;
        $sec = $request->get('sec');
        if ($sec) {
            if ($sec === 'about') {
                return $this->render('office_about');
            } elseif ($sec === 'contacts') {
                return $this->render('office_contacts');
            }
        }
        return $this->render('office');
    }
    public function actionSearch() {
        return $this->render('search');
    }
    public function actionCountries() {
        $request = Yii::$app->request;
        $sec = $request->get('sec');
        if ($sec) {
            if ($sec === 'bulgaria') {
                return $this->render('countries_bulgaria');
            } elseif ($sec === 'vietnam') {
                return $this->render('countries_vietnam');
            } elseif ($sec === 'greece') {
                return $this->render('countries_greece');
            } elseif ($sec === 'india') {
                return $this->render('countries_india');
            } elseif ($sec === 'china') {
                return $this->render('countries_china');
            } elseif ($sec === 'cuba') {
                return $this->render('countries_cuba');
            } elseif ($sec === 'malaysia') {
                return $this->render('countries_malaysia');
            } elseif ($sec === 'georgia') {
                return $this->render('countries_georgia');
            } elseif ($sec === 'dominicana') {
                return $this->render('countries_dominicana');
            } elseif ($sec === 'egypt') {
                return $this->render('countries_egypt');
            } elseif ($sec === 'maldives') {
                return $this->render('countries_maldives');
            } elseif ($sec === 'uae') {
                return $this->render('countries_uae');
            } elseif ($sec === 'thailand') {
                return $this->render('countries_thailand');
            } elseif ($sec === 'turkey') {
                return $this->render('countries_turkey');
            }
        }
        return $this->render('countries');
    }
}

?>