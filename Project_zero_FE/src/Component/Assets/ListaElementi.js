import React, { useState } from 'react';
import classes from '../Css/ListaElementi.module.css';
import { Modal, Button } from 'react-bootstrap';

export default function listaElementi(props){

    const [ showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = (ITEM) => setShowModal({...ITEM});


    return (
        <React.Fragment>
            { 
                props.item.map((ITEM, i) =>{
                    return( 
                        <div className={classes.article} key={i} onClick={() => handleShow(ITEM)}>
                            <h2>{ITEM.title}</h2>
                            <img src={`../${ITEM.img}`} className={classes.img}></img>
                            <span>{ITEM.description}</span>
                            <span>{ITEM.cell}</span>
                        </div>
                    )            
                })
            }
            <Modal show={showModal ? true : false} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{showModal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
