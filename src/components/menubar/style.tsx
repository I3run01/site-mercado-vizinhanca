import styled from "styled-components";

export const MenubarStytle = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    right: 0;
    left: 0;

    height: 60px;
    background-color: red;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
        height: 100%;

        text-decoration: none;
        color: black;

        display: flex;
        align-items: center;
        
        :hover {
            cursor: pointer;
        }
    }


`