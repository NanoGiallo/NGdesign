import React, { useState } from 'react';
import classes from '../Css/PageList.module.css';
import { Form, Button } from 'react-bootstrap';
import ListaElementi from '../Assets/ListaElementi'

const DUMMY_ITEM = [
    { title: 'ITEM01', description: 'Nel mezzzo del cammin', cell: '0123456789'},
    { title: 'ITEM02', description: 'Nel mezzzo del cammin', cell: '0123456789'},
    { title: 'ITEM03', description: 'Nel mezzzo del cammin', cell: '0123456789'},
    { title: 'ITEM04', description: 'Nel mezzzo del cammin', cell: '0123456789'},
    { title: 'ITEM05', description: 'Nel mezzzo del cammin', cell: '0123456789'},
    { title: 'ITEM06', description: 'Nel mezzzo del cammin', cell: '0123456789'},
]

export default function Mercatino(){
    const [ form, setForm ] = useState({
        nome: '',
        numero: ''
    })

    const cercaITEM = (event) => {
        event.preventDefault()
        console.log(form)
    }

    const changeInput = (input) => {
        setForm(prev=>{
            form[input.target.name] = input.target.value
            return ({ ...form})
        })
    }

    const CampiForm = [ 
        { campo: 'nome'  ,  type: 'text', placeholder: 'Inserisci nome'  },
        { campo: 'numero',  type: 'text', placeholder: 'Inserisci numero'}
    ]
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Benvenuti nel mercatino</h1>
            </header>
            <div className={classes.leftDiv}>
                <Form onSubmit={cercaITEM} >
                    {
                        CampiForm.map((elem, i)=>{
                            return (
                                <Form.Group className="mb-3" controlId="formBasicEmail"  key={i}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type={elem.type} placeholder={elem.placeholder} value={form[elem.campo]}  name={[elem.campo]} onChange={changeInput}/>
                                </Form.Group>
                            )
                        })
                    }
                    <Button variant="primary" type="submit">Submit </Button>
                </Form>
            </div>
            <section className={classes.section}>
                <ListaElementi item={DUMMY_ITEM}/>
            </section>
        </React.Fragment>
    )
}
