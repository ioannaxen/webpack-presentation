const makeImage = () => {
  const image = document.createElement("img")
  image.src = "./src/assets/webpack-logo.jpeg"
  image.height = 100
  image.width = 100
  return image
}

export default makeImage
