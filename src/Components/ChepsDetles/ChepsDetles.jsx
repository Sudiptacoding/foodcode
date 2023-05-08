import { useLocation } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChepsDetles.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChepsDetles = () => {
    const location = useLocation();
    const { u } = location.state;

    const handeltost = () => {
        toast("Your Favourite Food is add..");
    }
    const handeltost1 = () => {
        toast("Your Favourite Food is add..");
    }
    const handeltost2 = () => {
        toast("Your Favourite Food is add..");
    }
    return (
        <div className="recipy-section">
            <div class="card text-center">
                <div class="card-header">
                    <img src={u.chef.img} alt="" style={{ width: '60px' }} /> <br />
                    <strong>{u.chef.name}</strong>
                </div>
                <div className="recipe-card">
                    <div className="box">
                        <div class="card-body">
                            <div class="card recip-card">
                                <img src={u.recipes.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{u.recipes.name}</h5>
                                    <p class="card-text">{u.recipes.cookies_method}</p>
                                    <div onClick={handeltost} class="card-footer text-muted" id="handelFevorit">
                                        <span>{u.recipes.button}😋
                                            <ToastContainer
                                                position="top-center"
                                            />
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div class="card-body">
                            <div class="card recip-card">
                                <img src={u.recipes1.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{u.recipes1.name}</h5>
                                    <p class="card-text">{u.recipes1.cookies_method}</p>
                                    <div onClick={handeltost1} class="card-footer text-muted" id="handelFevorit">
                                        <span>{u.recipes.button}😋
                                            <ToastContainer
                                                position="top-center"
                                            />
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div class="card-body">
                            <div class="card recip-card">
                                <img src={u.recipes2.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{u.recipes2.name}</h5>
                                    <p class="card-text">{u.recipes2.cookies_method}</p>
                                    <div onClick={handeltost2} class="card-footer text-muted" id="handelFevorit">
                                        <span>{u.recipes.button}😋
                                            <ToastContainer
                                                position="top-center"
                                            />
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default ChepsDetles;