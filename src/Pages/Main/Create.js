import React, { forwardRef, useEffect, useRef, useState } from 'react'
import InputItem from '../Common/InputItem'
import SelectItem from '../Common/SelectItem'
import "../../Assets/Css/Create.css"
import { MainContext, useContext } from "../../Context"
import { IntervalTypes } from '../../Utils/Constants'
export function Create({ history }) {
    const { calcList, setcalcList } = useContext(MainContext)

    const [showErrcreaditname, setshowErrcreaditname] = useState(false)
    const [showErrcreditvalue, setshowErrcreditvalue] = useState(false)
    const [showErrinstallments, setshowErrinstallments] = useState(false)
    const [showErrprofitrate, setshowErrprofitrate] = useState(false)
    const [showErrkkdf, setshowErrkkdf] = useState(false)
    const [showErrbsmv, setshowErrbsmv] = useState(false)

    const validationRefs = {
        id: useRef(),
        creaditname: useRef(),
        creditvalue: useRef(),
        installments: useRef(),
        profitrate: useRef(),
        interval: useRef(),
        kkdf: useRef(),
        bsmv: useRef(),
    }

    const [currentdata, setcurrentdata] = useState({
        id: 0,
        creaditname: '',
        creditvalue: 0,
        installments: 0,
        profitrate: 0,
        interval: 0,
        kkdf: 0,
        bsmv: 0
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

    function CheckValidation() {
        console.log('validationRefs["creaditname"].current.style: ', validationRefs["creaditname"].current.style);
        let isok = true
        if (currentdata.creaditname === '') {
            isok = false
            validationRefs["creaditname"].current.style.borderColor = 'red'
            setshowErrcreaditname(true)
        } else {
            setshowErrcreaditname(false)
            validationRefs["creaditname"].current.style.borderColor = 'gray'
        }
        if (currentdata.creditvalue === 0) {
            isok = false
            validationRefs["creditvalue"].current.style.borderColor = 'red'
            setshowErrcreditvalue(true)
        } else {
            setshowErrcreditvalue(false)
            validationRefs["creditvalue"].current.style.borderColor = 'gray'
        }
        if (currentdata.installments === 0) {
            isok = false
            validationRefs["installments"].current.style.borderColor = 'red'
            setshowErrinstallments(true)
        } else {
            setshowErrinstallments(false)
            validationRefs["installments"].current.style.borderColor = 'gray'
        }
        if (currentdata.profitrate === 0) {
            isok = false
            validationRefs["profitrate"].current.style.borderColor = 'red'
            setshowErrprofitrate(true)
        } else {
            setshowErrprofitrate(false)
            validationRefs["profitrate"].current.style.borderColor = 'gray'
        }
        if (currentdata.kkdf === 0) {
            isok = false
            validationRefs["kkdf"].current.style.borderColor = 'red'
            setshowErrkkdf(true)
        } else {
            setshowErrkkdf(false)
            validationRefs["kkdf"].current.style.borderColor = 'gray'
        }
        if (currentdata.bsmv === 0) {
            isok = false
            validationRefs["bsmv"].current.style.borderColor = 'red'
            setshowErrbsmv(true)
        } else {
            setshowErrbsmv(false)
            validationRefs["bsmv"].current.style.borderColor = 'gray'
        }
        return isok
    }

    const handleCreate = () => {
        if (CheckValidation()) {
            let arr = calcList
            let data = { ...currentdata, interval: selectedIntervaltype.value, id: calcList.length + 1 }
            arr.push(data)
            setcalcList(arr)
            history.push("/")
        }
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
                            ref={validationRefs["creaditname"]}
                            itemname="Hesaplama Adı"
                            itemid="creaditname"
                            itemvalue={currentdata.creaditname}
                            itemtype="text"
                            itemplaceholder="Hesaplama Adı"
                            itemchange={handleChange}
                            errmsg={"Lütfen İsim Giriniz"}
                            errshow={showErrcreaditname}
                        />
                        <InputItem
                            ref={validationRefs["creditvalue"]}
                            itemname="Kredi tutarı (Ana para)"
                            itemid="creditvalue"
                            itemvalue={currentdata.creditvalue}
                            itemtype="number"
                            itemplaceholder="Kredi tutarı (Ana para) "
                            itemchange={handleChange}
                            errmsg={"Kredi Tutarı 0 olamaz"}
                            errshow={showErrcreditvalue}
                        />
                        <InputItem
                            ref={validationRefs["profitrate"]}
                            itemname="Kâr oranı"
                            itemid="profitrate"
                            itemvalue={currentdata.profitrate}
                            itemtype="number"
                            itemplaceholder="Kâr oranı"
                            itemchange={handleChange}
                            errmsg={"Kar Oranı 0 olamaz"}
                            errshow={showErrprofitrate}
                        />
                    </div>
                    <div className="col-6">
                        <InputItem
                            ref={validationRefs["installments"]}
                            itemname="Taksit sayısı"
                            itemid="installments"
                            itemvalue={currentdata.installments}
                            itemtype="number"
                            itemplaceholder="Taksit sayısı"
                            itemchange={handleChange}
                            errshow={showErrinstallments}
                            errmsg={"Taksit Tutarı 0 Olamaz"}
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
                                    ref={validationRefs["kkdf"]}
                                    itemname="KKDF %"
                                    itemid="kkdf"
                                    itemvalue={currentdata.kkdf}
                                    itemtype="number"
                                    itemplaceholder="KKDF %"
                                    errmsg={"KKDF 0 olamaz"}
                                    errshow={showErrkkdf}
                                    itemchange={handleChange}
                                />
                            </div>
                            <div className='col-6'>
                                <InputItem
                                    ref={validationRefs["bsmv"]}
                                    itemname="BSMV %"
                                    itemid="bsmv"
                                    itemvalue={currentdata.bsmv}
                                    itemtype="number"
                                    itemplaceholder="BSMV %"
                                    errmsg={"BSMV 0 olamaz"}
                                    errshow={showErrbsmv}
                                    itemchange={handleChange}
                                />
                            </div>
                        </div>

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
