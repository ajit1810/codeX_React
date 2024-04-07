export function Navbar() {
    return(
        <div className="navbar">
            <ul className="nav">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
    );
}

export function Home() {
    return(
        <div className="home">
            <div className="para">
                <p>
                Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
                </p>
            </div>

            <div className="box">
                   
            </div>
        </div>
    );
}


export function Footer() {
    return(
        <div className="footer">
            <h1>codeX</h1>
        </div>
    );
}

