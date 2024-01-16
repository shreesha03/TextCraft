import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <div className="container">
        <h2 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>About us</h2>
        <div className={`my-3 text-${props.mode==='light'?'dark':'light'} accordion`} data-bs-theme={props.mode} id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What services does the text editing website offer?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>{props.functions}</strong> 
                    <p>
                        The website offers a range of services, including proofreading, editing, and formatting for various types of text, such as documents, articles, and essays.
                    </p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is there a character limit for text manipulation?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Currently, there's no specific character limit for text manipulation.</strong> 
                    <p>However, very large texts might take longer to process.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I use the text manipulator on my mobile device?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Absolutely! Our website is designed to be mobile-friendly.</strong> 
                    <p>Access the site through your mobile browser and enjoy text manipulation on the go.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
