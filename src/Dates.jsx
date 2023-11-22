{/* //ברוך ה' זה רץ */}

import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';//npm install primereact
import { Calendar } from 'primereact/calendar';
import DatePicker from 'react-datepicker';
function Dates() {

    const [startDate, setStartDate] = useState("")//Date
    const [endtDate, setEndDate] = useState("")//Date

    const navigate = useNavigate()


    //=================functions====================

    const checkFilled = () => {
        startDate && endtDate &&
            navigate('/navigateToFetchData', { state: `https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endtDate}` })//2023-06-25//2023-08-06
    }
    return (<>

        {/* ..=========================נסיונות לאתגר מספר 2============================================================ */}
        {/* <Calendar onChange={(e) => setStartDate(e.target.value)}>תאריך התחלה</Calendar> */}
        {/* <Calendar value={dates} onChange={(e) => setDate(e.value)} viewDate={viewDate} onViewDateChange={(e) => setViewDate(e.value)}></Calendar> */}
        {/* <Calendar selectionMode="multiple"  onChange={(e) => setStartDate(e.target.value)}></Calendar> */}


        {/* <div><Calendar dateFormat="yy-mm-dd" view="date" onChange={(e) => setStartDate(e.target.value)}></Calendar>תאריך התחלה</div>
        <div><Calendar dateFormat="yy-mm-dd" onChange={(e) => setEndDate(e.target.value)}></Calendar>תאריך סיום</div> */}
        {/* <DatePicker
            dateFormat="yy-mm-dd"
            value={startDate}
            onChange={(date) => {
                const d = new Date(date).toLocaleDateString('fr-FR');
                console.log(d);
                setStartDate(d);
            }}
        /> */}
        {/* <Calendar dateFormat="yy-mm-dd" value={startDate} onChange={(e) => setStartDate(e.target.value)}></Calendar>//.date */}
        {/* ..================================================================================================================ */}

        {/* //ברוך ה' זה רץ */}
        <div><input onBlur={(e) => { setStartDate(e.target.value) }}></input>תאריך התחלה</div>
        <div><input onBlur={(e) => { setEndDate(e.target.value) }}></input>תאריך סיום</div>
        {console.log(startDate + "\n" + endtDate)}
        <button onClick={() => { checkFilled() }}>check date</button>
    </>)
}

export default Dates