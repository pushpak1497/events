import './index.css'

const EventItem = props => {
  const {eventDetails, onClickCard} = props
  const {id, name, location, imageUrl} = eventDetails

  const onClickItem = () => {
    onClickCard(id)
  }

  return (
    <li className="events-card">
      <button type="button" onClick={onClickItem}>
        <img src={imageUrl} alt="event" className="card-image" />
        <p className="name text">{name}</p>
        <p className="location text">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
