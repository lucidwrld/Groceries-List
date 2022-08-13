import "./index.css"

import ItemLists from "./ItemLists"
const Content = ({items,handleCheck,handleDelete}) =>{
  
  

  
 return(
  <>
    {items.length ? (
      <ItemLists 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
 ) : (
  <p style = {{marginTop: '2rem'}}>Your list is empty.</p>
 )}
  </>
 )
}
export default Content