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


  async uploadImages({image}){
    return this.storage.ref(`/images/${image.name}`).put(image)
  }

  async getImageURL({image}){
    return this.storage.ref("images").child(image.name).getDownloadURL();
  }

  async postArticle({title, content, cover}){
    return this.db.collection('articles').add({ //doc().set()でもいいが、この場合は一旦、doc()として参照しつつ、あとでその参照を利用するのが便利な場合。ってかどっちでもいい。
      title: title,
      content: content,
      thumnail: cover, 
    });
  }

  async getUserProfile({userId}){
    return this.db.collection('publicProfiles').where('userId', '==', userId).get();
  }

  async register({email, password, username}){
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password); 
    return this.db.collection('publicProfiles').doc(username).set({
      userId: newUser.user.uid
    })
  }

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
