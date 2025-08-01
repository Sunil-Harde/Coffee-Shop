import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="h-[120px] w-[120px] border-8 rounded-full border-b-amber-400  border-gray-800 animate-spin "></div>
            </div>

        </div>
    )
}

export default Loading