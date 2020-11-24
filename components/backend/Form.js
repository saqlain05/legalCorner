import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Stack, Switch } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/backend/Form.module.scss'
const Form = () => {
    return (
        <div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Hero Section</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch </p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp1} type="text" placeholder="legal Service Name" />
                        <input className={styles.inp2} type="text"  placeholder="Service Fee" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Short Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>

            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Video & Description</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch</p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Document Requirment</h1>
                    <div className={styles.ebutton}>
                    <p>Switch</p>
                    </div>
                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp5} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Involved Steps </h1>
                    <div className={styles.ebutton}>
                    <p>Switch</p>
                    </div>
                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp50} type="text" placeholder="From Day" />
                        <input className={styles.inp50} type="text" placeholder="To Day" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>FAQ'S </h1>
                    <div className={styles.ebutton}>
                    <p>Switch</p>
                    </div>
                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                    <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>

                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp4} type="text" placeholder="From Day" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Form
