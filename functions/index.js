const functions = require('firebase-functions');
const admin = require('firebase-admin');


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