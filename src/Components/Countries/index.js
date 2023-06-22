import { useDispatch } from "react-redux";
import { valueFolow } from "../../feauters/reducers/cartSlices";
import { initialStateValue } from "../../feauters/reducers/cartSlices";
const Countries = ({countries}) => {
    const dispatch = useDispatch ()
    const SearchInput = (event) => {
        dispatch (valueFolow (event.target.value))
    }
    const {altSpellings, borders, cca2, languages, flags } = countries
    // console.log(countries);
    // console.log(languages);
    // console.log(countries);
    return (  
        <>
           
            <div>
            <h3>{altSpellings}</h3> 
            <h4>{cca2}</h4>
            <img src={flags.png} />
        </div>
        </>  
      
   
        
    )
}

export default Countries;