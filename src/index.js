import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { tab } from '@testing-library/user-event/dist/tab';

class Header extends React.Component {
  render(){
    return(
    <header>
    <a>planszeo</a>
    <form>
        <input placeholder="wpisz tytul gry" type="text" />  
    </form>
    <a>lupka</a>
    <a>nowosci</a>
    <a>rankingi</a>
    <a>o planszeo</a>
    <a>wspolpraca</a>
    <a>blog</a>
    <a>hipek</a>
    </header>
    )
  }  
}


let MonthList = [
  {name:"styczen",num: 1},
  {name:"luty",num: 2},
  {name:"marzec",num: 3},
  {name:"kwiecien",num: 4},
  {name:"maj",num: 5},
  {name:"czerwiec",num: 6},
  {name:"lipiec",num: 7},
  {name:"sierpien",num: 8},
  {name:"wrzesien",num: 9},
  {name:"pazdziernik",num: 10},
  {name:"listopad",num: 11},
  {name:"grudzien",num: 12}
];
let year=2022;
let DisplayMonths = MonthList.map((month, i) =>(
<button key={i}>
  <a href={"#"+month.name+year}>
    {console.log("#"+month.name)}
  {month.name}
  </a>
</button>
));
let YearList = [
  {name:2021},
  {name:2022}
];

let DisplayYear = YearList.map((year, i) =>(
<button key={i} onClick={()=>{if(year.name==2021){
document.getElementsByClassName(".2021").forEach(a=>a.style.display = "");
document.getElementsByClassName(".2022").forEach(a=>a.style.display = "none");
year = 2022
}else{
  document.getElementsByClassName(".2021").forEach(a=>a.style.display = "none");
  document.getElementsByClassName(".2022").forEach(a=>a.style.display = "");
  year =2021
}
}}>
  {year.name}
</button>
));

let ProductsList =[
  {"premiera": "premiera","year": 2022,month:5,day:29,quarter:2,name:"test",image:"produktjpg.jpg"},
  {"premiera": "dodruk","year": 2021,month:5,day:30,quarter:2,name:"test",image:"amongus.jpg"},
  {"premiera": "premiera","year": 2021,month:2,day:1,quarter:1,name:"test",image:"gassy.jpg"},
  {"premiera": "premiera","year": 2021,month:10,day:29,quarter:2,name:"test",image:"produktjpg.jpg"},
  {"premiera": "dodruk","year": 2021,month:11,day:30,quarter:2,name:"test",image:"amongus.jpg"},
  {"premiera": "premiera","year": 2022,month:1,day:1,quarter:1,name:"test",image:"gassy.jpg"},
  {"premiera": "premiera","year": 2021,month:3,day:29,quarter:2,name:"test",image:"produktjpg.jpg"},
  {"premiera": "dodruk","year": 2021,month:4,day:30,quarter:2,name:"test",image:"amongus.jpg"},
  {"premiera": "premiera","year": 2022,month:1,day:1,quarter:1,name:"test",image:"gassy.jpg"},
  {"premiera": "dodruk","year": 2022,month:6,day:2,quarter:2,name:"test",image:"minecraft.jpg"}
  ];
 
function getGamesForMonth(month, year){
  let GamesForMonth =[]
  ProductsList.forEach(element => {
    if(element.month==month && element.year==year){
      GamesForMonth.push(element)
    }
  });
  return(
    GamesForMonth
  )
}
function getGamesForYear(year){
  let GamesForYear =[]
  ProductsList.forEach(element => {
    if(element.year==year){
      GamesForYear.push(element)
    }
  });
  return(
    GamesForYear
  )
}

let GamesByMonth2021 = MonthList.map((element,i)=>{
  return(
    <tr className="2021" style={{display: "none"}} key={element+i} id={element.name+2021}>
      <td>
        {"2021 "+element.name}
      </td>
      <td >
      {getGamesForMonth(element.num,2021)?.map(product=>{
      return( 
      <div className="product">
      {product.premiera}
      <img className="productimg" src={product.image}/>
      {product.name}
       </div>
    )})}
      </td>
    </tr>
  )
})
// console.log(document.getElementsByClassName(2021))
let GamesByMonth2022 = MonthList.map((element,i) =>{
  return(
    <tr className="2022" style={{display: ""}} key={element+i} id={element.name+2022}>
      {console.log(element.name)}
      <td>
        {"2022 "+element.name}
      </td>
      <td>
      {getGamesForMonth(element.num,2022)?.map(product=>{
      return( 
      <div className="product">
      {product.premiera}
      <img className="productimg" src={product.image}/>
      {product.name}
       </div>
    )})}
      </td>
    </tr>
  )
})

let GamesByYear = YearList.map(element =>{
  if(element.name!=year){
  return(
    <tr style={{display: "none"}}>
      <td>
        {element.name}
      </td>
      <td>
      {getGamesForYear(element.name)?.map(product=>{
      return( 
      <div className="product">
      {product.premiera}
      <img className="productimg" src={product.image}/>
      {product.name}
       </div>
    )})}
      </td>
    </tr>
  )
      }else{
        return(
          <tr>
            <td>
              {element.name}
            </td>
            <td>
            {getGamesForYear(element.name)?.map(product=>{
            return( 
            <div className="product">
            {product.premiera}
            <img className="productimg" src={product.image}/>
            {product.name}
             </div>
          )})}
            </td>
          </tr>
        )
      }
})
// class RadioMenu extends React.Component{
//   render(){
//     return(  
//       <div>
//       sortuj latami:<input type="radio" value="rok" name='radio' id='radio' onChange={()=> console.log("rok")}></input>
//       sortuj miesiacami:<input type="radio" value="miesiac" name='radio' id='radio' onChange={()=> console.log("miesiac")}></input>
//       </div>
//     )
//   }
// }

console.log(document.getElementsByClassName("2021"))
let test = "test";
class Main extends React.Component{
  constructor(props) {
    super(props);
  }  
  render(){
    return(
      <main>
        <a href={"#"+test}>siema eniu</a>
      <div>{DisplayYear}</div>
      <div>{DisplayMonths}</div>
      <table>{GamesByYear}{GamesByMonth2021}{GamesByMonth2022}</table> 
      <div>{DisplayYear}</div>
      <div>{DisplayMonths}</div>
      <p id={test}>test</p>
      </main>
    )
  }
}

class Website extends React.Component{
  render(){
    return(
    <div>
      <Header/>
      <div className="app">Aplikacja mobilna planszeo</div>
      <div className="calendar">kalendarz premier i produktow</div>
      <nav>
        {DisplayYear}
        {DisplayMonths}
      </nav>
      <Main/>
      <p>Najlepsze gry planszowe, Wsiąść do Pociągu, Catan, Osadnicy z Catanu, najlepsze planszówki, Carcassonne gra, gry planszowe dla 2 osób, gry planszowe sklep, Splendor, Arnak, Everdell, tanie planszówki, gry na imprezę, Brass: Birmingham, Root, Tajniacy, 5 sekund, Pociągi gra planszowa, top gier planszowych, gry planszowe na prezent, Gloomhaven, Monopoly, Terraformacja Marsa, Scrabble cena, Azul, ranking gier planszowych, gry planszowe na imprezę, gry planszowe dla dzieci, top lista, aktualności gier planszowych, zapowiedzi gier, przedsprzedaże planszówek, kalendarz premier, Wiedźmin.</p>
    </div>
    )
  }
}

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

reportWebVitals();
