const TvComponent = ({children}) => (
  <div className="relative w-full flex items-center justify-center">
        <div className="relative w-full sm:w-10/12 h-3/4 md:h-full max-h-dvh flex justify-center items-center">
          <div className="absolute z-20 w-full h-full bg-tv flex items-end justify-center"></div>
          <div className="absolute w-7/12 h-3/4 bg-black flex items-end justify-center md:mr-10"></div>
            {children}
        </div>
  </div>
)

export default TvComponent
