import "./index.css"
const Footer = ({length}) =>{
 const today = new Date();
 return(
  <footer className="footer">
   <p className="p">
    Copyright &copy; {today.getFullYear()}  {length} List {length === 1? "item" : "items"}
   </p>
  </footer>
 )
}
export default Footer