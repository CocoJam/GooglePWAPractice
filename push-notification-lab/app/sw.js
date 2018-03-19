/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function() {
  'use strict';
  console.log("sw.js");
  // TODO 2.6 - Handle the notificationclose event
    self.addEventListener('notificationclose', function(e) {
        var notification = e.notification;
        var primaryKey = notification.data.primaryKey;

        console.log('Closed notification: ' + primaryKey);
    });
  // TODO 2.7 - Handle the notificationclick event
    self.addEventListener('notificationclick', function(e) {

        // TODO 2.8 - change the code to open a custom page
      console.log(e.action);
        var notification = e.notification;
        var primaryKey = notification.data.primaryKey;
        if (e.action ==="close"){
            notification.close();
        }
        if (e.action === "explore"){
            clients.openWindow('samples/page' + primaryKey + '.html');
            notification.close();
        }
      //  clients.openWindow('http://google.com');
    });
  // TODO 3.1 - add push event listener

    self.addEventListener('push', function(e) {
        var body;

        if (e.data) {
            body = e.data.text();
        } else {
            body = 'Default body';
        }

        var options = {
            body: body,
            icon: 'images/notification-flat.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {action: 'explore', title: 'Go to the site',
                    icon: 'images/checkmark.png'},
                {action: 'close', title: 'Close the notification',
                    icon: 'images/xmark.png'},
            ]
        };

        e.waitUntil(
            self.registration.showNotification('Push Notification', options)
        );
    });
})();
