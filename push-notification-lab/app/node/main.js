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

// TODO 3.8 - push a message using the web push library
var webPush = require('web-push');

var pushSubscription ={"endpoint":"https://fcm.googleapis.com/fcm/send/fXuO6Ji9yEw:APA91bE7C1zaHrWYe8PFzNsDpMNVBv2Y03cqz3rN9PgNMhdPGZ_TOeniqc6n_1iECW7ZYHlYRgh5zSiq-vDXBU7RNr_8XgziPCxrgPzpokNiWpfoHVHZ1idFGXpKqfNjCoz-rSZPw5xN","expirationTime":null,"keys":{"p256dh":"BOrzWdzXZLeHkL4lzZzIFMxzksS3T0wc-FZeuoy8wz0JD3RmaLsuWd-TdGAahBgxwnehQDh1ETmWWzF6SxTY-_U=","auth":"JesM_xMZB5PG6omCr6EEtQ=="}}

// TODO 4.3a - include VAPID keys
var vapidPublicKey = "BKNnIIhzk9tJtJejF7o-4qXK9rCUb8XDzUtUSsx4xO5csFqM036l-aF42I9FEnGVgtB_zAMvdIIgNzdQehhePvU";
var vapidPrivateKey = 'fNn1KLE3JDEv6HxeNdheJeDkm4QFS1XQyHfZtxmrwQI';
var payload = 'Here is a payload! How are you';

var options = {
    //gcmAPIKey: 'AAAAXfkbHFE:APA91bEOo3MHTtQOgUogt5gI7HmyCeto6RejVXkHq_nsqS3VHukNxX56bUxHi5HQbmfis2L7Sy87M4H99MpWf15I9XEHVNMhca6mtlCofTzLHoDhZ-p3Vmk3cC1oSnWvvImDfOT7ZCTl',
    TTL: 60,

    // TODO 4.3b - add VAPID details
    vapidDetails: {
        subject: 'mailto: ',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);