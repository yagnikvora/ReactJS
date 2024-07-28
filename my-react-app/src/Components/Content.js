function HomePage() {
    const divStyle = {
        color: '#156860',
        backgroundColor: 'lightblue',
        fontSize: '15px',
        padding: '74px',
    };
    return (
        <div style={divStyle}>
            <div className="container">
                <h1>Welcome to My Website</h1>
                <p>
                    Welcome to our website! We're delighted to have you here. Our platform is designed with you in mind, offering a wealth of resources, information, and interactive features. Whether you're seeking inspiration, knowledge, or solutions, we aim to provide a seamless and enriching experience. Explore our diverse content, engage with our community, and discover new opportunities to learn and grow. From informative articles to engaging discussions, there's something for everyone. Join us on this journey of discovery and empowerment. Together, let's create a vibrant online space where ideas thrive and connections flourish. Welcome aboard!
                </p>
                <p>
                    <input className="btn btn-primary" onClick={()=>{
                        alert("Hello")
                    }} type="button" variant="primary" value="Learn More" />
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Section 1</h2>
                        <p>This is the content of section 1.</p>
                    </div>
                    <div className="col">
                        <h2>Section 2</h2>
                        <p>This is the content of section 2.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
