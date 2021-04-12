import imageSource from "../assets/webpack-logo.jpeg"

const makeImage = () => {
  const image = document.createElement("img")
  image.src = imageSource
  image.height = 100
  image.width = 100
  return image
}

export default makeImage
