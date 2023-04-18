import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../App.jsx";
import {Card, Form, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className="d-flex">
            {device.brands.map(brand =>
                <Card
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    style={{marginLeft:'5px', cursor:'pointer'}}
                    key={brand.id}
                    className='p-2'
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;