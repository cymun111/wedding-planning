import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import './css/styles.css';
import {HomeController, PassedWorkController, AboutController, ContactController, NotFoundController} from './controllers/controllers';
import {TestController} from './controllers/test-controller';
import {ContactService} from './services/services';



angular.module('myWebsite', [uirouter])
.service('ContactService', ContactService)
.controller('HomeController', HomeController)
.controller('PassedWorkController', PassedWorkController)
.controller('AboutController', AboutController)
.controller('ContactController', ContactController)
.controller('NotFoundController', NotFoundController)
.config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'./views/home.html',
      controller: HomeController,
      controllerAs: 'Hcontroller',
    })
    .state('passed_work', {
      url: '/passed_work',
      templateUrl:'./views/passed_work.html',
      controller: PassedWorkController,
      controllerAs: 'PWcontroller',
    })
    .state('about', {
      url: '/about',
      templateUrl:'./views/about.html',
      controller: AboutController,
      controllerAs: 'Acontroller',
    })
    .state('contact', {
      url: '/contact',
      templateUrl:'./views/contact.html',
      controller: ContactController,
      controllerAs: 'Ccontroller',
    })
    .state('notFound', {
      url: '/notFound',
      templateUrl:'./views/notFound.html',
      controller: NotFoundController,
      controllerAs: 'NFcontroller',
    });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);

}
