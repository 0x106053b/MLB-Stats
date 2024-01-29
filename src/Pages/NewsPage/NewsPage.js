import React, { useEffect, useState } from 'react'
import instanceNews from './../../Api/axiosNews';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import "./NewsPage.css"
import AppAni from '../../Animation/AppAni';

const NewsPage = () => {

    const [news, setNews] = useState([]);

    const fetchNewsdata = async (word, date, sortBy, apiKey) => {
        // const request = await instanceNews(requestsNews.fetchNews(word, date, sortBy, apiKey));
        const params = { q: word, to: date, sortBy: sortBy, apiKey: apiKey, language: "en" };
        const request = await instanceNews({ params });
        setNews(request.data.articles);
        console.log(request);
    }

    const dateConverter = (date) => {
        const yyyy = date.getFullYear();
        const mm = (date.getMonth() + 1).toString().padStart(2, "0");
        const dd = date.getDate().toString().padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`
    }

    const timeConverter = (times) => {
        const time = new Date(times);
        const date = dateConverter(time);
        const HH = time.getHours().toString().padStart(2, "0");
        const MM = time.getMinutes().toString().padStart(2, "0");
        return `${date}, ${HH}:${MM}`
    }

    const lengthConverter = (str) => {
        return str.substr(0, 200)
    }

    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const dateFormat = dateConverter(date);
        fetchNewsdata("MLB", dateFormat, "publishedAt", "f3cfbbdec0de4d7a8030ecca07498428");
    }, [])

    return (
        <Container
        variants={AppAni}
        initial={"init"}
        animate={"ani"}
        exit={"exit"}>
            <h1 className="team_header">Lastest MLB News</h1>
            <div className="news_wraper">
            <FlexContainer>
                {news &&
                    news.map((article) => (
                        <News className="news">
                            <p className="grid news_title">{article.title}</p>
                            <img className="grid news_thumbnail" src={article.urlToImage} alt="News ThumbNail"/>
                            <p className="grid news_author">
                                {`${article.author} | ${timeConverter(article.publishedAt)}`}
                            </p>
                            <div className="grid news_content">
                                <p>{lengthConverter(article.content)}</p>
                            </div>
                        </News>
                    ))}
            </FlexContainer>
            </div>
        </Container>
    )
}

export default NewsPage

const Container = styled(motion.div)`
    position : relative;
    overflow-x : hidden;
    display : block;
    background-color : white;
    top : 60px;
    margin : 0;
    padding-top : 35px;
    `;

const FlexContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 70px 100px;
    `;

const News = styled.div`
    display : grid;
    column-gap : 20px;
    margin-bottom : 30px;
    border-radius : 15px;
    background-color : white;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.1);
    grid-template-columns : 2fr 1fr;
    border : 0.5px solid rgba(0, 0, 0, 0.2);
    width : 100%;
    padding : 30px;
`;