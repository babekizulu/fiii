//components
import Link from "../Link";
//videos
import video from '../videos/Calculator.mp4';

function Dashboard() {
    return (
        <section className='page'>
            <h1 className="page-header">
                A Multi-Disciplinary 
                <br/>
                Calculator App.
            </h1>
            <div className='calculator-descriptions'>
                <div className="description-box">
                    <div className='calculator-description orange'>
                    <p><b>Mechanics</b> calculators that offer a variety of equations useful for solving mechanics problems</p>
                   </div>
                    <Link href='/mechanics' className='btn'>
                        Try
                    </Link>
                </div>
                <div className="description-box">
                    <div className='calculator-description red'>
                    <p><b>Economics</b> calculators that offer a variety of equations useful for solving economics problems</p>
                   </div>
                    <Link href='/mechanics' className='btn'>
                        Try
                    </Link>
                </div>
                <div className="description-box">
                    <div className='calculator-description blue'>
                    <p><b>Accounting</b> calculators that offer a variety of equations useful for solving accounting problems</p>
                   </div>
                    <Link href='/mechanics' className='btn'>
                        Try
                    </Link>
                </div>
            </div>
            <video className="video" autoPlay loop muted playsInline><source src={video} type='video/mp4'/> Your browser does not support the video tag</video>
        </section>
    )
}

export default Dashboard;