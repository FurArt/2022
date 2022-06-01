import logo from './logo.svg';
import './App.css';


function App() {
  const categoriesArray = [
    {
      id: 1,
      title: 'hats',
    },
    {
      id: 2,
      title: 'jackets',
    },
    {
      id: 3,
      title: 'sneakers',
    },
    {
      id: 4,
      title: 'womens',
    },
    {
      id: 5,
      title: 'mens',
    },
  ];
  return (
    <div className='categories-container'>
      {categoriesArray.map(({ title }) => (
        <div className='categorie-container'>
          <div className='image-container' />
          <div className='categories-body-container'>
            <h1>{title}</h1>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
