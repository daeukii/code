let persons = [
    { name: "철수", age: 17 },
    { name: "영희", age: 22 },
    { name: "도우너", age: 5 },
    { name: "그루트", age: 351 },
    { name: "도비", age: 70 }
]
// undefined
for (let count = 0; count < persons.length;
    count++) {
    if (persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM3571:6 미성년자입니다
// VM3571:4 성인입니다
// VM3571:6 미성년자입니다
// 2VM3571:4 성인입니다
// undefined
for (let count = 0; count < persons.length;
    count++) {
    if (persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name + "미성년자입니다")
    }
}
// VM3755:6 철수미성년자입니다
// VM3755:4 영희님은 성인입니다
// VM3755:6 도우너미성년자입니다
// VM3755:4 그루트님은 성인입니다
// VM3755:4 도비님은 성인입니다
// undefined



Math.floor ( Math.random() * 1000000 )
179541
String ( Math.random() * 1000000 )
'523032.06622828945'
String ( Math.random() * 1000000 )
'206878.49675362348'
String ( Math.random() * 1000000 )
'352688.4221228215'
String ( Math.random() * 1000000 )
'493452.31844727875'
String ( Math.random() * 1000000 )
'217609.1762630943'
String ( Math.random() * 1000000 )
'779308.3854034953'
String ( Math.random() * 1000000 )
'424005.9390397317'
String ( Math.random() * 1000000 )
'511493.10636178247'
String ( Math.random() * 1000000 )
'721099.5363477425'
String ( Math.random() * 1000000 )
'453659.9285418068'
String ( Math.random() * 1000000 )
'932638.8996487238'
String ( Math.random() * 1000000 )
'412884.2294756541'
String ( Math.random() * 1000000 )
'878630.0903267288'
String ( Math.random() * 1000000 )
'646019.9562115312'
String ( Math.random() * 1000000 )
'930328.5682805663'
String ( Math.random() * 1000000 )
'492522.2645365961'
String ( Math.random() * 1000000 )
'339990.35098191176'
String ( Math.random() * 1000000 )
'936568.5912171879'
String ( Math.random() * 1000000 )
'349579.91619947104'
String ( Math.random() * 1000000 )
'270177.23936099623'
String ( Math.random() * 1000000 ).padStart(6,"0")
'90447.31196584643'
String ( Math.random() * 1000000 ).padStart(6,"0")
'880318.7251640137'
String ( Math.random() * 1000000 ).padStart(6,"0")
'625008.3849225295'
String ( Math.random() * 1000000 ).padStart(6,"0")
'8837.969564480241'
String ( Math.random() * 1000000 ).padStart(6,"0")
'577494.405947202'
let result = String ( Math.random() * 1000000 ).padStart(6,"0")
undefined
result
'384709.11416808853'
