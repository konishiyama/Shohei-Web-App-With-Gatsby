import firebaseConfig from "./config";
import axios from 'axios';

class Firebase {
  constructor(app) {
    if(!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }


  // async uploadImages({image}){
  //   return this.storage.ref(`/images/${image.name}`).put(image)
  // }

  // async getPImageURL({image}){
  //   return this.storage.ref("images").child(image.name).getDownloadURL();
  // }

  // async getImageURL({image}){
  //   return this.storage.ref("images").child(image.name).getDownloadURL();
  // }

  async postArticle({title, content, cover,date}){
    return this.db.collection('articles').doc().set({
      title: title,
      content: content,
      thumnail: cover, 
      date: date
    });
  }

  // async getArticleNumber(){
  //   return this.db.collection('articles').get();
  // }

  async getUserProfile({userId}){
    return this.db.collection('publicProfiles').where('userId', '==', userId).get();
  }

  async register({email, password, username}){
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password); 
    return this.db.collection('publicProfiles').doc(username).set({
      userId: newUser.user.uid,
      Email: newUser.user.email,
    })
  }

  async editProfile({ username, photoURL}){
    const update = {
      displayName: username,
      photoURL: photoURL,
      username: username
    };
    await this.auth.currentUser.updateProfile(update);
  }

  // async editProfile({email, username, userId, photoURL}){
  //   const editUser = await this.auth.updateUserProfile(email, photoURL); 
  //   return this.db.collection('publicProfiles').where('userId', '==', userId).doc(username).set({
  //     Email: editUser.user.email,
  //     userId: editUser.user.uid,
  //   })
  // }

  async postComment({text, articleId}){
    const postCommentCallable = this.functions.httpsCallable('postComment');
    return postCommentCallable({
      text,
      articleId
    });
  }

  async subscribeToArticleComments({articleId, onSnapshot}){
    const articleRef = this.db.collection('articles').doc(articleId); //lesson41,42を参照
    return this.db.collection('comments').where('article' , '==', articleRef).onSnapshot(onSnapshot)
  }

  async login({email, password}) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if(!firebaseInstance && app){
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
  }else if(firebaseInstance){
    return firebaseInstance
  }else{
    return null;
  }
}

export default getFirebaseInstance;
