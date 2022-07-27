import React from "react"
import ContentLoader from "react-content-loader"

const GameSkeleton = (props) => (
  <ContentLoader 
    className="card"
    speed={2}
    width={210}
    height={320}
    viewBox="0 0 210 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="28" rx="0" ry="0" width="176" height="237" />
  </ContentLoader>
)

export default GameSkeleton

