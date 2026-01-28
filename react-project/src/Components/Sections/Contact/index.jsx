import React from 'react';
import { IoIosSend } from "react-icons/io";
import { ContentContext } from '../../../context/ContentContext';
import { LanguageContext } from '../../../context/LanguageContext';
import { ButtonSolidColor } from '../../Common/Button/ButtonSolidColor';

export const Contact = () => {
    const { content } = React.useContext(ContentContext);
    const { isSpanish } = React.useContext(LanguageContext);

    const contactContent = isSpanish ? content.contactContent.spanish : content.contactContent.english;
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
                        <form method='post' autoComplete='false'>
                            <div className='flex flex-col md:flex-row gap-3 mb-3'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.nameInput.label }</label>
                                    <input type="text" className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.nameInput.placeholder } name='name' required="true" />
                                </div>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.emailInput.label }</label>
                                    <input type='email' className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.emailInput.placeholder } name='email' required="true" />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 mb-3'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.subjectInput.label }</label>
                                    <input type='text' className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.subjectInput.placeholder } name='subject' required="true" />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 mb-5'>
                                <div className='flex flex-col gap-2 justify-center w-full'>
                                    <label className='text-sm text-slate-400'>{ contactContent.form.messageInput.label }</label>
                                    <textarea className='rounded-md py-3 px-6 bg-gray-800 text-white' placeholder={ contactContent.form.messageInput.placeholder } name="message" required="true"></textarea>
                                </div>
                            </div>
                            <div className='flex items-center justify-end'>
                                <ButtonSolidColor classes='w-full text-center md:w-auto md:text-start flex items-center justify-center gap-2'>
                                    { contactContent.form.buttonText }
                                    <IoIosSend className='text-lg'/>
                                </ButtonSolidColor>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}