export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 ">
      
      {/* Purple */}
      <div className="absolute w-[5000px] h-[5000px] 
                      bg-purple-600/40 rounded-full 
                      blur-[120px]
                      top-1/4 left-1/4
                      animate-fadeA"></div>

      {/* Blue */}
      <div className="absolute w-[5000px] h-[5000px] 
                      bg-cyan-500/40 rounded-full 
                      blur-[120px]
                      bottom-1/4 right-1/4
                      animate-fadeB"></div>
    </div>
  )
}