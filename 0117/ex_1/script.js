// 이벤트 버블링

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 거품처럼 퍼지는 이벤트
// 특정 요소에서 발생한 이벤트가 그 요소의 부모 요소로 전파되는 현상이다.
// 가장 안쪽(자식) 요소에서 발생한 이벤트가 부모 요소를 거슬러 올라가며 이벤트 핸들러를 호출한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 이벤트 버블링 발생 이슈

// 클릭 이벤트 (click)
// 포커스 이벤트 (focus, blur)
// 마우스 이벤트 (mouseenter, mouseleave)
// 키보드 이벤트 (keydown, keyup) 등

// 예시
// 특정 자식 요소를 클릭했는데, 의도하지 않게 부모 요소의 이벤트 핸들러도 실행되는 상황이 발생할 수 있다.
// DOM 트리의 상위 요소에 이벤트 핸들러가 설정되어 있을 경우, 이벤트가 여러 번 전파되면서 불필요한 계산이 발생할 수 있다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 이벤트 버블링 발생 이슈 해결 방법

// 1. event.stopPropagation() : 이벤트 전파  중단
// 2. event.preventDefault() : 기본 동작 중단 - ex) form 제출 시 새로고침을 막아준다.
// 3. event.target : 이벤트를 상위 요소에 위임하고, 이벤트 대상(event.target)을 통해 조건적으로 실행한다.
// 4. event.currentTarget : 이벤트 핸들러 내부에서 event.target 또는 event.currentTarget을 사용하여 특정 요소만 처리한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// localStorage

// 서버에 저장할 정도로 중요하진 않은 정보를 저장하기 위해 사용한다.
// 중요하진 않은 정보 : 정보가 날라가도 상관은 없지만 있으면 편리한 정보

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 로컬스토리지에 데이터 추가하기 or 수정하기
// localStorage.setItem("상품명", "멋있는 셔츠");

// 로컬스토리지에서 데이터 가져오기
// localStorage.getItem("상품명"); // "멋있는 셔츠"

// 로컬스토리지의 데이터 삭제하기
// localStorage.removeItem("상품명");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 로컬스토리지의 문제점

// 1. 저장 및 불러오기 시 데이터가 문자열로만 저장된다.
// 2. Array, Object를 저장하려면 데이터가 이상해진다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 해결 방법

// 1. JSON.stringify() 형태로 저장해야 한다.
// localStorage.setItem("키", JSON.stringify({ name: "병수", age: 30 }));

// 2. 데이터 가져온 후에는 JSON.parse() 사용하여 자바스크립트 객체로 바꿔줘야 한다.
// JSON.parse(localStorage.getItem("키"));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 예제 1

const products = [
    {
        id: 1,
        brand: "아디다스",
        name: "멋진 아디다스 반팔티",
        price: 32000,
    },
    {
        id: 2,
        brand: "나이키",
        name: "멋진 나이키 바지",
        price: 30000,
    },
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 1. 다음의 쇼핑몰 데이터를 로컬스토리지에 넣어주세요.
localStorage.setItem("products", JSON.stringify(products));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 2. 다음 상품을 상품 리스트 (products)에 추가해주세요.
const newProduct = {
    id: 3,
    brand: "뉴발",
    name: "멋진 뉴발 신발",
    price: 78000,
};

localStorage.setItem("products", JSON.stringify([...products, newProduct]));

console.log(newProduct);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 3. id가 1인 상품의 가격을 35000원으로 변경 후, 다시 로컬스토리지에 저장하세요.
const allProducts = JSON.parse(localStorage.getItem("products"));

const changePriceProducts = allProducts.map(function (product) {
    // if (product.id === 1) {
    //     return {
    //         ...product,
    //         price: 35000,
    //     };
    // }
    // return product;

    return product.id === 1 ? { ...product, price: 35000 } : product;
});

localStorage.setItem("products", JSON.stringify(changePriceProducts));

console.log("changePriceProducts => ", changePriceProducts);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 4. id가 1인 상품 삭제하고, 다시 로컬스토리지에 저장하세요.
const deleteProducts = allProducts.filter(function (product) {
    if (product.id !== 1) {
        return product;
    }
});

localStorage.setItem("products", JSON.stringify(deleteProducts));

console.log("deleteProducts => ", deleteProducts);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
