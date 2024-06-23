import React from "react";
import Carousel from "react-multi-carousel";
import {} from "react-multi-carousel/lib/styles.css"
import {Link} from "react-router-dom"
import {FiChevronRight,FiChevronLeft} from "react-icons/fi"
const Products = ({title}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items : 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items : 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items : 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items : 1
        }
    }

    const products = [
        [1,2,3],
        [4,5,6,]
    ]

    const ButtonGroup = ({next,previous})=>{
        return(
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-slate-600">{title}</div>
                <div className="flex justify-center items-center gap-3 text-slate-600">
                    <button onClick={()=> previous()} className="w-[30px] h-[30px] flex justify-center items-center bg-slate-100 border border-slate-200">
                        <span><FiChevronLeft/></span>
                    </button>
                    <button onClick={()=> next()} className="w-[30px] h-[30px] flex justify-center items-center bg-slate-100 border border-slate-200">
                        <span><FiChevronRight/></span>
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className="flex gap-8 flex-col-reverse">
            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={false}
                responsive={responsive}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup/>}
            >
                {
                    products.map((p,i) => 
                    <div key={i} className="flex flex-col justify-start gap-2">
                        {
                            p.map(pl => 
                                <Link className="flex justify-start items-start" to="#">
                                    <img className="w-[110px] h-[110px]" src={`http://localhost:3000/images/products/${pl}.webp`} alt="" />
                                    <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                                        <h2>Long Sleev Casual Shirt for Man</h2>
                                        <span className="text-lg font-bold">$456</span>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                    )
                }
            </Carousel>
        </div>
    )
}

export default Products