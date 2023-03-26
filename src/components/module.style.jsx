import styled from "styled-components";


export const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

export const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: contain;
    }
    p{
        position: absolute;
        left: 50%;
        z-index: 10;
        bottom: 0%;
        font-weight: 600;
        text-align: center;
        width: 100%;
        color: white;
        height: 40%;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, 0%);
    }
`;

export const Gradeint = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.1))
`;