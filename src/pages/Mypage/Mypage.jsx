/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import WideButton from "../../components/WideButton/WideButton";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";
import defaultProfile from "../../assets/images/profile/default.jpeg"


/**
 * 
 * 1. 이미지 클릭시 이미지 변경가능해야함.
 * 2. 수정하기 버튼 클릭시 localStorage에 key: user value: JSON데이터
 *  {
 *      nickname: "테스트계정",
 *      namd: "김준일",
 *      birthday: "1994-09-07",
 *      imgUrl: ""
 *  }
 *  저장되어야하고 페이지 로드시 불러와야함.
 * 3. RootHeader의 프로필 이미지도 변경되어야함.
 */
function Mypage(props) {
    const modifyImgRef = useRef();

    const [ nicknameValue, handleNicknameOnChange, setNickname ] = useInput();
    const [ nameValue, handleNameOnChange, setName ] = useInput();
    const [ birthdayValue, handleBirthdayOnChange, setBirthday ] = useInput();
    const [ profileUrl, setProfileUrl ] = useState(defaultProfile);


    useEffect(() => {
        const loadResult = JSON.parse(localStorage.getItem("user"));

        if(!loadResult) {
            return;
        }

        setNickname(loadResult.nickname);
        setName(loadResult.name);   
        setBirthday(loadResult.birthday);
        setProfileUrl(loadResult.imgUrl);
    }, []);

    const applyChange = () => {
        let newProfile = {
            nickname: nicknameValue,
            name: nameValue,
            birthday: birthdayValue,
            imgUrl: profileUrl
        }
        console.log(newProfile);

        localStorage.setItem("user", JSON.stringify(newProfile));
    }

    
    const handleFileChange = (e) => {
        console.log(e.target.files);

        if(e.target.files.length === 0) {
            modifyImgRef.current.value = "";
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            setProfileUrl(e.target.result)
            console.log(e.target.result)
        }

        fileReader.readAsDataURL(e.target.files[0]);
        // localStorage.setItem("imgUrl", JSON.stringify(e.target.result));
    }
    
    
    
    

    return (
        <div css={S.layout}>
            <div css={S.imageBox}>
                <input type="file" style={{display: "none"}} ref={modifyImgRef} onChange={handleFileChange}></input>
                <img src={profileUrl} alt="" onClick={() => modifyImgRef.current.click()}/>
            </div>
            
            <input css={S.inputBox} type="text" placeholder="닉네임" value={nicknameValue} onChange={handleNicknameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="이름" value={nameValue} onChange={handleNameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="생년월일" value={birthdayValue} onChange={handleBirthdayOnChange}/>
            <WideButton text={"수정하기"} onClick={() => applyChange()}/>
        </div>
    );
}

export default Mypage;