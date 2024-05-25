// MenuPage.jsx
import React from "react";
import * as S from "./MenuPage.style";

const MenuPage = () => {
  const username = "hepheir"; // 임시 데이터, 실제로는 props나 state에서 받아와야 합니다.
  const userLevel = 2; // 임시 데이터, 실제로는 props나 state에서 받아와야 합니다.
  const streakDays = 55; // 임시 데이터, 실제로는 props나 state에서 받아와야 합니다.
  const streakData = [
    [1, 1, 1, 0, 0, 1, 1], // Week 1
    [1, 0, 1, 1, 0, 1, 1], // Week 2
    [1, 1, 0, 0, 1, 1, 1], // Week 3
    [1, 0, 0, 1, 1, 0, 1], // Week 4
    [0, 1, 1, 0, 0, 1, 1], // Week 5
  ];

  return (
    <S.Container>
      {/* <img sr></img> */}
      <S.HeaderImage src="" />
      <S.ProfileContainer>
        <S.ProfilePic />
        <S.Username>{username}</S.Username>
        <S.UserLevel>사용자 수준: {userLevel}</S.UserLevel>
      </S.ProfileContainer>
      <S.StreakCalendar>
        {streakData.map((week, i) => (
          <S.WeekRow key={i}>
            {week.map((day, j) => (
              <S.DayBox key={j} learned={day} />
            ))}
          </S.WeekRow>
        ))}
      </S.StreakCalendar>
      <S.StreakBox>
        <S.StreakTitle>🪴 스트릭</S.StreakTitle>
        <S.StreakCount>오늘 포함 {streakDays}일</S.StreakCount>
      </S.StreakBox>
      <S.PointsBox href="/store">
        <S.PointsTitle>🪙 포인트 상점 & 인벤토리</S.PointsTitle>
        <S.PointsStatus>스트릭 프리즈 장착 중</S.PointsStatus>
      </S.PointsBox>
      <S.TestCategory>
        <S.CategoryTitle>🗡 단어 테스트</S.CategoryTitle>
        <S.TestOption href="/testChoice">🍏 일반 단어 맞추기</S.TestOption>
        <S.TestOption href="/test">🍎 내 수준 점검하기</S.TestOption>
      </S.TestCategory>
      <S.AdminBox>
        <S.AdminOption href="/wordManage">🔍 단어 관리</S.AdminOption>
      </S.AdminBox>
      <S.LogoutBox>
        <S.LogoutButton href="/">로그아웃</S.LogoutButton>
      </S.LogoutBox>
    </S.Container>
  );
};

export default MenuPage;
