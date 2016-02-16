(function () {
    'use strict';
    var app = angular.module('app', ['ngRoute', 'angular-carousel','angularUtils.directives.dirPagination']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "mainCtrl",
                templateUrl: "app/templates/home.html"


            })
            .when("/home", {
                controller: "mainCtrl",
                templateUrl: "app/templates/home.html"


            })
            .when("/cv", {
                controller: 'mainCtrl',
                templateUrl: "app/templates/cv.html"


            })
            .when("/projects", {
                controller: 'mainCtrl',
                templateUrl: "app/templates/projects.html"


            })
            .when("/contacts", {
                controller: "mainCtrl",
                templateUrl: "app/templates/contacts.html"


            })
            .when("/contacts/send", {
                controller: "mainCtrl",
                templateUrl: "app/templates/contacts.html"


            })
            .when("/life", {
                controller: "mainCtrl",
                templateUrl: "app/templates/diaryList.html"


            })
            .when("/newDiary", {
                controller: "mainCtrl",
                templateUrl: "app/templates/addDiary.html"


            })
            .when("/diaries/:id", {
                controller: "mainCtrl",
                templateUrl: "app/templates/diary.html"
            })
            .otherwise({redirectTo: "/"})
    });


})();
