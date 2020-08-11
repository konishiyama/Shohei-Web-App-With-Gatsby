import { useEffect, useState } from "react"
import getFirebaseInstance from "./firebase"
import loadFirebaseDependencies from "./loadFirebaseDependencies"


//useAuthでは、ユーザーがログイン・アウトしたとき(onAuthStateChanged())に、当該ユーザーの情報(userResult/getUserProfile)を取得して、ユーザーのpublicProfileのdocumentを持ってきつつ、Stateとしてuserを設定している(この際にusername要素も定義(もってきたpPdocumentのid=document名をusernameとしてステートに設定)している。
function useAuth() {
    const [user, setUser] = useState(null)
    const [firebase, setFirebase] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsubscribe
        let publicProfileUnsubscribe

        loadFirebaseDependencies.then(app => {
            const firebaseInstance = getFirebaseInstance(app)
            setFirebase(firebaseInstance)

            unsubscribe = firebaseInstance.auth.onAuthStateChanged(userResult => {
                if (userResult) {
                    firebaseInstance.getUserProfile({
                        userId: userResult.uid
                    }).then(r => {   
                        //ここで持ってきているrはuserIdが一致するpublicProfilesの中のdocument
                        console.log(r);
                        setUser({
                            ...userResult,
                            username: r.empty ? null : r.docs[0].id,
                            photoURL: r.docs[0].Ud.Ze.proto.mapValue.fields.photoURL ? r.docs[0].Ud.Ze.proto.mapValue.fields.photoURL.stringValue : null,
                             //r.emptyは、userIdが一致するdocumentが存在するかどうかということ。つまりログインしているユーザーが居るか。r.docs[0]idはもってきたpublicProfileドキュメント(r)のID、つまりドキュメント名を指している。
                    })
                    });
                    // get user custom claims
                    /*setLoading(true);
                    Promise.all([
                        firebaseInstance.getUserProfile({ userId: userResult.uid }),
                        firebaseInstance.auth.currentUser.getIdTokenResult(true),
                    ]).then((result) => {
                        const publicProfileResult = result[0]
                        const token = result[1]

                        if (publicProfileResult.empty) {
                            publicProfileUnsubscribe = firebaseInstance.db
                              .collection("publicProfiles")
                              .where("userId", "==", userResult.uid)
                              .onSnapshot((snapshot) => {
                                  const publicProfileDoc = snapshot.docs[0]
                                  if (publicProfileDoc && publicProfileDoc.id) {
                                      setUser({
                                          ...userResult,
                                          admin: token.claims.admin,
                                          username: publicProfileDoc.id,
                                      })
                                  }

                                  setLoading(false)
                              })
                        } else {
                            const publicProfileDoc = publicProfileResult.docs[0]
                            if (publicProfileDoc && publicProfileDoc.id) {
                                setUser({
                                    ...userResult,
                                    admin: token.claims.admin,
                                    username: publicProfileDoc.id,
                                })
                            }

                            setLoading(false)
                        }
                    })*/
                }else{
                    setUser(null);
                }

                setLoading(false);
            })
        })

        return () => {
            if (unsubscribe) {
                unsubscribe()
            }

            if (publicProfileUnsubscribe) {
                publicProfileUnsubscribe()
            }
        }
    }, [])

    return { user, firebase, loading }
}

export default useAuth
