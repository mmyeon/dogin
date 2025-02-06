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

const BASE_URL = "https://dogin.mmyeon.com";

function shareToKakao() {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "반려견 입양을 앞두고 계신가요?",
      description: "좋은 보호자가 될 수 있을지 체크해보세요.",
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc3hmUy%2FbtrobNLGc2Q%2F2qzqGs8HOVxZzfn5GLAmO1%2Fimg.png",
      link: {
        mobileWebUrl: BASE_URL,
        webUrl: BASE_URL,
      },
    },
    buttons: [
      {
        title: "나도 테스트 해보기",
        link: {
          mobileWebUrl: BASE_URL,
          webUrl: BASE_URL,
        },
      },
    ],
  });
}

async function copyToClipboard(url: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    return false;
  }
}

const StyledModal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCopy = async () => {
    const isSuccess = await copyToClipboard(BASE_URL);

    if (isSuccess) {
      window.alert("주소가 복사되었습니다.😊");
      setIsOpen(false);
    } else {
      window.alert("주소 복사에 실패했습니다. 다시 시도해주세요.");
    }
  };

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

            <LinkButton onClick={handleCopy} className="button">
              <i className="fas fa-link fa-2x"></i>
            </LinkButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
};

export default StyledModal;
