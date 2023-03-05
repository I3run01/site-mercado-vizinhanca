import styled from "styled-components";

export const MenubarStytle = styled.div`

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