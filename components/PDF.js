import React from 'react'
import Invoice from "./Invoice"
import Pdf from "react-to-pdf";
const options = {
    orientation: 'landscape',
    unit: 'in'

};
const ref = React.createRef();
export default function index(props) {
    return (
        <div className='w-full'>

            <div ref={ref}>
                <Invoice />

            </div>
            <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </div>
    )
}
