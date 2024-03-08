/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./style";
import defaultImg from "../../assets/images/profile/default.jpeg"
import { useEffect, useState } from "react";

function RootHeader() {

    const [ headerImg, setHeaderImg ] = useState(defaultImg);

    useEffect(() => {
        setHeaderImg(!localStorage.getItem("user") ? defaultImg : JSON.parse(localStorage.getItem("user")).imgUrl);
    }, [])



    return (
        <div css={S.layout}>
            <Link css={S.titleLink} to={"/"}>
                <h1>사진첩 어플</h1>
            </Link>
            <Link css={S.mypageLink} to={"/mypage"}>
                <img src={headerImg} alt="" />
            </Link>
        </div>
    );
}

export default RootHeader;