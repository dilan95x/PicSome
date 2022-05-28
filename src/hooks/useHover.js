import {useState, useEffect, useRef} from "react"


function useHover(){
    const [hoverd, cngHoverd] = useState(false)
    const refer = useRef(null)

    //functions
    function enter(){
        cngHoverd(true)
    }

    function leave(){
        cngHoverd(false)
    }

    useEffect(()=>{

        const refernace = refer.current

        refernace.addEventListener("mouseenter", enter)
        refernace.addEventListener("mouseleave", leave)

        return () => {    
            refernace.removeEventListener("mouseenter", enter)
            refernace.removeEventListener("mouseleave", leave)
        }

    },[])

    return [hoverd, refer]
}

export default useHover