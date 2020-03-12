// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp(functions.config().firebase);

// const SENDGRID_API_KEY = functions.config().sendgrid.key;

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(SENDGRID_API_KEY);


// exports.firestoreEmail = functions.firestore
//  .document('user/{userId}/followers/{followerId}')
//  .onCreate(event => {
//    const userId = event.params.userId;
//    const db = admin.firestore();
//    return db.collection('users').doc(userId)
//             .get()
//             .then(doc => {
//               const user = doc.data()
//               const msg = {
//                 to: user.email,
//                 from: 'napuwunapuwu@gmail.com',
//                 subject: 'TEST TYUWER',
//               }
// return sgMail.send(msg)
//             }).then(() => console.log('email sent'))
//             .catch(err => console.log(err));
//  })





var functions=require('firebase-functions')
var admin=require('firebase-admin');
var nodemailer=require('nodemailer');
admin.initializeApp();
require('dotenv').config();

var {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    var data=snap.data();
    var authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });
authData.sendMail({
from :'napuwunapuwu@gmail.com',
to:`${data.email}`,
subject:'Your submission Info',
text:`${data.email}`,
html:`${data.email}`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});
