import './index.css'

const ThumbnailCard = props => {
  const {details, onTapImage} = props
  const {id, thumbnailUrl} = details

  const onTapImg = () => {
    onTapImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-btn" onClick={onTapImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ThumbnailCard
