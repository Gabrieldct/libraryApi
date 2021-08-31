const Books = {};
  
  const book = Object.create(Books);
  
        book.id = 1,
        book.title = 'spirit',
        book.author = 'semana',
        book.pubYear= 2021,
        book.pages=[
            {
                number: 1,
                content:'el spirit bailaba'
            },
            {
                number: 2,
                content:'el spirit bailaba 2'
            },
            {
                number: 3,
                content:'el spirit bailaba 3'
            }
        ]
  

  // expected output: "My name is Matthew. Am I human? true"
  
//new Object = book[]
// const books = [
//     {
//         id: 1,
//         title : 'spirit',
//         author : 'semana',
//         pubYear: 2021,
//         pages:[
//             {
//                 number: 1,
//                 content:'el spirit bailaba'
//             },
//             {
//                 number: 2,
//                 content:'el spirit bailaba 2'
//             },
//             {
//                 number: 3,
//                 content:'el spirit bailaba 3'
//             }
//         ]
//     },
//     {
//         id: 2,
//         title : 'djinn',
//         author : 'semana',
//         pubYear: 2021,
//         pages:[
//             {
//                 number: 1,
//                 content:'el djinn bailaba'
//             },
//             {
//                 number: 2,
//                 content:'el djinn bailaba 2'
//             },
//             {
//                 number: 3,
//                 content:'el djinn bailaba 3'
//             }
//         ]
        
//     },
//     {
//         id: 3,
//         title : 'chupacabra',
//         author : 'semana',
//         pubYear: 2021,
//         pages:[
//             {
//                 number: 1,
//                 content:'el chupacabra bailaba'
//             },
//             {
//                 number: 2,
//                 content:'el chupacabra bailaba 2'
//             },
//             {
//                 number: 3,
//                 content:'el chupacabra bailaba 3'
//             }
//         ]
//     }
// ]
module.exports = books;