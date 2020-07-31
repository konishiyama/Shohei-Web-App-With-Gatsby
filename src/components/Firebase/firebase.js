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


  async postArticle({title, content, cover,date}){
    return this.db.collection('articles').doc().set({
      title: title,
      content: content,
      thumnail: cover, 
      date: date
    });
  }


  async getUserProfile({userId}){
    return this.db.collection('publicProfiles').where('userId', '==', userId).get();
    //whereの第一引数はField名であってDocument名ではない。このクエリによってDocumentを持ってきている。
  }

  async register({email, password, username}){
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password); 
    //createWith...はuser.uidという要素をもつオブジェクトをreturnする(lessson40らへん)。他方、このままだと一人のユーザーが紐づくpublicProfileをいくつも作成できてしまうが、その部分はlesson41以降のfirebasecloud functionsnに関する説明で解消する。
    return this.db.collection('publicProfiles').doc(username).set({
      userId: newUser.user.uid,
      Email: newUser.user.email,
    })
  }

  async editProfile({ username, photoURL, userId, email}){
    const update = {
      displayName: username,
      photoURL: photoURL,
    };
    await this.auth.currentUser.updateProfile(update);
    }
  // async editProfile({ username, photoURL, userId, email}){
  //   const update = {
  //     displayName: username,
  //     photoURL: photoURL,
  //   };
  //   const Edituser = 
  //   await this.auth.currentUser.updateProfile(update);
  //   return this.db.collection('publicProfiles').where('userId', '==', userId).set({
  //     Email: Edituser.user.email,
  //     userId: Edituser.user.uid,
  //     userName: Edituser.user.displayName
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
