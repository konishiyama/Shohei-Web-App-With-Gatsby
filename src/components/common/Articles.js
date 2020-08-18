import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import {  SubTitle, Button } from '../components/common';
import ArticleRoll from "../components/ArticleRoll"
import {FirebaseContext} from '../Firebase';

const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SeeMore = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover{
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`


export const Articles = () => {
  // const {user} = useContext(FirebaseContext);
  // const[articles, setArticles] = useState([]);
  // const allArticles = articles;
  // const articlesOrdered = allArticles.sort(function(a, b) {
  //   if (a.node.articleNum < b.node.articleNum) {
  //       return 1;
  //   } else {
  //       return -1;
  //   }
  // });
  // const latestPosts = articlesOrdered.slice(0,4);

  // useEffect(() => {
  //   const unsubscribe = firebase.getArticleData({
  //     onSnapshot: (snapshot) => {
  //       console.log(snapshot);
  //       const snapshotArticles = [];
  //       snapshot.forEach(doc => {
  //         snapshotArticles.push({
  //           ...doc.data()
  //         })
  //       })
  //       setArticles(snapshotArticles);
  //     }
  //   })

  //   return () => {
  //     if(unsubscribe){
  //       // unsubscribe();  
  //     }
  //   }
  // }, [])

  return(
  <div>
    <p>Articles</p>
    {/* <ArticleList>
      {latestPosts.map(edge => (
        <ArticleRoll 
          title = {edge.node.title}
          time = {edge.node.time}
          thumnail = {edge.node.thumnail}
          id = {edge.node.id}
          date = {edge.node.date}
          articleNum = {edge.node.articleNum}
        />
      ))}
    </ArticleList>  */}
  </div>
);
}
