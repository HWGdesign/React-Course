import './App.css';
import componentsImage from './images/components.png';
import eventsImage from './images/events.png';
import keyConceptsImage from './images/key-concepts.png';
import stateImage from './images/state.png';

function App() {
  const info = [
    {
      img: componentsImage,
      title: 'Main Title',
      description: 'Main description',
    },
    {
      img: eventsImage,
      title: 'Title 1',
      description: 'Description number 1',
    },
    {
      img: keyConceptsImage,
      title: 'Title 2',
      description: 'Description number 2',
    },
    {
      img: stateImage,
      title: 'Title 3',
      description: 'Description number 3',
    },
  ];

  return (
    <div className='grid grid-rows-2'>
      <div className='flex items-center justify-center py-10'>
        <header>
          <div className='flex items-center justify-center'>
            <img src={info[0].img} alt='State' />
          </div>
          <h1 className='py-3 font-semibold text-lg flex items-center justify-center'>{info[0].title}</h1>
          <p className='flex items-center justify-center px-3'>{info[0].description}</p>
        </header>
      </div>
      <div className='flex items-center justify-center'>
        <ul className='grid grid-cols-3 gap-auto'>
          <li className='bg-white px-1 py-10 rounded-xl shadow-lg hover:bg-slate-50 hover:cursor-pointer '>
            <div className='flex items-center justify-center object-fill h-[150px]'>
              <img src={info[1].img} alt='State' className=' p-10;' />
            </div>
            <h3 className='py-3 font-semibold text-lg flex items-center justify-center'>{info[1].title}</h3>
            <p className='flex items-center justify-center px-3'>{info[1].description}</p>
          </li>

          <li className='bg-white px-1 py-10 rounded-xl shadow-lg hover:bg-slate-50 hover:cursor-pointer'>
            <div className='flex items-center justify-center  object-fill h-[150px]'>
              <img src={info[2].img} alt='State' className=' p-10;' />
            </div>
            <h3 className='py-3 font-semibold text-lg flex items-center justify-center'>{info[2].title}</h3>
            <p className='flex items-center justify-center px-3'>{info[2].description}</p>
          </li>

          <li className='bg-white px-1 py-10 rounded-xl shadow-lg hover:bg-slate-50 hover:cursor-pointer'>
            <div className='flex items-center justify-center object-fill h-[150px]'>
              <img src={info[3].img} alt='State' className=' p-10;' />
            </div>
            <h3 className='py-3 font-semibold text-lg flex items-center justify-center'>{info[3].title}</h3>
            <p className='flex items-center justify-center px-3'>{info[3].description}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
