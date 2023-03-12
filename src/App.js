import logo from './logo.svg';
import './App.css';
import IMG from './image1.png'
import IMG2 from './Prada-homme-14.jpg'
import IMG3 from './image2.jpg'

function App() {
  let etudiant = [{
    nom : "ali",
    prenom : "berrada",
    image : IMG
    },
    {
    nom : "hatim" ,
    prenom : "hatim",
    image : IMG2 
    },
    {
      nom : "ilyass",
      prenom : "faska",
      image : IMG3
    }]
    


  return (
    <div className="App">
<div className='DP'>
  {
  etudiant.map(item=>(

    <div className='DVP'>
      <div className='NA'> <h3 className='ti'> {item.nom}</h3>
      <h3 className='ti'>{item.prenom}</h3> </div>
      <img  src= {item.image} className ='IM' /> 
      
       </div>


  )
    
    )
  }
</div>



    </div>
  );
}

export default App;
