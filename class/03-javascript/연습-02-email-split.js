const email = "gjeodnr2@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['gjeodnr2', 'gmail.com']
let userMail = email.split("@")[0]
// undefined
userMail
// 'gjeodnr2'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['g', 'j', 'e', 'o']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['g', 'j', 'e', 'o', '*', '*', '*', '*']
maskingMail.join("-")
// 'g-j-e-o-*-*-*-*'
maskingMail.join("")
// 'gjeo****'
maskingMail.join("") + "@" + company
// 'gjeo****@gmail.com'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'gjeo****@gmail.com