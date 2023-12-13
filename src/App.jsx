import {Navbar,Hero,Testimonals,Carddeal,Clients,Billing,Business,CTA,Footer,Stats} from './components'
import styles from "./style"
const App = () => {
  return (
   <div className="bg-primary w-full overflow-hidden  ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
       <Navbar/>
      </div>
    </div>
    <div className={`bg-primary${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} ` }>
        <Stats/>
        <Business/>
        <Billing />
        <Carddeal/>
        <Testimonals/> 
        <Clients/> 
        <CTA />
        <Footer/>    
      </div>
    </div>   
   </div>
  )
}
export default App  