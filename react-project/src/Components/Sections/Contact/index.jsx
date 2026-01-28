import React from 'react';
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ContentContext } from '../../../context/ContentContext';
import { LanguageContext } from '../../../context/LanguageContext';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const { content } = React.useContext(ContentContext);
    const { isSpanish } = React.useContext(LanguageContext);
    const [state, handleSubmit] = useForm("xvzandnv");
    const [ showAlert, setShowAlert ] = React.useState(false);

    const contactContent = isSpanish ? content.contactContent.spanish : content.contactContent.english;

    React.useEffect(() => {
        if (state.succeeded) {
            setShowAlert(true);
            // Limpiar campos del formulario después del envío exitoso
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const subjectInput = document.getElementById("subject");
            const messagetxtArea = document.getElementById("message");

            if (nameInput) nameInput.value = "";
            if (emailInput) emailInput.value = "";
            if (subjectInput) subjectInput.value = "";
            if (messagetxtArea) messagetxtArea.value = "";
        }
    }, [state.succeeded]);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-4 pb-8" id="Contact">
            <div className='flex flex-col lg:flex-row md:col-span-2 items-center justify-center gap-8 w-4/5 mx-auto'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white text-center lg:text-start lg:w-4/5'>{ contactContent.title }</h1>
                    <span className='text-gray-300 text-base md:text-lg leading-relaxed text-center lg:text-justify lg:w-4/5'>
                        { contactContent.description }
                    </span>
                </div>
                <div className=''>
                    <div className='rounded-lg shadow-2xl bg-slate-900 p-10'>
                        {state.succeeded && showAlert && (
                            <div id='success_alert' className='rounded-lg shadow-2xl bg-green-700/50 w-full p-5 mb-5 flex gap-3 justify-between'>
                                <p className='text-white text-center w-full'>{ contactContent.form.succeedMessage }</p>
                                <IoClose className='cursor-pointer' onClick={handleCloseAlert}/>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className='flex flex-col md:flex-row gap-3 mb-3'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.nameInput.label }</label>
                                    <input id="name" type="text" className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.nameInput.placeholder } name='name' required={true} />
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.emailInput.label }</label>
                                    <input id="email" type='email' className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.emailInput.placeholder } name='email' required={true} />
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 mb-3'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.subjectInput.label }</label>
                                    <input id="subject" type='text' className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.subjectInput.placeholder } name='subject' required={true} />
                                    <ValidationError 
                                        prefix="Subject" 
                                        field="subject"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 mb-5'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.messageInput.label }</label>
                                    <textarea id="message" className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.messageInput.placeholder } name="message" required={true}></textarea>
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center justify-end'>
                                <button type='submit' disabled={state.submitting} className='bg-blue-500 hover:bg-blue-700 font-bold px-6 py-2 rounded transition-all duration-300 text-white border-2 border-blue-500 cursor-pointer w-full text-center md:w-auto md:text-start flex items-center justify-center gap-2'>
                                    { contactContent.form.buttonText }
                                    <IoIosSend className='text-lg'/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}