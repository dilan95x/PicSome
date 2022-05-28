import React, {useContext} from "react"
import Image from "../components/image"
import {Context} from "../picSomeContext"
import {getClass} from "../utils/index"


function Photos() {
    
const  {picData} = useContext(Context)

const imageMaping = picData.map((img, i)=>(
<div key={img.id}>
    <Image img={img} className={getClass(i)}/>
</div>
))
    return (
        <main className="photos">
            {imageMaping}
        </main>
        
    )

}

export default Photos