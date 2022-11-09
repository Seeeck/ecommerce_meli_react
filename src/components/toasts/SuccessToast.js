import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const SuccessToast = ({position}) => {

    return (
        <Toaster
            position={position}
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
               
               
                

                // Default options for specific types
                success: {
                    duration: 1000,
                    theme: {
                        primary: '#2CCA1F',
                        secondary: 'black',
                    },
                },
                error: {
                    duration: 2000,
                    theme: {
                      primary: 'red',
                      secondary: 'black',
                    },
                  },
            }}
        />
    )
}

export default SuccessToast;