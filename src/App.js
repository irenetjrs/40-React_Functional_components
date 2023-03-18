import React, { useState } from "react";
import Article from "./components/Article";

function App () {

  const articleUA = {
    title: 'НОВИНИ NVIDIA',
    subtitle: 'Прискорений штучний інтелект NVIDIA в Azure',
    description: 'Опис статті:',
    prewiew: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
    author: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme: 'Тема: відео карти',
    markAsRead: 'Прочитано',
    markAsUnread: 'Не прочитано',
    buttonRead: 'Читати',
    buttonClose: 'Закрити',
    currentLanguageUA: 'UA'
  }
  const articleEN = {
    title: 'NVIDIA NEWS',
    subtitle: 'NVIDIA Accelerated AI on Azure',
    description: 'Article description:',
    prewiew: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    author: 'Author: Mike',
    published: 'Published: 06.12.2022',
    theme: 'Theme: Video cards',
    markAsRead: 'Mark as read ',
    markAsUnread: 'Mark as unread',
    buttonRead: 'Read',
    buttonClose: 'Close',
    currentLanguageEN: 'EN'
  }
  const article = {
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }
  const [isShow, setIsShow]  = useState(false);
  const [isMark, setMark] = useState(false);
  const [currentLanguage, setLang] = useState('EN');
  const lang = currentLanguage  === 'EN' ? articleEN : articleUA;
  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
    setMark(false);
  };

  return (
    <div className="wrapper">
      <h1 className="title">{lang.title}</h1>
      <div className="article">
          <Article show={isShow} text={lang} mark={isMark}>
          <div className="article__title">
            <h2>{lang.subtitle}</h2>
          </div>
          </Article>
        <div className="article__actions">
          <button onClick={() => setMark(true)} className="article__btn">
            {lang.markAsRead}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? lang.buttonClose : lang.buttonRead}
          </button>
          <button onClick={() => setMark(false)} className="article__btn">
            {lang.markAsUnread}
          </button>
        </div>
      </div>
      <div className="lang">
        <button onClick={() => setLang('UA')} className="lang-btn">
          {lang.currentLanguageUA}
          </button>
        <button onClick={() => setLang('EN')} className="lang-btn">
          {lang.currentLanguageEN}
          </button>
      </div>
    </div> 
    );
  }
export default App;