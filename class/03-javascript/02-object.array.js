const fruits = [
    { number: 1 , title: "레드향" },
    { number: 2, title: "샤인머스캣" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]
// undefined
fruits[0].number + " " + fruits[0].title
// '1 레드향'
fruits[1].number + " " + fruits[1].title
// '2 샤인머스캣'
fruits[2].number + " " + fruits[2].title
// '3 산청딸기'
fruits[3].number + " " + fruits[3].title
// '4 한라봉'




for ( let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].number + " " + fruits[k].title)
}
// VM4764:2 1 레드향
// VM4764:2 2 샤인머스캣
// VM4764:2 3 산청딸기
// VM4764:2 4 한라봉
// VM4764:2 5 사과
// VM4764:2 6 애플망고
// VM4764:2 7 딸기
// VM4764:2 8 천혜향
// VM4764:2 9 과일선물세트
// VM4764:2 10 귤
// undefined


for ( let k = 0; k < fruits.length; k++) {
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
// VM4811:2 1 레드향
// VM4811:2 2 샤인머스캣
// VM4811:2 3 산청딸기
// VM4811:2 4 한라봉
// VM4811:2 5 사과
// VM4811:2 6 애플망고
// VM4811:2 7 딸기
// VM4811:2 8 천혜향
// VM4811:2 9 과일선물세트
// VM4811:2 10 귤
// undefined

for ( let k = 0; k < fruits.length; k++) {
    console.log(`과일 차트 ${fruits[k].number}위는 ${fruits[k].title}입니다`)
}
// VM4938:2 과일 차트 1위는 레드향입니다
// VM4938:2 과일 차트 2위는 샤인머스캣입니다
// VM4938:2 과일 차트 3위는 산청딸기입니다
// VM4938:2 과일 차트 4위는 한라봉입니다
// VM4938:2 과일 차트 5위는 사과입니다
// VM4938:2 과일 차트 6위는 애플망고입니다
// VM4938:2 과일 차트 7위는 딸기입니다
// VM4938:2 과일 차트 8위는 천혜향입니다
// VM4938:2 과일 차트 9위는 과일선물세트입니다
// VM4938:2 과일 차트 10위는 귤입니다
// undefined