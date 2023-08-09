import styled from "styled-components";

export const StyledBlogs = styled.section`
    padding: 2rem 0;
    background-color: #d5d7db;
    h3{
        font-size: 32px;
        color:#173b6c;
        &:after{
            content: '';
            display: block;
            width: 3rem;
            height: 0.2rem;
            background-color: #112d55;
            margin: 0.5rem 0;
        }
    }`;
