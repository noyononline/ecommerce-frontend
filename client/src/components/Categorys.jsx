import React from "react";
import Carousel from "react-multi-carousel";
import {} from 'react-multi-carousel/lib/styles.css'
import { Link } from "react-router-dom";
const Categorys = () => {
    const categorys = ['Clothing','Sports','Phones','Laptop','Monitors','Tablets','Auido','Bags','Televisions']
    const responsive = {
        superLargeDesktop : {
            breakpoint : {max:4000, min:3000},
            items : 6
        },
        desktop : {
            breakpoint : {max:3000, min:1024},
            items : 6
        },
        tablet : {
            breakpoint : {max:1024, min:991},
            items : 4
        },        
        xtablet : {
            breakpoint : {max:991, min:768},
            items : 3
        },
        mobile : {
            breakpoint : {max:768, min:464},
            items : 2
        },
        mobilexs : {
            breakpoint : {max:464, min:0},
            items : 1
        }
    }
    return (
        <div className="w-[85%] lg:90% mx-auto relative">
            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                responsive={responsive}
                transitionDuration={500}
            >
                {
                    categorys.map((category,i) => <Link className="h-[185px] border block" key={i} to="#">
                        <div className="w-full h-full relative p-3">
                            <img src={`http://localhost:3000/images/products/${i+1}.webp`} alt="Category" /> 
                            <div className="absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center">
                                <span className="py-[2px] px-6 bg-[#3330305d] text-white">{category}</span>
                            </div> 
                        </div>
                    </Link>)
                }
            </Carousel>
        </div>
    )
}

export default Categorys