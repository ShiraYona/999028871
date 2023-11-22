{/* //ברוך ה' זה רץ */ }

import React from "react"
import { useState, useEffect } from "react"
// import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { Fieldset } from 'primereact/fieldset';//😃//npm i primereact

function NavigateToFetchData(props) {

    const data = useLocation()
    const url = data.state;

    const [checked, setChecked] = useState(false);

    const [jsonFetch, setJsonFetch] = useState([])

    //=================functions==========================

    async function fetchData() {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setJsonFetch(data)
            console.log(data);
        }
        catch (error) {
            console.log(`error in fetch: ${error}`);
        }

    }

    const handleChange = () => {
        setChecked(!checked);
    };

    //=================useEffect============================

    useEffect(() => {
        fetchData()
    }, [])

    //=================return================================

    return (<>
        {/* //ברוך ה' זה רץ */}
        <div>
            <input type="checkbox"
                checked={checked}
                onChange={handleChange}
            />הצג פרשות שבוע בלבד
        </div>
        {/* //======אתגר=======אתגר=====אתגר===========אתגר========= */}
        {jsonFetch && jsonFetch.map((i) => {//אתגר
            return <>
                {
                    !checked ?
                        <Fieldset legend={i.title}>
                            {<div style={{ backgroundColor: "lightblue" }}>{i.title}</div>}
                            {<div style={{ backgroundColor: "lightgreen" }}>{i.description + " :תיאור"}</div>}
                            {<div style={{ backgroundColor: "yellow" }}>{i.start + " :תאריך"}</div>}
                            {<br />}{<br />}
                        </Fieldset>
                        :
                        i.className === "parashat" &&
                        <Fieldset legend={i.title}>
                            {<div style={{ backgroundColor: "lightblue" }}>{i.title}</div>}
                            {<div style={{ backgroundColor: "lightgreen" }}>{i.description + " :תיאור"}</div>}
                            {<div style={{ backgroundColor: "yellow" }}>{i.start + " :תאריך"}</div>}
                            {<br />}{<br />}
                        </Fieldset>
                }
                <br></br>

            </>
        })}
        {/* //ברוך ה' זה רץ */}
        {/* //======רגיל=======רגיל=====רגיל===========רגיל========= */}
        {jsonFetch && jsonFetch.map((i) => {//רגיל
            return <>
                {
                    !checked ?
                        <div style={{ backgroundColor: "pink", borderRadius: 10 + "px", borderColor: "black", width: 200 }}>
                            {<div style={{ backgroundColor: "lightblue" }}>{i.title}</div>}
                            {<div style={{ backgroundColor: "lightgreen" }}>{i.description + " :תיאור"}</div>}
                            {<div style={{ backgroundColor: "yellow" }}>{i.start + " :תאריך"}</div>}
                            {<br />}{<br />}
                        </div>
                        :
                        i.className === "parashat" &&
                        <div style={{ backgroundColor: "pink", borderRadius: 10 + "px", borderColor: "black", width: 200 }}>
                            {<div style={{ backgroundColor: "lightblue" }}>{i.title}</div>}
                            {<div style={{ backgroundColor: "lightgreen" }}>{i.description + " :תיאור"}</div>}
                            {<div style={{ backgroundColor: "yellow" }}>{i.start + " :תאריך"}</div>}
                            {<br />}{<br />}
                        </div>
                }
                <br></br>

            </>
        })}
    </>)
}

export default NavigateToFetchData