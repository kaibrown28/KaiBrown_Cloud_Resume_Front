import { Header, Footer, Counter, } from '../components/index'
import { Resume } from '../components/index'

const ResumePage = () => {
    return (
        <div className="resume">
            <Header />
            <Resume />         
            <Footer />
        </div>
    )
}

export default ResumePage;