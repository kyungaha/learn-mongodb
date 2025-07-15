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

// 삼항연산자
// spread syntax