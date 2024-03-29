import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children}
    <ArticleBody show={props.show} text={props.text} mark={props.mark}/>
    <ArticleAuthor text={props.text}/> 
    </>
    );
  }
  export default Article;


