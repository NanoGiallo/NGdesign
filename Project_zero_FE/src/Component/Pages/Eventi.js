import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaElementi from '../Assets/ListaElementi';
import classes from '../Css/PageList.module.css';

const DUMMY_ITEM = [
    { title: 'Serata anni 80'   , description: 'Serata in compagnia di musica anni 80', cell: '0123456789', img: 'djset.webp'},
    { title: 'Dj set '          , description: 'Tutta la notte dj set e birra a fiumi', cell: '0123456789', img: 'djset.webp'},
    { title: 'Giro pizza'       , description: 'Mangia fino a essere esploso'         , cell: '0123456789', img: 'djset.webp'},
    { title: 'Serata anni 80'   , description: 'Serata in compagnia di musica anni 80', cell: '0123456789', img: 'djset.webp'},
    { title: 'Dj set '          , description: 'Tutta la notte dj set e birra a fiumi', cell: '0123456789', img: 'djset.webp'},
    { title: 'Giro pizza'       , description: 'Mangia fino a essere esploso'         , cell: '0123456789', img: 'djset.webp'},
]

export default function Eventi(){
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
        { campo: 'nome'  ,  type: 'text', placeholder: 'Inserisci nome'  , label: 'Nome evento'},
        { campo: 'numero',  type: 'text', placeholder: 'Inserisci numero', label: 'Nome evento'}
    ]

    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Eventi in zona</h1>
            </header> 
            <div className={classes.leftDiv}>
                <Form onSubmit={cercaITEM} >
                    {
                        CampiForm.map((elem, i)=>{
                            return (
                                <Form.Group className="mb-3" controlId="formBasicEmail"  key={i}>
                                    <Form.Label>{elem.label}</Form.Label>
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