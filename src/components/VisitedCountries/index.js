import './index.css'

const VisitedCountries = props => {
  const {country, onClickRemoveButton} = props
  const {imageUrl, name, id} = country

  const onClickRemove = () => {
    onClickRemoveButton(id)
  }

  return (
    <li className="visited-countries-container">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="para-remove-button-container">
        <p>{name}</p>
        <button type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
