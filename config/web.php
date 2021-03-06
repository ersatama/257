<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'asdasdas',
            'baseUrl' => ''
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'urlManager' => [
            'showScriptName' => false,
            'enablePrettyUrl' => true,
            'enableStrictParsing' => false,
            'rules' => [
                [
                    'pattern' => 'tours/<country>',
                    'route' => 'site/tours',
                    'defaults' => ['country' => '']
                ],
                [
                    'pattern' => 'franchise/<open>',
                    'route' => 'site/franchise',
                    'defaults' => ['open' => '']
                ],
                [
                    'pattern' => 'services/<sec>',
                    'route' => 'site/services',
                    'defaults' => ['sec' => '']
                ],
                [
                    'pattern' => 'office/<sec>',
                    'route' => 'site/office',
                    'defaults' => ['sec' => '']
                ],
                [
                    'pattern' => 'countries/<sec>',
                    'route' => 'site/countries',
                    'defaults' => ['sec' => '']
                ],
				[
                    'pattern' => 'booking/<sec>',
                    'route' => 'site/booking',
                    'defaults' => ['sec' => '']
                ],
				[
                    'pattern' => 'promo/<sec>',
                    'route' => 'site/promo',
                    'defaults' => ['sec' => '']
                ],
                '' => 'site/index',
                'confidential.html' => 'site/confidential',
                '<alias:\w+>' => 'site/<alias>',
            ]
        ],
        'db' => $db,
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
