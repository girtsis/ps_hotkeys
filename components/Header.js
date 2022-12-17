export default function Header(){
    return(
        <nav className="navbar navbar-expand-md">
    <div className="container-fluid">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                    <a className="nav-link active" href="#">
                    <button style={{padding: 10, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "grey", letterSpacing: 3}}>About us</button>
                </a>
                </li>
               
                
            </ul>
        </div>
        <div className="mx-auto order-0">
            <a style={{letterSpacing:25, fontSize:15, color:"#6B6B6B"}} class="navbar-brand mx-auto" href="#">PHOTOSHOP HOTKEYS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
               
                <li className="nav-item">
                    <a className="nav-link active pt-2" href="#"><img style={{opacity: 0.7}} src="user.png" width="60"
     height="60"></img></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}