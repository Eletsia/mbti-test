import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function getArray1(r, c, value) {
    const result = new Array(r);
    for (let i = 0; i < r; i++) {
      result[i] = new Array(c).fill(value);
    }
    return result;
  }
  const client = [
    {
      name: "오나연",
      Tue: [9, 10],
      Wed: [9, 10],
      Thu: [8, 9, 10, 11],
      count: 0,
    },
    { name: "우혜영", Mon: [17, 18, 19, 20, 21, 22], Thu: [22], count: 0 },
    {
      name: "박민지",
      Mon: [19, 20, 21, 22],
      Tue: [19, 20, 21, 22],
      Wed: [19, 20, 21, 22],
      Thu: [19, 20, 21, 22],
      Sat: [10],
      count: 0,
    },
    { name: "최유승", Fri: [10], Sat: [11], count: 0 },
    { name: "정지윤", Mon: [10, 11], Wed: [10, 11], count: 0 },
    {
      name: "김정훈",
      Mon: [23],
      Tue: [23],
      Wed: [23],
      Thu: [23],
      Fri: [23],
      Sat: [8],
      count: 0,
    },
    {
      name: "유지은",
      Tue: [11, 12],
      Wed: [18, 19, 20],
      Thu: [19, 20],
      Fri: [18, 19, 20, 21],
      count: 0,
    },
    {
      name: "박주언",
      Mon: [11, 12],
      Tue: [11, 12],
      Wed: [11, 12],
      Thu: [11, 12],
      count: 0,
    },
    {
      name: "이지은",
      Mon: [18, 19],
      Tue: [18, 19],
      Wed: [18, 19],
      Thu: [18, 19],
      Fri: [18, 19],
      count: 0,
    },
    { name: "고민구", Sat: [9], count: 0 },
    { name: "심민규", Wed: [16, 17], Fri: [16, 17], count: 0 },
    {
      name: "홍지희",
      Tue: [19, 20],
      Wed: [19, 20],
      Thu: [19, 20],
      Fri: [19, 20],
      count: 0,
    },
    { name: "윤여정", Mon: [11], Fri: [11], count: 0 },
    { name: "김수빈", Mon: [16, 17], Tue: [16, 17], count: 0 },
    {
      name: "천다정",
      Tue: [10, 11, 12, 13, 14, 15, 16, 17, 18],
      Thu: [11, 12],
      Fri: [17, 18],
      count: 0,
    },
    { name: "안지은", Tue: [21], Thu: [21], count: 0 },
    { name: "이창수", Tue: [20, 21, 22], Wed: [20, 21, 22], count: 0 },
    { name: "김요한", Mon: [21, 22], Wed: [21, 22], Thu: [21, 22], count: 0 },
    { name: "전나경", Tue: [17], Thu: [17], count: 0 },
    { name: "권민정", Tue: [20], Thu: [20], count: 0 },
    {
      name: "복혜숙",
      Mon: [21, 22],
      Tue: [21, 22],
      Thu: [21, 22],
      Fri: [21, 22],
      count: 0,
    },
    {
      name: "유달수",
      Mon: [21, 22],
      Tue: [21, 22],
      Thu: [21, 22],
      Fri: [21, 22],
      count: 0,
    },
    { name: "이정자", Mon: [21], Tue: [21], Wed: [21], Thu: [21], count: 0 },
    { name: "이유진", Mon: [14], Tue: [14], count: 0 },
    {
      name: "김민호",
      Mon: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      Wed: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      Fri: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      count: 0,
    },
    {
      name: "김화연",
      Mon: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      Tue: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      Thu: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      count: 0,
    },
    { name: "원상연", Tue: [19], Wed: [19], count: 0 },
    { name: "엄지강", Mon: [19, 20], Wed: [19, 20], Fri: [19, 20], count: 0 },
    { name: "이경아", Wed: [9], count: 0 },
    { name: "배주성", Wed: [22], count: 0 },
    {
      name: "박윤수",
      Mon: [16, 17],
      Tue: [16, 17, 18, 19, 20, 21],
      Wed: [16, 17],
      Thu: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      Fri: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      Sat: [9, 10, 11, 12, 13],
      count: 0,
    },
    { name: "제설아", Mon: [13], Fri: [19, 20], count: 0 },
    { name: "문선웅", Wed: [14], count: 0 },
  ];

  // 시작시간 x 종료시간 z 요일 0~6 y
  function initSchedule(schedule, x, y, z) {
    for (let i = x; i < z + 1; i++) {
      schedule[i][y] = "됍니다";
    }
  }

  function checkClient() {}
  function makeSchedule(schedule) {
    for (let i = 0; i < 25; i++)
      for (let j = 0; i < 6; j++) {
        if (schedule[i][j] === "됍니다") schedule[i][j] = checkClient();
      }
  }

  client.sort((a, b) => {
    const lengthA = Object.values(a)
      .filter((value) => Array.isArray(value))
      .reduce((sum, arr) => sum + arr.length, 0);
    const lengthB = Object.values(b)
      .filter((value) => Array.isArray(value))
      .reduce((sum, arr) => sum + arr.length, 0);
    return lengthA - lengthB;
  });

  console.log(client);

  // function isOkay(client.name){

  // }
  // 시간 테이블
  //[요일][시간]0-23
  // 상태변수 0 = 가능
  // 상태변수 1 = 불가능
  // 상태변수 2 = 이미 채워진 자리
  var schedule = getArray1(25, 7, "안돼요");
  schedule[0][0] = "월월월";
  schedule[0][1] = "화화화";
  schedule[0][2] = "수수수";
  schedule[0][3] = "목목목";
  schedule[0][4] = "금금금";
  schedule[0][5] = "토토토";
  schedule[0][6] = "일일일";

  initSchedule(schedule, 8, 0, 24);
  initSchedule(schedule, 8, 1, 24);
  initSchedule(schedule, 8, 2, 24);
  initSchedule(schedule, 8, 3, 24);
  initSchedule(schedule, 8, 4, 24);
  initSchedule(schedule, 8, 5, 24);
  initSchedule(schedule, 8, 6, 24);

  console.log(schedule);
}

export default App;
