import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
   className="container">
    <circle cx="10" cy="20" r="8" /> 
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="50" r="8" /> 
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="80" r="8" /> 
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)