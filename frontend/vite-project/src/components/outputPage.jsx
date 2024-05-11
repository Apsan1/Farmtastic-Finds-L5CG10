import React from "react";

const defaultProp = {
    title: "404",
    description: "Page Not Found",
    img: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
};

const errorProp = {
    title: "Error",
    description: "An unexpected error has occurred",
    img: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
};

const successProp = {
    title: "Success",
    description: "Order Completed",
    img: "https://i.gifer.com/7efs.gif"
};

export const DefaultOutput = ({title, description, img, isSuccess}) => {
    function handleShopNow() {
        window.location.href = '/shop';
    }

    return (
        <div className="py-10 flex w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        <div className="">
                            <h4 className={`mb-2 font-medium text-center ${isSuccess ? 'text-green-700' : 'text-red-700'} xl:text-3xl`}>{title || defaultProp.title}</h4>
                            <p className="text-gray-700">{description || defaultProp.description}</p>
                            <img src={img || defaultProp.img} alt="404" className="w-full h-[300px] object-cover my-4" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mb-8 flex-col">
                        <h1 className="text-lg font-medium text-gray-700">You can still find products in shop</h1>
                        <button
                            onClick={handleShopNow}
                            className="transition-transform hover:scale-110 flex items-center justify-center px-4 py-2 mt-4 text-lg font-semibold text-white bg-accent rounded-md"
                        >
                            Shop Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Error = () => {
    return (
        <DefaultOutput title={errorProp.title} description={errorProp.description} img={errorProp.img} isSuccess={false} />
    );
}

export const Success = () => {
            localStorage.clear();
            window.location.href = '/shop';
            return null;
}

export const CODSuccess = () => {
            localStorage.clear();
        return (
            <DefaultOutput title={successProp.title} description={successProp.description} img={successProp.img} isSuccess={true} />
        );
}
export default DefaultOutput;
