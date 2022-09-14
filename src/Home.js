const Home = () => {

    const handleClick = (e) => {
        console.log("Hello",  e)
    }

    const handleNoClickMe = (name, e) => {
        console.log("hello " + name, e)
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleNoClickMe("mario",e)}>No no, Click me</button>
        </div>
     );
}
 
export default Home;