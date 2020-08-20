import React, { useContext, useState, useEffect } from "react"
import styled, { ThemeConsumer } from "styled-components"
import ArticleRoll from "../ArticleRoll"
import {FirebaseContext} from '../Firebase';
import { Input } from '.';


const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  ul:after{
    content:"";
    display:block;
    width: 160px;
    height:160px;
  }
`

export const BlogPageArticles = ({firebase}) => {
  const[articles, setArticles] = useState([]);
  const articlesOrdered = articles.sort(function(a, b) {
    if (a.articleNum < b.articleNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestArticles = articlesOrdered.slice(0,12);

  useEffect(() => {
    const unsubscribe = firebase.subscribeToArticles({
      onSnapshot: (snapshot) => {
        console.log(snapshot);
        const snapshotArticles = [];
        snapshot.forEach(doc => {
          const data = doc.Ud.Ze.proto.mapValue.fields;
          snapshotArticles.push({
            articleNum: data.articleNum,
            content: data.content,
            date: data.date,
            thumnail: data.thumnail,
            title: data.title,
            ...doc.data()
          })
        })
        setArticles(snapshotArticles);
      }
    })

    return () => {
      if(unsubscribe){
        // unsubscribe();  
      }
    }
  }, [])

  return(
  <>
  <section>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
        <ArticleList>
      {latestArticles.map(article => (
         <ArticleRoll 
          title = {article.title}
          time = {article.time}
          thumnail = {article.thumnail}
          id = {article.id}
          date = {article.date}
          articleNum = {article.articleNum}
        />
      ))}
       </ArticleList>
    </div>
  </section>
  </>
);
};
