import React, { useContext, useState, useEffect, Component } from "react"
import styled, { ThemeConsumer } from "styled-components"
import ArticleRoll from "../ArticleRoll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FirebaseContext} from '../Firebase';
import { Input } from '.';


const ArticleList = styled.ul`
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  justify-content: space-between;
  // ul:after{
  //   content:"";
  //   display:block;
  //   width: 160px;
  //   height:160px;
  // }
`

export const IndexArticles = ({firebase}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 1,
    overflow: false,
  };
  const[articles, setArticles] = useState([]);
  const articlesOrdered = articles.sort(function(a, b) {
    if (a.articleNum < b.articleNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestArticles = articlesOrdered.slice(0,4);

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
    {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      > */}
          <ArticleList>
            <Slider {...settings}>
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
            </Slider>
          </ArticleList>
    {/* </div> */}
  </section>
  </>
);
};
