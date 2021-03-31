const data = [
  {
    imageFileName: "dog-walking.png",
    question: `나는 
      매일 1시간 이상
      산책을 나갈 수 있다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `반려견의 건강을 위해서는
        비가오나 눈이오나 
        산책이 필요합니다.`,
      explanation: `산책을 통해 반려견은 
        다양한 자극을 만나 
        에너지를 소모하게 됩니다.
        
        산책이 부족한 개는 
        사람을 향해 짖거나 
        집안 물건을 파괴하는 등 
        나쁜 습관이 생길 수 있습니다.
        
        따라서 매일 1시간 이상 
        산책을 해야 합니다.`,
    },
    titleOnResult: "매일 산책을 할 수 있다",
  },
  {
    imageFileName: "veterinarian.png",
    question: `나는 
      매달 10만원이상의 
      병원비를 감당할 수 있다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `반려견은 자주 아플 수 있고,
        동물병원 1회 평균 진료비는 
        약 7,4700원 입니다.`,
      explanation: `특히 보험이 적용되지 않아
        큰 비용이 발생하는 편입니다.
        
        유전적으로 슬개골이 약한 
        우리 강아지(2.7kg)는 
        슬개골 수술로 
        170만원이 들었습니다. 
        
        포도 섭취로 인한
        엑스레이, 구토처치로는
        20만원이 들었습니다.
        
        따라서 반려견과 함께 한다면 
        나중을 위해 병원비를 
        미리 저축하기를 추천합니다.`,
    },
    titleOnResult: "병원비를 감당할 수 있다",
  },
  {
    imageFileName: "puppy.png",
    question: `개는
      밥만 잘 챙겨주면 
      충분하다`,
    answer: "NO",
    answerDesc: {
      answerTitle: `반려견의 건강을 위해 
        주기적으로 
        케어가 필요합니다.`,
      explanation: `심장사상충, 외부구충제, 
        털 / 발톱관리, 
        빗질, 귀청소, 
        위생미용, 항문낭짜기, 
        매일 양치질하기 등 

        반려견이 
        건강한 생활을 하기 위해서는
        보호자의 시간과 노력이 
        요구됩니다.`,
    },
    titleOnResult: "반려견을 매일 케어할 수 있다.",
  },
  {
    imageFileName: "animals_meet.png",
    question: `나는
      산책할 때
      다른 개에게 다가가는게
      좋다고 생각한다.`,
    answer: "NO",
    answerDesc: {
      answerTitle: `다른 반려견에게 
        무턱대고 다가가는 건 
        위험합니다.`,
      explanation: `다른 반려견이 
        어떤 성향을 가졌는지
        알지 못하기 때문에 
        무작정 만나게 해서는 안됩니다. 
        
        상대 보호자에게 
        서로 만나게 해줘도 되는지 묻고, 
        그 만남이 부정적인 경험이 
        되지 않도록 관찰해야 합니다.`,
    },
    titleOnResult: "다른 개와 만날 땐 조심한다.",
  },
  {
    imageFileName: "chicken.png",
    question: `개는 다 잘먹으니까
      다양하게 주는 게 좋다고
      생각한다.`,
    answer: "NO",
    answerDesc: {
      answerTitle: `다 잘먹기 때문에
        먹으면 안되는 음식을 알고
        반드시 조심해야 합니다.`,
      explanation: `포도와 건포도 (급성신부전증)
        초콜릿(위장장애, 경련, 부정맥)
        자이리톨(저혈당 쇼크)
        마늘과 양파(용해성 빈혈)
        모든 과일 씨(장폐색)
        각종 뼈 간식(장 천공)
        
        인간에게 좋은 음식도
        개에게는 해로울 수 있다는 사실을
        반드시 명심해야 합니다.`,
    },
    titleOnResult: "개가 먹으면 위험한 음식이 있다",
  },
  {
    imageFileName: "walking-the-dog.png",
    question: `나는 
      반려견 교육이 
      필요하다고 생각한다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `반려견과 생활하다보면
        짖음, 배변, 공격성 등
        예상치 못한 문제가
        생길 수 있습니다.`,
      explanation: `보호자는 문제를 해결하기 위해서
        시간과 노력을 들여
        필요한 교육을 진행해야 합니다.
        
        기다려 훈련
        사람들에게 달려들지 않기
        이물질 먹지 않기
        산책 예절 훈련 `,
    },
    titleOnResult: "반려견 교육은 매우 중요하다",
  },
  {
    imageFileName: "family.png",
    question: `나는
      반려견을 케어하는데 
      도움을 받을 사람이 있다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `병원입원, 출장, 야근,여행 등 피치 못할 사정이 
        충분히 생길 수 있습니다.`,
      explanation: `가족, 지인, 호텔링 등
        어디서 도움을 받을 수 있는지
        미리 알아두길 추천합니다.
        
        어려움이 생겼을때 
        도움 받을 곳을 미리 알고 있다면
        급한 상황에서
        빠르게 도움을 받을 수 있습니다.`,
    },
    titleOnResult: "반려견 케어를 도와줄 사람이 있다",
  },
  {
    imageFileName: "health.png",
    question: `나는
      개의 평균 수명에 대해
      알고 있다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `반려견의 평균 수명은 
        10년 이상입니다.`,
      explanation: `사람이 나이들면 
        노화가 진행되듯이 
        반려견도 늙으면 질병에 걸리고
        많이 아플 수 있습니다.
        
        잘 가리던 배변, 배뇨를 
        실수하기도 하고, 
        방향감각을 상실할 수도 있습니다.
        
        개와 함께 하겠다는 건
        가족으로서 
        어떤 상황에서도 너와 끝까지 함께
        하겠다는 것을 의미합니다.`,
    },
    titleOnResult: "개의 평균 수명을 알고 있다",
  },
  {
    imageFileName: "pets.png",
    question: `나는
      개와 함께 하면서
      내 삶이 달라진다는 것을
      잘 알고 있다.`,
    answer: "YES",
    answerDesc: {
      answerTitle: `반려견과 함께하는 삶이란?`,
      explanation: `집을 오랜 시간 비울 수 없다

        반려견 동반이 가능한 곳으로
        여행을 간다
        
        피곤해도 산책을 나간다
        
        집을 나서기 전에 
        돌돌이로 털을 제거한다. 
        
        청소를 하지 않으면 
        털뭉치가 굴러다닌다.
        
        흥분해서 짖는 반려견을 위해
        필요한 교육을 알아본다
        
        동물병원에서 다녀오느라
        주말 오전을 다 보낸다.`,
    },
    titleOnResult: "개와 함께하는 삶에 대해 자세히 알고 있다",
  },
];

export default data;
