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
    .about-img{
        border-radius: 0.5rem;
    }
    .job-title{
        color: #173b6c;
    }
    .contact{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            &:before{
            content: '> ';
            color: #173b6c;
            font-weight: 600;
            font-size: 18px;
        }}
    }
    .skill{
        background-color: #ffffff;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        white-space: nowrap;
        border: 1px solid #040b14;
        box-shadow: 0 0 0.5rem 0.1rem rgba(0,0,0,0.1);
        font-weight: 500;
    }
`;