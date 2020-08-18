const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');

admin.initializeApp();

exports.addAdminClaim = functions.firestore.document('admin_users/{docID}').onCreate((snap) => {
      const newAdminUser = snap.data();
    if (newAdminUser === undefined) return;
    modifyAdmin(newAdminUser.uid, true);
  });

exports.removeAdminClaim = functions.firestore.document('admin_users/{docID}').onDelete((snap) => {
    const deletedAdminUser = snap.data();
    if (deletedAdminUser === undefined) return;
    removeAdmin(deletedAdminUser.uid, false);
  });
  
function modifyAdmin (uid) {
  admin.auth().setCustomUserClaims(uid, {admin: true})
  }

function removeAdmin (uid) {
  admin.auth().setCustomUserClaims(uid, {admin: false})
  }

const WEBHOOK_URL = 'https://api.netlify.com/build_hooks/5f3bb37c0f4976d8c039f442';

exports.postArticleBuild = functions.firestore.document('articles/{docID}').onCreate(async () => {
  const response = await request({
    uri: WEBHOOK_URL,
    method: 'POST',
  });
  if (response.statusCode >= 400) {
    throw new Error(`HTTP Error: ${response.statusCode}`);
  }
  // console.log('SUCCESS! Posted', snap.ref);
});