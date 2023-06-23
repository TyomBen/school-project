const Countries = ({ countries }) => {
    const { cca2, flags, timezones } = countries;

    return (
        <div>
        <h3>{countries.name.common}</h3>
        <h4>{timezones}</h4>
        <h5>{cca2}</h5>
        <img src={flags.png} className="img" />
      </div>
    )
}
  
  export default Countries;
  