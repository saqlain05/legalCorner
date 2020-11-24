import React from 'react'
import Editor from '../components/backend/Editor'
import Form from '../components/backend/Form'
import Header from '../components/backend/Header'
// import MyEditor from '../components/backend/MyEditor'

const form = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form />
            <Editor />
            {/* <MyEditor /> */}
        </div>
    )
}

export default form
