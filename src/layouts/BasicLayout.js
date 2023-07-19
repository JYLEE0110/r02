import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 

        <div className="container mx-auto w-full  ">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>


     );
}
 
export default BasicLayout;