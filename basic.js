// 자바스크립트 기초

// 배열
const dayOfWeeks = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

let i = dayOfWeeks.length -1;
console.log(dayOfWeeks[i]);

// map 예시 : 조작할 내용 작성 (배열 리턴)
const animals = ["cat", "dog", "pig"]
const newAnimals = animals.map((item) => `${item}🔥`); 
console.log("🚀 ~ newAnimals:", newAnimals)

// filter 예시 : 조건식 작성 (배열 리턴)
const filterAnimals = animals.filter((item) => item.startsWith("c"));
console.log("🚀 ~ filterAnimals:", filterAnimals)

// find 예시 : 조건식 작성 (요소 1개만 반환, 여러개면 가장 처음 찾은 애를 반환함)
const findAnimal = animals.find((item) => item.startsWith("c"));
console.log("🚀 ~ findAnimal:", findAnimal)

// some : 해당 조건식에 대해 1개만 만족해도 true, every : 해당 조건식에 모든 경우가 만족해야 true
const someAnimal = animals.some((item) => item.endsWith("g"));
console.log("🚀 ~ someAnimal:", someAnimal)

const everyAnimal = animals.every((item) => item.endsWith("g"));
console.log("🚀 ~ everyAnimal:", everyAnimal)

//logical operatiors

const user = {
    isLoggedIn: true,   // 로그인여부 
    role : "user"      // "user", "guest" 유저의 역할
};

// admin page 에 접근 가능한지 여부
// AND
const isAccessAdminPage = user.isLoggedIn && user.role === 'admin';
if (isAccessAdminPage) {
    console.log("✅관리자 페이지에 접근하실 수 있습니다.");
} else {
    console.log("❌관리자 페이지에 접근하실 수 없습니다.");
}
console.log("🚀 ~ isAccessAdminPage:", isAccessAdminPage);

// OR
const isAccessAdminPage2 = user.isLoggedIn || user.role === 'admin';
if (isAccessAdminPage2) {
    console.log("✅관리자 페이지에 접근하실 수 있습니다.");
} else {
    console.log("❌관리자 페이지에 접근하실 수 없습니다.");
}
console.log("🚀 ~ isAccessAdminPage2:", isAccessAdminPage2);

// 구조분해할당
const double =(num = 1) => {
    console.log("🚀 ~ double ~ num:", num)
    return num * 2;
}
console.log("🚀 ~ double1:", double());
console.log("🚀 ~ double2:", double(2));

// 삼항연산자 : 실행구문이 하나인 경우에 사용가능
 console.log(isAccessAdminPage ? "✅관리자 페이지에 접근하실 수 있습니다." : "❌관리자 페이지에 접근하실 수 없습니다.");
 //score 값이 60점 이상이면 합격
 const score = 50;
 const result = score >= 60 ? "합격" : "탈락";
 console.log("🚀 ~ result:", result);
  
// spread syntax
// 배열이나 객체를 개별요소로 분해하거나 결합할 때 사용하는 문법 : 보통은 결합할때 사용
const copyArr = [...animals, "value"];
console.log("animals", animals);
console.log("copyArr", copyArr);

const todoItem = {
    id: 1,
    content: "React공부하기"
}
const newItem = {
    ...todoItem,
    isComplete: false,
    content: "MongoDB 공부하기" // 기존에 존재하지 않는 키값은 추가, 기존에 존재하는 키값은 수정
}
console.log("🚀 ~ todoItem:", todoItem)
console.log("🚀 ~ newItem:", newItem)

// Javascript 에서 false로 간주 되는 것
// 숫자 0 
// string ""
// null
// undefined

if (!"") {
    //사용자 입력 값이 없는 경우
}
