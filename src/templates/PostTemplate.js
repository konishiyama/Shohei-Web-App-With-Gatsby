import React, {useContext} from 'react';
import styled from "styled-components"
import renderHTML from 'react-render-html'
import { PostComments, PageCover } from '../components/common'
import { FirebaseContext } from '../components/Firebase';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  border-bottom: 1px solid 	#f4f4f4
`

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto 1rem;
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

const Title = styled.h2`
  width: 100%;
  text-decoration: none;
  margin-bottom: 1rem;
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

const Content = styled.p`
  margin-top: 1rem;
`

const PostTemplate = (props) => {
  const {firebase} = useContext(FirebaseContext);
  const PostItem = styled.section`
  `
  
  return (
    <section>
      <PageCover>
        <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
        alt="coverImg"></img>
        <p>
          <span>
            COMMUNITY
          </span>
        </p>
      </PageCover>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.5rem 1.45rem`,
        }}
      >
        <PostItem>
        <Container>
          <Title>{props.pageContext.title}</Title>
          <SubContainer>
          {!!props.pageContext.userPhoto &&
            <Image
              src={props.pageContext.userPhoto}
            >
            </Image>
          }
          {!props.pageContext.userPhoto &&
            <Image
              src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
            >
            </Image>
          }
            <div>{props.pageContext.username}</div>
            <span>{props.pageContext.date}</span>
          </SubContainer>
        </Container>
        <Content>{renderHTML(props.pageContext.content)}</Content>
        </PostItem>
        {!!firebase &&  
        <PostComments
            firebase= {firebase}
            postId= {props.pageContext.id}
          />
        }
      </div>
    </section>
  )
};

export default PostTemplate;