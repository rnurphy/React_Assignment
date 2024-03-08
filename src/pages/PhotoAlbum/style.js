import { css } from "@emotion/react";



export const imgContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    
    /* border: 1px solid white; */
    margin: 10px;
    width: auto;
    padding: 5px;

    flex-wrap: wrap;
    overflow-y: auto;
`

export const imgBox = css`
    /* border: 1px solid white; */
    border-radius: 25%;

    width: 190px;
    height: 190px;
    overflow: hidden;
    margin-bottom: 3px;

    & > img {
        width: 100%;
        height: 100%;
    }
`