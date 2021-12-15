import React, { useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalShadow = styled.div`
  background: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5em;
  border-radius: 10px;
`;

const ModalTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1em;
  letter-spacing: 1px;
  word-break: keep-all;
  white-space: break-spaces;
  line-height: 1.1em;
`;

const ModalContent = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  > .home-url {
    position: absolute;
    width: 20px;
    top: -9000px;
  }

  > .button {
    cursor: pointer;
  }

  > .button + .button {
    margin-left: 1.5em;
  }
`;

const KakaoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 68px;
  height: 68px;
  background: #fee500;
  border-radius: 50%;
`;

const LinkButton = styled.button`
  width: 68px;
  height: 68px;
  background: mediumaquamarine;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: black;
`;

const StyledModal = ({ setIsOpen }) => {
  const { Kakao } = window;
  const urlInput = useRef(null);

  return (
    <ModalContainer>
      <ModalShadow onClick={() => setIsOpen(false)} />
      <Modal>
        <ModalContent>
          <ModalTitle>친구에게 공유해 보세요 😊 </ModalTitle>
          <ButtonContainer>
            <KakaoButton className="button">
              <img
                onClick={shareToKakao}
                src="/assets/kakaotalk.svg"
                alt="kakao share"
              />
            </KakaoButton>

            <LinkButton onClick={copyToClipboard} className="button">
              <i className="fas fa-link fa-2x"></i>
            </LinkButton>

            <input
              type="text"
              className="home-url"
              value="https://dogin.mmyeon.com"
              readOnly
              ref={urlInput}
            />
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );

  function shareToKakao() {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "반려견 입양을 앞두고 계신가요?",
        description: "좋은 보호자가 될 수 있을지 체크해보세요.",
        imageUrl: "https://ifh.cc/g/ChgM59.jpg",
        link: {
          mobileWebUrl: "https://dogin.mmyeon.com",
          webUrl: "https://dogin.mmyeon.com",
        },
      },
      buttons: [
        {
          title: "나도 테스트 해보기",
          link: {
            mobileWebUrl: "https://dogin.mmyeon.com",
            webUrl: "https://dogin.mmyeon.com",
          },
        },
      ],
    });
  }

  function copyToClipboard() {
    const homeUrlInput = urlInput.current;
    homeUrlInput.select();
    document.execCommand("copy");
    window.alert("주소가 복사되었습니다.😊");
    setIsOpen(false);
  }
};

export default StyledModal;
