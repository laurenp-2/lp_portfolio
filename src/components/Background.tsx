
function Background () {
    
    const javaLine = () => {
        return "System.out.print('Hello World!') ".repeat(20); 
    }
    const pythonLine = () => {
        return " print('hello world!')".repeat(29);
    }
    const jsLine = () => {
        return "  console.log('hello world!)".repeat(21); 
    }

    const BackgroundComponent = () => {
        const repeatCount = 23; // Number of times to repeat the block
    
        return (
            <div className="backgroundContainer">
                {Array.from({ length: repeatCount }, (_, index) => (
                    <div className="bgline" key={index}>
                        <h4>{javaLine()}</h4>
                        <h4>{pythonLine()}</h4>
                        <h4>{jsLine()}</h4>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
        <div className="bgBlock">
            {BackgroundComponent()}
        </div>
        
        
        </>
    ); 
}
export default Background; 