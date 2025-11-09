import './Internship.css';

function Internship(){
    return(
        <section className='Intern-container'>
            
                <h2 className='intern-title'>Internship</h2>
                <div className="intern">
                <div className="intern-card">
                    <h2> Research Intern– School of AI, North-Chiang Mai University (Virtual)</h2>
                    <div className="timeline"> Jun 2025– Aug 2025</div>
                    < p className='intern-desc'> Led a team on predictive modeling for AI-driven health data. Enhanced model 
                        reliability by debugging errors and ensuring reproducible results through clear documentation.</p>
                </div>

                <div className="intern-card">
                    <h2> Cybersecurity Intern– Edunet Foundation</h2>
                    <div className="timeline"> Jun 2024– Aug 2024 (Remote)</div>
                    <p className='intern-desc'>  Built steganography and digital watermarking applications using LSB 
                        embedding while following secure coding practices</p>    
                </div>

                <div className="intern-card">
                   <h2>  Salesforce Developer Intern– SmartInternz</h2>
                    <div className="timeline">  Nov 2023– Jan 2024 (Remote)</div>
                    <p className='intern-desc'>   Developed and tested Salesforce Apex components. Collaborated with cross-functional teams and deliv
ered multiple projects within deadlines</p>    
                </div> 
            </div>
        </section>
    );
}
export default Internship