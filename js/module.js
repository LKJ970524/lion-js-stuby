//~ 내보내기 폴더이다 주의해서 건드려라

// 기본 내보내기
export default 123

//! 하나의파일에서 내보낼수있는 데이터는 딱 하나밖에 없다(default를 한번밖에 못쓴다는것이다.)


// 이름 내보내기
export const str = 'ABC'
export const arr = []
export function hello() {}

//! 이름 내보내기는 기본 내보내기처럼 하나만 내보내는게 아니라 여러개 내보내는게 가능하다.
//! 이름 내보내기는 내보낼때 import {} from 방식을 써야한다.
//! 이름 내보내기를 했을때 다른 이유로 이름을 바꾸고싶은경우 (변수이름 as 새로운변수이름) 이렇게 바꿔봐라


//? 기본, 이름 이런거 신경안쓰고 모든 내용을 내보내고 싶다면 (* as 새로운변수이름)을 써봐라
//? * : 와일드카드라고 불리움