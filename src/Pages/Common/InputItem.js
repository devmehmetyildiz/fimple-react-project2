import React from 'react'
import { Form } from 'react-bootstrap'

export default function InputItem({ itemname, itemid, itemvalue, itemtype, itemplaceholder, itemchange }) {
    return (
        <div className="p-2">
            <div className='row'>
                <label style={{ fontSize: "12px" }} className="col-form-label">{itemname}</label>
            </div>
            <Form.Group className="row" >
                <Form.Control
                    id={itemid}
                    value={itemvalue}
                    type={itemtype}
                    placeholder={itemplaceholder}
                    onChange={itemchange}
                />
            </Form.Group>
        </div>
    )
}
