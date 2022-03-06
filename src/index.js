import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { tab } from '@testing-library/user-event/dist/tab';
import amongus from "./amongus.jpg";
import gassy from "./gassy.jpg"
import minecraft from "./minecraft.jpg"
import produkt from "./produktjpg.jpg"

class SearchEngine extends React.Component {
  render(){
    return(
      <form>
      <input placeholder="wpisz tytul gry" type="text" />  
    </form>
    )}}

class Header extends React.Component {
  render(){
    return(
    <header>
    <a>planszeo</a>
    <SearchEngine/>
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
  {month.name}
  </a>
</button>
));
let YearList = [
  {name:2021},
  {name:2022}
];
let y2021 = [
  {name:2021}
]
let y2022 = [
  {name:2022}
]

let DisplayYear = YearList.map((year, i) =>(
<button key={i} onClick={()=>{if(year.name==2021){
document.getElementById("rok2021").style.display = "";
document.getElementById("rok2022").style.display = "none";
year = 2022
}else{
  document.getElementById("rok2021").style.display = "none";
  document.getElementById("rok2022").style.display = "";
  year =2021
}
}}>
  {year.name}
</button>
));

let ProductsList =[
  {"premiera": "premiera","year": 2022,month:7,day:29,quarter:2,name:"test1",image: amongus},
  {"premiera": "dodruk","year": 2022,month:5,day:30,quarter:2,name:"test2",image:amongus},
  {"premiera": "premiera","year": 2022,month:11,day:1,quarter:1,name:"test3",image:minecraft},
  {"premiera": "premiera","year": 2022,month:11,day:29,quarter:2,name:"test4",image:gassy},
  
  {"premiera": "premiera","year": 2022,month:9,day:29,quarter:2,name:"test5",image:minecraft},
  {"premiera": "dodruk","year": 2022,month:10,day:30,quarter:2,name:"test6",image:amongus},
  {"premiera": "premiera","year": 2022,month:10,day:1,quarter:1,name:"test7",image:produkt},
  {"premiera": "premiera","year": 2022,month:11,day:29,quarter:2,name:"test8",image:gassy},
  
  {"premiera": "premiera","year": 2022,month:8,day:29,quarter:2,name:"test9",image:produkt},
  {"premiera": "dodruk","year": 2022,month:8,day:30,quarter:2,name:"test10",image:produkt},
  {"premiera": "premiera","year": 2022,month:8,day:1,quarter:1,name:"test11",image:gassy},
  {"premiera": "premiera","year": 2022,month:12,day:29,quarter:2,name:"test12",image:amongus},
  {"premiera": "dodruk","year": 2022,month:12,day:30,quarter:2,name:"test13",image:gassy},
  {"premiera": "premiera","year": 2022,month:2,day:1,quarter:1,name:"test14",image:minecraft},
  {"premiera": "premiera","year": 2022,month:2,day:29,quarter:2,name:"test15",image:minecraft},
  {"premiera": "dodruk","year": 2022,month:4,day:30,quarter:2,name:"test16",image:minecraft},
  {"premiera": "premiera","year": 2022,month:1,day:1,quarter:1,name:"test17",image:amongus},
  {"premiera": "premiera","year": 2022,month:5,day:29,quarter:2,name:"test18",image:produkt},
  {"premiera": "dodruk","year": 2021,month:5,day:30,quarter:2,name:"test19",image:gassy},
  {"premiera": "premiera","year": 2021,month:2,day:1,quarter:1,name:"test20",image:produkt},
  {"premiera": "premiera","year": 2021,month:10,day:29,quarter:2,name:"test21",image:produkt},
  {"premiera": "dodruk","year": 2021,month:11,day:30,quarter:2,name:"test22",image:amongus},
  {"premiera": "premiera","year": 2022,month:1,day:1,quarter:1,name:"test23",image:minecraft},
  {"premiera": "premiera","year": 2021,month:3,day:29,quarter:2,name:"test24",image:minecraft},
  {"premiera": "dodruk","year": 2021,month:4,day:30,quarter:2,name:"test25",image:produkt},
  {"premiera": "premiera","year": 2022,month:1,day:1,quarter:1,name:"test26",image:produkt},
  {"premiera": "dodruk","year": 2022,month:6,day:2,quarter:2,name:"test27 ",image:amongus}
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
    <tr className="2021" key={element+i} id={element.name+2021}>
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
let GamesByMonth2022 = MonthList.map((element,i) =>{
  return(
    <tr className="2022" style={{display: ""}} key={element+i} id={element.name+2022}>
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

let GamesByYear2021 = y2021.map(element =>{
  return(
    <tr >
      <td>
        {element.name}
      </td>
      <td>
      {getGamesForYear(2021)?.map(product=>{
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

let GamesByYear2022 = y2022.map(element =>{
  return(
    <tr >
      <td>
        {element.name}
      </td>
      <td>
      {getGamesForYear(2022)?.map(product=>{
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

class Main extends React.Component{
  constructor(props) {
    super(props);
  }  
  render(){
    return(
      <main>
      <div>{DisplayYear}</div>
      <div>{DisplayMonths}</div>
      <table id="rok2022">{GamesByYear2022}{GamesByMonth2022}</table>
      <table id="rok2021" display="none">{GamesByYear2021}{GamesByMonth2021}</table> 
      <div>{DisplayYear}</div>
      <div>{DisplayMonths}</div>
      
      </main>
    )
  }
}
class Foot extends React.Component{
  render(){
    return(
      <footer>
        <div class="footer_section">
            planszeo<br/>
            copyright blabla<br/>
            wszelkie prawa zastrzezone
        </div>
        <div class="footer_section">
            przedsprzedaz<br/>
            planszeo poleca<br/>
            top listy<br/>
            aktualnosci<br/>
            ekipa<br/>
            o nas<br/>
            blog<br/>
        </div>
        <div class="footer_section">
            dolacz do nas<br/>
            dolacz do nas<br/>
            dolacz do nas<br/>
            jak dzialaja rekomendacje<br/>
            newsletter<br/>
            aplikacja mob
        </div>
        <div class="footer_section">
            polityka prywatrnsci<br/>
            regulamin serwisu<br/>
            wsparcie techniczne<br/>
        </div>
        </footer>
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
      <Foot/>
    </div>
    )
  }
}

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

reportWebVitals();
