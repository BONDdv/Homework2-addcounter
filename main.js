function App() {
    const [counters, setCounters] = React.useState([
     { id: 1, number:0 }
    
    ])
   
    const updateCounter = (id, num) => {
    //  console.log('id = ',id)
     let idx = counters.findIndex( el => el.id === id)
    //  console.log('counters array no.', idx)
     const newCounters = [...counters]
    if(newCounters[idx].number + num < 0)  {return}
     newCounters[idx].number += num
    //  console.log(newCounters)
     setCounters(newCounters)
    };

    const removeCounter = (id) => {
        const updatedCounters = counters.filter(counter => counter.id !== id);
        setCounters(updatedCounters);
    };

    const addCounter = () => {
        const newCounters = {
            id: counters.length > 0 ? counters[counters.length -1].id +1 : 1,
            number: 0
        }
        setCounters([...counters, newCounters])
    }

    return (
     <div className='app'>
      <h1 className="show-sum">Sum = 0 </h1>
      <button onClick= {addCounter} className="btn-add">Add Counter</button>
      <hr />
      { counters.map( el => (
       <Counter 
       key={el.id} 
       item={el} 
       updateCounter={updateCounter}
       removeCounter={removeCounter}
       />
      ))
   
      }
     </div>
    )
   }


   
   function Counter(props) {
    // console.log(props)
    const {item, updateCounter, removeCounter} = props
    return (
     <div className="counter">
      <button onClick={()=>updateCounter(item.id, -1)} className="btn btn-dec">-</button>
      <h3 className="number">{item.number}</h3>
      <button  onClick={()=>updateCounter(item.id, 1)} className="btn btn-inc">+</button>
      <button onClick={()=> updateCounter(item.id, -item.number)} className="btn btn-clr">C</button>
      <button  onClick={()=> removeCounter(item.id)} className="btn btn-dceCouter">x</button>
     </div>
    )
   }
   
   
   
   ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)