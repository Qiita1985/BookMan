import Button from './Button'

function Body() {
  const onClick = () =>{
    
    console.log('click')
  }
  return (
      <div>
          <input type='text' />
          <Button text='serch' onClick={onClick} />
      </div>
  )
}

export default Body;
