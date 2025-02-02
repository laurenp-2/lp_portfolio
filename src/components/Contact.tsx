function Contact () {
    return(
        <>
     
            <h2 id="contactsHeader">let's connect</h2>
       
            <form id="connectForm">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required/> 
                <label htmlFor="email">Email </label>
                <input type="email" id="email" required/>
                <label htmlFor="message">Message</label>
                <textarea id="message" required/>
                <div className="formButtons">
                    <input type="submit" id="contactBtn"></input>
                    <input type="Reset" id="contactBtn"></input>
                </div>
                
            </form>
      
        
        </>
    )
    }
    
    export default Contact; 