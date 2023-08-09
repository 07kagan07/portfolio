import styled from "styled-components";

export const StyledAbout = styled.section`
    padding: 2rem 0;
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
    }
    .job-title{
        color: #173b6c;
    }
    .contact{
        display: flex;
        gap: 1rem;
        li{
            &:before{
            content: '> ';
            color: #173b6c;
            font-weight: 600;
            font-size: 16px;
        }}
    }
`;