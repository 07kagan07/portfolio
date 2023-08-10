import styled from "styled-components";

export const StyledCard = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
img{
    height: 300px;
    object-fit: cover;
}
.card-text{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
`;