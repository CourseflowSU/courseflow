import '../signup/signup.css'

function Signup() {
    return (
      <div className="imge">
        <div className='fullscreen row justify-content-center align-items-center'>
            <div className="col-4 justify-content-start">
              <div className="card p-1 mb-0">
                <div className="card-body">
                    <div className="text-left">
                      <h2 className="mt-2"><b>SIGN UP</b></h2>
                    </div>
                    <div className="mt-4">
                      <input className="btn-border input-style form-control" placeholder="E-mail"></input>
                    </div>
                    <div className="mt-3">
                      <input className="btn-border input-style form-control" placeholder="Password"></input>
                    </div>
                    <div className="mt-3">
                      <input className="btn-border form-control input-style" placeholder="Confirm Password"></input>
                    </div>
                    <div className='d-flex flex-row mt-3'>
                      <small className="sign-up-info-text">* Password must be at least 6 letters</small>
                    </div>
                    <div className='d-flex flex-row mt-1'>
                      <small className="sign-up-info-text">* Password must contain at least 1 number</small>
                    </div>
                    <div className='mt-3 d-flex flex-row'>
                      <input className='form-check-input' id='checkbox' type={'checkbox'}></input>
                      <small>I have read and accepted <a href='s'>Document1</a> and <a href='s'>Document2</a></small>
                    </div>
                    <div className='mt-3 row text-center justify-content-center'>
                      <div className='col-12'>              
                          <button className='btn btn-block btn-warning'>SIGN UP</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>  
    );
  }

  export default Signup;