import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import NavBar from './components/navigation/NavBar'
import ReactProjects from './components/projects/ReactProjects'
import VueProjects from './components/projects/VueProjects'
import CmsProjects from './components/projects/CmsProjects'
import M from 'materialize-css/dist/js/materialize.min.js'
import SingleProject from './components/projects/SingleProject'


function App() {
  
  const [reactProjects, setReactProjects] = useState([
    {
        title: 'Marioplan',
        summarySmall: 'Dit is een to-do app met een Firebase back-end en redux state management.',
        summaryMid: 'Een soort uitgebreide ontwikkeld met een Firebase back-end en rexus stata management. Op dit platform kan een account gemaakt worden die posts naar de database kan versturen. Deze posts worden op de dashboard vertoont aan ingelogde leden.',
        summaryBig: 'Een soort uitgebreide ontwikkeld met een Firebase back-end en rexus stata management. Op dit platform kan een account gemaakt worden die posts naar de database kan versturen. Deze posts worden op de dashboard vertoont aan ingelogde leden. Deze posts worden op de dashboard vertoont aan ingelogde leden.',
        description: 'Om React te leren heb ik de tutorial serie van The Net Ninja gevolgd. Tijdens zijn course heb ik een soort uitgebreide ontwikkeld met een Firebase back-end. Op dit platform kan een account gemaakt worden die posts naar de database kan versturen. Deze posts worden op de dashboard vertoont aan ingelogde leden. Op de dashboard zijn ook notifications te zien dat d.m.v. cloudfunctions die vanuit de server gedraaid worden.',
        description2: 'Ik snap de vragende gezichten voor het credit nemen van een tutorial project. Wat dit echter anders maakt is dat ik ten eerste kennis heb gemaakt met Redux, wat erg complex van zichzelf is. En ten tweede is deze tutorial serie in class based components geschreven. Ik heb dit geschreven d.m.v. hooks. Dus door het veranderen van zaken leer ik er beter mee werken. En ten derde: kopieer bijna "nooit" code zonder na te gaan wat het doet en hoe het werkt.',
        description3: 'Tijdens de tutorial serie experimenteer ik en zoek ik in de docs hoe functies werken en niet alleen wat ze doen. Deze portfolio website bijvoorbeeld. Dit kostte mij een werkweek lang 14 uur per dag om te bouwen. Niet omdat het ingewikkeld persé was. Mmaar omdat ik bij iedere tegenslag, iedere error, ieder element dat niet functioneerde hoe het hoorde, ieder element dat er niet uitzag hoe het in het design hoorde, is het op telefoon of op desktop. Ik zocht uit waardoor het kwam en wat voor alternatieven er zijn. Ik zoek ook niet naar "Hacks" of iets dergelijke. De code probeer ik zo schoon mogelijk te houden. "If you want to break the rules, you should know them" is namelijk de gezegde. ',
        platform: 'react',
        liveLink: 'https://net-ninja-marioplan-e9d5c.firebaseapp.com/',
        images: ['/react/marioplan_img1.png', '/react/marioplan_img2.png', '/react/marioplan_img3.png', '/react/marioplan_img4.png', '/react/marioplan_img5.png'],
        headingImg: '/react/marioplan_heading.png',
        id: '1'
    },
    {
        title: 'Portfolio Webite',
        summarySmall: 'Hier licht ik het proces van deze portfoliowebsite toe. Het is gebouwd met React.',
        summaryMid: 'Deze portfolio website heb ik in React gebouwd, omdat ik een project nodig had om React meet te oefenen. Voor de CSS, afbeeldingen gallerij en navigatie heb ik gebruik gemaakt van Materialize-css.',
        summaryBig: 'Deze portfolio website heb ik in React gebouwd, omdat ik een project nodig had om React meet te oefenen. Voor de CSS, afbeeldingen gallerij en navigatie heb ik gebruik gemaakt van Materialize-css. De front-page is heeft een scroll-animatie script dat ik zelf in vanilla JS heb geschreven.',
        description: 'Deze portfolio website heb ik in React gebouwd, omdat ik een project nodig had om React meet te oefenen. Voor de CSS, afbeeldingen gallerij en navigatie heb ik gebruik gemaakt van Materialize-css. De front-page is heeft een scroll-animatie script dat ik zelf in vanilla JS heb geschreven. Verder is er gebruik gemaakt van React Router, React hooks met useState, useEffect.',
        description2: 'De ontwikkeling van deze portfolio was een bijzondere ervaring. Ik had geen docent of student support om mee te werken, zoals met het vue project, dus it was me and Google against React. En geloof me, na alleen Marioplan te bouwen met tutorial instructs bracht deze website genoeg uitdagingen die mij 5 dagen lang voor 14 uur per dag plaagden. Het eindresultaat mag ik echter niet over klagen. Het werkt goed, ziet er goed uit en ik heb een hoop geleerd.',
        description3: 'Het ding is namelijk dat als ik eenmaal iets leer het ook écht geleerd is. Had ik dit gemaakt zonder verdere verdieping, had ik deze website in de helft van de tijd kunnen bouwen. Maar juist door deze verdieping  ben ik nu een waardevollere ontwikkelaar geworden. Want bij iedere tegenslag, iedere error, ieder element dat niet functioneerde hoe het hoorde, ieder element dat er niet uitzag hoe het in het design hoorde, is het op telefoon of op desktop. Ik zocht uit waardoor het kwam en wat voor alternatieven er zijn. Ik hoop in de toekomst nog een page transition erin te bouwen en een firebase database support. Of een eigen REST API in nodeJS. ',
        platform: 'react', 
        liveLink: 'http://www.hippoworks.nl/',
        images: ['/react/portfolio_img1.png', '/react/portfolio_img2.png'],
        headingImg: '/react/portfolio_heading.png',
        id: '2'
    }
]);

const [vueProjects, setVueProjects] = useState([
  {
      title: 'UMCG LEARN Symposium',
      summarySmall: 'Website voor de 2019 Symposium van UMCG-Learn.',
      summaryMid: 'Tijdens het eerste semester bij de minor "The Next Web" heb ik, met mijn projectgroep, een website ontwikkeld voor de LEARN onderzoeksgroep dat bij het UMCG aangesloten is. Zij wilden een website voor hun komende symposium waarbij ze overzichtelijkheid hadden...',
      summaryBig: 'Tijdens het eerste semester bij de minor "The Next Web" heb ik, met mijn projectgroep, een website ontwikkeld voor de LEARN onderzoeksgroep dat bij het UMCG aangesloten is. Zij wilden een website voor hun komende symposium waarbij ze overzichtelijkheid hadden in alle leden, evenementen en alle leden hun onderzoeksvelden.',
      description: 'Tijdens het eerste semester bij de minor "The Next Web" heb ik, met mijn projectgroep, een website ontwikkeld voor de LEARN onderzoeksgroep dat bij het UMCG aangesloten is. Zij wilden een website voor hun komende symposium waarbij ze overzichtelijkheid hadden in alle leden, evenementen en alle leden hun onderzoeksvelden. Het resultaat is een CMS dat met VueJS is geschreven. Het gebruikt Firebase voor de backend. De events-pagina werkt jammergenoeg niet. Maar voor de rest lijkt alles te werken.',
      description2: 'Dit CMS is ontwikkeld zodat men met een speciale key een account-creatie link toegestuurd krijgen. Hierin kunnen ze hun interesses en specialisme selecteren en worden ze direct gevraagd om een profiel met afbeelding op te zetten. Snel&Easy in gebruik. Na de creatie kan de gebruiker zijn/haar profiel aanpassen hoe het hem/haar het beste uitkomt. Om meer diepte te geven aan elkaars onderzoeksveld is er een onderzoeks-uploader toegevoegd waarin men hun onderzoek kunnen delen. Het vraagt om een link naar het onderzoek, een titel en een samenvatting.',
      description3: 'Alle leden zijn op de Memberspagina te vinden en is filterbaar op verschillende onderdelen. Tot slot is alles op Firebase opgeslagen met een gepaste ruleset. Ieder event en stukje content staat erop. Graag nodig ik u uit om bij de live versie in te loggen met "Demo@Demo.nl" wachtwoord: "Demo1234" en zelf een kijje te nemen. UX is niet 100% in dat opzicht, mijn verantwoordelijkheid lag vooral bij het ontwikkelen.',
      platform: 'vue',
      liveLink: 'https://umcglearn.herokuapp.com/',
      images: ['/vue/symposium_img1.png', '/vue/symposium_img2.png', '/vue/symposium_img3.png', '/vue/symposium_img4.png'],
      headingImg: '/vue/symposium_heading.png',
      id: '1'
  }
]);

  useEffect(() => {

    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250,
      preventScrolling: true
    });  

    let trigger = document.querySelectorAll('.exit-trigger')

    function navListener(item) {
      item.addEventListener("click", function(){
        M.Sidenav.getInstance(elem).close();
      });
    }

    trigger.forEach(navListener)  
  });

  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/react'><ReactProjects projects={reactProjects} /></Route>
            <Route exact path='/vue'><VueProjects projects={vueProjects} /></Route>
            <Route exact path='/cms'><CmsProjects /></Route>
            <Route path='/react/projecten/:id' render={routeProps=><SingleProject {...routeProps} project={reactProjects}/>}  />
            <Route path='/vue/projecten/:id' render={routeProps=><SingleProject {...routeProps} project={vueProjects}/>}  />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
