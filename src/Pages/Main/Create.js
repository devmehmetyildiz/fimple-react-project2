import React, { useEffect, useState } from 'react'
import InputItem from '../Common/InputItem'
import SelectItem from '../Common/SelectItem'
import "../../Assets/Css/Create.css"
import { MainContext, useContext } from "../../Context"
import {  IntervalTypes } from '../../Utils/Constants'
export function Create({ history }) {
    const { calcList, setcalcList } = useContext(MainContext)


    const [currentdata, setcurrentdata] = useState({
        id: 0,
        creaditname: '',
        creditvalue: 0,
        installments: 0,
        profitrate: 0,
        interval: '',
        taxrate: 0
    })
    const [selectedIntervaltype, setselectedIntervaltype] = useState({})

    useEffect(() => {
        setselectedIntervaltype(IntervalTypes[0])
    }, [])


    const handleChange = (e) => {
        const { id, value } = e.target
        setcurrentdata({ ...currentdata, [id]: value })
    }

    const goBack = () => {
        history.push('/')
    }

    const handleCreate = () => {
        let arr = calcList
        let data = {...currentdata,interval:selectedIntervaltype.value,id:calcList.length+1}
        arr.push(data)
        setcalcList(arr)
        history.push("/")
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className='row'>
                    <div className='col-6 d-flex justify-content-start'>
                        <h4 className="card-title">Yeni Hesaplama Kaydı</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <InputItem
                            itemname="Hesaplama Adı"
                            itemid="creaditname"
                            itemvalue={currentdata.creaditname}
                            itemtype="text"
                            itemplaceholder="Hesaplama Adı"
                            itemchange={handleChange}
                        />
                        <InputItem
                            itemname="Kredi tutarı (Ana para) "
                            itemid="creditvalue"
                            itemvalue={currentdata.creditvalue}
                            itemtype="number"
                            itemplaceholder="Kredi tutarı (Ana para) "
                            itemchange={handleChange}
                        />
                        <InputItem
                            itemname="Kâr oranı"
                            itemid="profitrate"
                            itemvalue={currentdata.profitrate}
                            itemtype="number"
                            itemplaceholder="Kâr oranı"
                            itemchange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <InputItem
                            itemname="Taksit sayısı"
                            itemid="installments"
                            itemvalue={currentdata.installments}
                            itemtype="number"
                            itemplaceholder="Taksit sayısı"
                            itemchange={handleChange}
                        />
                        <SelectItem
                            itemname="Taksit aralığı seçimi"
                            itemvalue={selectedIntervaltype}
                            itemchange={(e)=>{setselectedIntervaltype(e)}}
                            optionvalue = {IntervalTypes}
                        />
                        <InputItem
                            itemname="Veri Oranı"
                            itemid="taxrate"
                            itemvalue={currentdata.taxrate}
                            itemtype="number"
                            itemplaceholder="Veri Oranı"
                            itemchange={handleChange}
                        />
                    </div>
                </div>
                <div className='row d-flex mt-5 pr-5 justify-content-end align-items-right'>
                    <button onClick={goBack} style={{ minWidth: '150px' }} className="btn btn-dark mr-2">Geri Dön</button>
                    <button style={{ minWidth: '150px' }} onClick={handleCreate} className="btn btn-primary mr-2">Ekle</button>
                </div>
            </div>
        </div>
    )
}
export default Create
