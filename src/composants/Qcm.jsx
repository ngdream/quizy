import React from 'react'
import Header from './Header'

const Qcm = () => {
    return (
        <div className='flex'>
            <Header />
            <div>

                <div >
                    <div className='Question'>
                        <p className='Questionn_umber'>1.</p>
                        <h1 className='Question_text'>
                            Combien de charactaire une 'URL' peut elle contenir ?
                        </h1>
                    </div>

                    <div className='main_options'>
                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>A.</p></span>
                            </label>
                            <div>
                                <p>
                                    2080
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>B.</p></span>
                            </label>
                            <div>
                                <p>
                                    2080
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>C.</p></span>
                            </label>
                            <div>
                                <p>
                                    20000
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>D.</p></span>
                            </label>
                            <div>
                                <p>
                                    1080
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='Question'>
                        <p className='Questionn_umber'>2.</p>
                        <h1 className='Question_text'>
                            Combien de charactaire une 'URL' peut elle contenir ?
                        </h1>
                    </div>

                    <div className='main_options'>
                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>A.</p></span>
                            </label>
                            <div>
                                <p>
                                    2080
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>B.</p></span>
                            </label>
                            <div>
                                <p>
                                    2080
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>C.</p></span>
                            </label>
                            <div>
                                <p>
                                    20000
                                </p>
                            </div>
                        </div>

                        <div className='options'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"><p>D.</p></span>
                            </label>
                            <div>
                                <p>
                                    1080
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Qcm