import React, { useEffect, useState } from 'react'
import { MainContext, DetailContext, useContext } from "../../Context"

export function Detail({ history }) {
  const { Detailobj, setDetailobj } = useContext(DetailContext)
  const { calcList, setcalcList } = useContext(MainContext)

  const [currentitem, setcurrentitem] = useState([])






  useEffect(() => {
    if (!Detailobj && !Detailobj.id && (calcList.find(u => u.item === Detailobj.id))) {
      history.push('/')
    }else{
      console.log("renderlıom")
    }
  }, [])

  return (
    <div>{Detailobj.id}</div>
  )
}
export default Detail
