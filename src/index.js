import React from "react"
import ReactDOM from "react-dom/client"
import  "./styles.css"
import { BrowserRouter as Router } from "react-router-dom"

import {ContextProvider} from "./picSomeContext"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(

    <ContextProvider>

<Router>
<App />
</Router>

    </ContextProvider>


)
