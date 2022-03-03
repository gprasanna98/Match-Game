import './index.css'

const ImageItem = props => {
  const {imageDetails, setActiveThumbnailId} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    setActiveThumbnailId(imageUrl)
  }

  return (
    <li className="image-item">
      <button type="button" onClick={onClickThumbnail}>
        <img src={imageUrl} alt={thumbnailUrl} className="image" />
      </button>
    </li>
  )
}

export default ImageItem
