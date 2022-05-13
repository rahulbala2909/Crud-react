import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pricecard from './components/Pricecard';
function Price(props){

 let data = [
    {
      product:"FREE",
      price:0,
      users:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Report",
      reportsEnabler:false
    },

    {
      product:"PRO",
      price:49,
      users:"5 User",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Report",
      reportsEnabler:false
    },

    {
      product:"PREMIUIM",
      price:99,
      users:"Unlimited Users",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Unlimited Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Report",
      reportsEnabler:true
    }
  ] 





  return <>
    <section className='pricing py-5'>
      <div className='constainer'>
        <div className='row'>
          {
            data.map((e)=>{
              return <Pricecard data={e}/>
            })
          }
        </div>
      </div>
    </section>
</>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Price/>);


