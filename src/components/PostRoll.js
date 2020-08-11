import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const EachPost = styled.div`
  padding: 0.5em;
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid #f4f4f4;
  &:hover{
    cursor: pointer;
    background-color: #f4f9ef;
    transition: all 0.2s ease-in;
    p{
      text-decoration: underline;
      color: #4c9c41;
      transition: all 0.4s ease-in;
    }
  }
`

// const PostLink = styled.a`
// `

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  div{
    text-align: left;
    color: #888;
  }
  span{
    text-align: left;
    color: #888;
  }
  span:before {
    content: "|";
    padding: 0 0.5em;
    font-size: 0.8em;
    color: #ccc;
  }
`

const Title = styled.p`
  width: 100%;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: #02102e;
  text-align: left;
  letter-spacing: normal;

`

const Image = styled.img`
  width: 1.5em;
  height: 1.5em;
  text-align: left;
  object-fit: cover;
  border-radius: 50%;
  border: solid 1px;
  border-color: #EEEEEE; 
  margin-bottom: 0;
  margin-right: 0.2em;

`

const PostRoll = (props) => {
  return(
    <>
      <EachPost>
        <Link 
          to={`/member/${props.id}`}
        >
        <Container>
          <Title>{props.title}</Title>
          <SubContainer>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
            >
            </Image>
            <div>{props.username}</div>
            <span>{props.date}</span>
            <span>views</span>
          </SubContainer>
        </Container>
        </Link>
      </EachPost>
    </>
    )
}

export default PostRoll
