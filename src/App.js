import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Header />
      <Card img='./images/image 7.jpg' 
            rating='5.0'
            review='(100)'
            place='Kuala Lumpur'
            class='Cooking Class'
            price='From RM70 / person'
      />

      <Card  img='./images/image 8.jpg' 
            rating='5.0'
            review='(30)'
            place='Kuala Lumpur'
            class='Swimming Class'
            price='From RM130 / person'
      />

      <Card  img='./images/image 9.jpg' 
            rating='5.0'
            review='(50)'
            place='Kuala Lumpur'
            class='Yoga Class'
            price='From RM50 / person'
      />
      
    </div>
  );
}

export default App;
