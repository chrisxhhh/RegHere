import React from "react";
import { Formik } from "formik";
import {Input, Button, Tag, DatePicker} from 'antd';
import { addNewProgram } from "../client";

const { TextArea } = Input;
const inputBottomMargin = {marginBottom: '5px'}
const tagStyle = {backgroundColor: '#f50', color: 'white', ...inputBottomMargin};

const AddProgramForm = (props) => {
        return (
            <Formik
            initialValues={{ name: '', description: '' ,date: null, host_name: ''}}

            validate={values => {
                const errors = {};

                if (!values.name){
                    errors.name = 'Event Name Required';
                }

                if (!values.description){
                    errors.description = 'A brief description required';
                }

                if (!values.date) {
                    errors.date = 'Date Required';
                } 
                
                if (!values.host_name){
                    errors.host_name = 'Host Name Required'
                }

                return errors;
            }}

            onSubmit={(program, { setSubmitting }) => {
                console.log(program)
                addNewProgram(program).then(()=>{
                    props.onSuccess();
                    setSubmitting(false);
                })
                

            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                submitForm,
                isValid, 
                setFieldValue
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        style={inputBottomMargin}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder='Event Name' 
                    />
                    {errors.name && touched.name && <Tag style={tagStyle} >{errors.name}</Tag> }
                    <DatePicker
                        style={inputBottomMargin}
                        type="date"
                        name="date"
                        onChange={(date)=>{
                            //const date_obj = date.toDate()
                            setFieldValue("date", date);
                        }}
                        onBlur={handleBlur}
                        value={values.date}
                        placeholder='Date'
                    />
                    {errors.date && touched.date && <Tag style={tagStyle} >{errors.date}</Tag>}
                    <Input className="host_name_input"
                        style={inputBottomMargin}
                        name="host_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.host_name}
                        placeholder='Host Name'
                    />
                    {errors.host_name && touched.host_name && <Tag style={tagStyle} >{errors.host_name}</Tag>}
                    <TextArea showCount maxLength={100}
                        style={inputBottomMargin}
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        placeholder='Description'
                    />
                    {errors.description && touched.description && <Tag style={tagStyle} >{errors.description}</Tag>}
                    
                    
                    <Button onClick={() => submitForm()} type="submit" disabled={isSubmitting | (touched && !isValid)}>
                        Create
                    </Button>
                </form>
            )}
            </Formik>
        );
    }


export default AddProgramForm;