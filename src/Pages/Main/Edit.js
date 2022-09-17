import React, { useEffect, useState } from 'react'
import InputItem from '../Common/InputItem'
import SelectItem from '../Common/SelectItem'
import "../../Assets/Css/Create.css"
import { MainContext, useContext } from "../../Context"
import { IntervalTypes } from '../../Utils/Constants'
export function Edit({ history, match }) {
    const { calcList, setcalcList } = useContext(MainContext)


    const [currentdata, setcurrentdata] = useState({
        id: 0,
        creaditname: '',
        creditvalue: 0,
        installments: 0,
        profitrate: 0,
        interval: '',
        taxrate: 0,
        kkdf: 0,
        bsmv: 0
    })
    const [selectedIntervaltype, setselectedIntervaltype] = useState({})

    useEffect(() => {

        if (calcList.find(u => u.id == match.params.DataID) == undefined) {
            history.push('/')
        } else {
            setselectedIntervaltype(IntervalTypes.find(e => e.value === calcList.find(item => item.id == match.params.DataID).interval))
            setcurrentdata(calcList.find(item => item.id == match.params.DataID))
        }
    }, [])


    const handleChange = (e) => {
        const { id, value } = e.target
        setcurrentdata({ ...currentdata, [id]: value })
    }

    const goBack = () => {
        history.push('/')
    }

    const handleUpdate = () => {
        let arr = calcList
        let data = calcList.find(u => u.id == match.params.DataID)
        data.creaditname = currentdata.creaditname
        data.creditvalue = currentdata.creditvalue
        data.installments = currentdata.installments
        data.profitrate = currentdata.profitrate
        data.interval = selectedIntervaltype.value
        data.kkdf = currentdata.kkdf
        data.bsmv = currentdata.bsmv
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
                            itemchange={(e) => { setselectedIntervaltype(e) }}
                            optionvalue={IntervalTypes}
                        />
                        <div className='row'>
                            <div className='col-6'>
                                <InputItem
                                    itemname="KKDF %"
                                    itemid="kkdf"
                                    itemvalue={currentdata.kkdf}
                                    itemtype="number"
                                    itemplaceholder="KKDF %"
                                    itemchange={handleChange}
                                />
                            </div>
                            <div className='col-6'>
                                <InputItem
                                    itemname="BSMV %"
                                    itemid="bsmv"
                                    itemvalue={currentdata.bsmv}
                                    itemtype="number"
                                    itemplaceholder="BSMV %"
                                    itemchange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex mt-5 pr-5 justify-content-end align-items-right'>
                    <button onClick={goBack} style={{ minWidth: '150px' }} className="btn btn-dark mr-2">Geri Dön</button>
                    <button style={{ minWidth: '150px' }} onClick={handleUpdate} className="btn btn-primary mr-2">Güncelle</button>
                </div>
            </div>
        </div>
    )
}
export default Edit
