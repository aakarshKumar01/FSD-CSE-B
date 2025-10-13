function Book(props){
    const image=React.createElement("img",
        {
            src: props.image,
            width: "150",
            height:"150",
            alt:"book-image"
        },null
    );
    const h4=React.createElement("h4",null,"Price:"+props.price+"/-");
    const child=React.createElement("div",{
        className: "card"
    },image,h4);
    return (child);
} 
const books=[{image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180",price: "123"},
    {image:"https://tse4.mm.bing.net/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?pid=Api&P=0&h=180",price: "321"},
    {image:"https://reactjsexample.com/content/images/2019/04/React-Cookbook.jpg",price: "249"}
]
    
const booklist=books.map(p=>(
    React.createElement(Book,{image:p.image,price:p.price})
))

const bookele=React.createElement("div",{className:"bookList"},booklist);

const parent=document.getElementById("root");
// ReactDOM.render(child,parent); changed in react 19
const root=ReactDOM.createRoot(parent);
// root.render(React.createElement(Book,{
//     image:"https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
//     price:"345/-"
// }));
root.render(bookele);
