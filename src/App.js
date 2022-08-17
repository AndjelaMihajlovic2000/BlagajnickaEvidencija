import classes from "./App.module.css";
import NavBar from "./komponente/NavBar/NavBar.jsx";
import Stanje from "./komponente/Stanje/Stanje";
import IstorijaTransakcija from "./komponente/IstorijaTransakcija/IstorijaTransakcija";
import Forma from "./komponente/Forma/Forma";
import {Route,Redirect,Switch} from "react-router-dom";

const data={

items:[{name:"Stanje na pocetku godine",amount:10000}],
prihod:10000,
rashod:0,

}



function App() {

  const dodajStavku = (i)=>{
    data.items.unshift(i);
    if(i.amount>0){
      data.prihod+= +i.amount;
    }
    else{
      data.rashod+= Number(i.amount);
    }
  };




  return (
    <div className={classes["app-container"]}>
     <NavBar></NavBar>
     <Switch>
      <Route path="/" exact>
        <Redirect to="/pocetna"></Redirect>
      </Route>
      <Route path="/pocetna">
        <h1 className={classes.naslov}>Dobrodosli</h1>
        <p className={classes.paragraf}>
          Pred vama se nalazi primer jedne evidencije koju je potrebno da vodi 
          svaki blagajnik u jednoj organizaciji. Naime imacete mogucnost da vidite sta se sve desava 
          kada blagajnik evidentira neke prihode koje je dobio i troskove koji su se desili.
          Kao i sta se desava sa stanjem kada se dese odredjene promene.
          Sve to je prikazano na sledecim stranicama, koje se nalaze u jednoj
          evidenciji.
        </p>
      </Route>
      <Route path='/stanje'>
          <Stanje data={data} />
        </Route>
        <Route path='/istorija'>
          <IstorijaTransakcija data={data} />
        </Route>
        <Route path='/dodaj'>
          <Forma addItem={dodajStavku} />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
