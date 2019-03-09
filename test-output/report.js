$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/nitin.kumar2/workspace/BDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#without Examples keyword"
    },
    {
      "line": 6,
      "value": "#\tGiven User already on login page"
    },
    {
      "line": 7,
      "value": "#\tWhen title of login page is facebook"
    },
    {
      "line": 8,
      "value": "#\tThen User enters \"nitin.crush@gmail.com\" and \"golghar\""
    },
    {
      "line": 9,
      "value": "#\tThen user clicks on login button"
    },
    {
      "line": 10,
      "value": "#\tThen user is on home page"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#with Examples keyword"
    }
  ],
  "line": 14,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-feature;login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-feature;login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "login-feature;login-test-scenario;;1"
    },
    {
      "cells": [
        "nitin.crush@gmail.com",
        "golghar"
      ],
      "line": 24,
      "id": "login-feature;login-test-scenario;;2"
    },
    {
      "cells": [
        "nitinkumar12@gmail.com",
        "aadya"
      ],
      "line": 25,
      "id": "login-feature;login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-feature;login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"nitin.crush@gmail.com\" and \"golghar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "login_stepdefinition.user_already_login_page()"
});
formatter.result({
  "duration": 15441474515,
  "status": "passed"
});
formatter.match({
  "location": "login_stepdefinition.title_of_login_page_is_facebook()"
});
formatter.result({
  "duration": 885484867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nitin.crush@gmail.com",
      "offset": 13
    },
    {
      "val": "golghar",
      "offset": 41
    }
  ],
  "location": "login_stepdefinition.users_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 375327929,
  "status": "passed"
});
formatter.match({
  "location": "login_stepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2268068022,
  "status": "passed"
});
formatter.match({
  "location": "login_stepdefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8975486,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[(6)] Facebook\u003e but was:\u003c[Log in to Facebook |] Facebook\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat step_definition.login_stepdefinition.user_is_on_home_page(login_stepdefinition.java:57)\r\n\tat ✽.Then user is on home page(/Users/nitin.kumar2/workspace/BDD/src/main/java/Features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-feature;login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"nitinkumar12@gmail.com\" and \"aadya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "login_stepdefinition.user_already_login_page()"
});
formatter.result({
  "duration": 4414319243,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 65 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027IN45209329W1\u0027, ip: \u002710.212.54.228\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65270}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5), userDataDir\u003dC:\\Users\\NITIN~1.KUM\\AppData\\Local\\Temp\\scoped_dir18996_26906}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.119, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: dc4ed8bb7cbbe531aaa9b8723fda91a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\r\n\tat step_definition.login_stepdefinition.user_already_login_page(login_stepdefinition.java:25)\r\n\tat ✽.Given User already on login page(/Users/nitin.kumar2/workspace/BDD/src/main/java/Features/login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "login_stepdefinition.title_of_login_page_is_facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nitinkumar12@gmail.com",
      "offset": 13
    },
    {
      "val": "aadya",
      "offset": 42
    }
  ],
  "location": "login_stepdefinition.users_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_stepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_stepdefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});